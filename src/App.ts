import { mapRawIAccident } from "./AccidentMapper";
import { connectSingletonDatabase } from "./Database";
import { config, ConfigKey } from "./EnvironmentalConfig";
import { getFileObjects } from "./FileHelpers";
import { logger } from "./Logger";
import { Accident, IAccident } from "./models/Accident";
import { validateCoordinates } from "./models/Point";

const main = async (): Promise<number> => {
  await connectSingletonDatabase();

  logger.info("Load Accidents into memory");

  const accidentMap = new Map<number, any>();
  const accidents = await getFileObjects("accident");
  accidents.forEach((element) => {
    accidentMap.set(element.consecutive_number, element);
  });

  logger.info("Load related objects concurrently");

  const relatedTypes = [
    "cevent",
    "damage",
    "distract",
    "drimpair",
    "factor",
    "maneuver",
    "nmcrash",
    "nmimpair",
    "nmprior",
    "parkwork",
    "pbtype",
    "person",
    "safetyeq",
    "vehicle",
    "vevent",
    "vindecode",
    "violatn",
    "vision",
    "vsoe",
  ];

  const loadRelatedEntities = async () => {
    const relatedType = relatedTypes.pop();
    if (!relatedType) {
      return;
    }

    return getFileObjects(relatedType)
      .then(async (relatedEntities) => {
        relatedEntities.forEach((element) => {
          const accident = accidentMap.get(element.consecutive_number);
          if (accident[relatedType]) {
            accident[relatedType].push(element);
          } else {
            accident[relatedType] = [element];
          }
        });

        await loadRelatedEntities();
      })
      .catch((error: any) => { throw error; });
  };

  const maxFilePromises = config.getNumber(ConfigKey.MaxParallelFiles);
  const initialPromises = [];
  while (initialPromises.length < maxFilePromises) {
    initialPromises.push(loadRelatedEntities());
  }

  await Promise.all(initialPromises)
    .catch((error: any) => { throw error; });

  const totalToSave = accidentMap.size;
  logger.info(`Save entities to Database: ${totalToSave}`);

  let writtenRecords = 0;
  let processedRecords = 0;
  const maxBatchSize = config.getNumber(ConfigKey.MongoDbBatchSize);
  const iterator = accidentMap.entries();
  let nextAccident = iterator.next();

  const saveBatch = async () => {
    const batch: IAccident[] = [];
    while (nextAccident.value && batch.length < maxBatchSize) {
      const [id, accident] = nextAccident.value;
      const accidentModel = mapRawIAccident(accident);

      if (accidentModel.location) {
        const point = accidentModel.location.coordinates;
        if (!validateCoordinates(point)) {
          accidentModel.location = undefined;
          logger.warn(`Invalid Coordinates: id=${accidentModel.consecutiveNumber}, ${point}`);
        }
      }

      batch.push(accidentModel);
      nextAccident = iterator.next();
      accidentMap.delete(id);
    }

    await Accident.collection.insertMany(batch)
      .then((result) => {
        processedRecords += batch.length;
        writtenRecords += result.insertedCount;
      })
      .catch((error) => {
        if (error) {
          const message = `${error.code} : ${error.errmsg} : ${error.name}\n${error.stack}`;
          logger.error(message);
        }
      });
  };

  let batchesToReport = 0;
  while (nextAccident.value) {
    await saveBatch();
    batchesToReport++;

    if (batchesToReport >= 10 || !nextAccident.value) {
      const percentComplete = (processedRecords / totalToSave * 100);
      logger.info(`Saved: ${percentComplete.toFixed(2)}%`);
      batchesToReport = 0;
    }
  }

  logger.info(`Complete Saved: ${writtenRecords} / ${totalToSave}`);

  return 0;
};

main()
  .then((code) => {
    process.exit(code);
  })
  .catch((error) => {
    if (!error) {
      logger.crit("Unhandled Error: Unspecified");
      process.exit(1);
    }

    let message = error.message;
    if (error.stack) {
      message = error.stack;
    }

    logger.crit(message);
    process.exit(1);
  });
