import { mapRawAccident } from "./AccidentMapper";
import { connectSingletonDatabase } from "./Database";
import { config, ConfigKey } from "./EnvironmentalConfig";
import { getFileObjects } from "./FileHelpers";
import { logger } from "./Logger";
import { Accident, IAccident } from "./models/Accident";

const main = async (): Promise<number> => {
  connectSingletonDatabase();

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

  const maxDownloadPromises = config.getNumber(ConfigKey.MaxParallelDownlaods);
  const initialPromises = [];
  while (initialPromises.length < maxDownloadPromises) {
    initialPromises.push(loadRelatedEntities());
  }

  await Promise.all(initialPromises)
    .catch((error: any) => { throw error; });

  logger.info("Save entities to Database");

  const maxBatchSize = config.getNumber(ConfigKey.MaxParallelDownlaods);
  const iterator = accidentMap.entries();
  let nextAccident = iterator.next();

  const saveBatch = () => {
    const batch: IAccident[] = [];
    while (nextAccident && batch.length < maxBatchSize) {
      const [id, accident] = nextAccident.value;
      batch.push(mapRawAccident(accident));
      accidentMap.delete(id);
      nextAccident = iterator.next();
    }

    Accident.create(batch, (error) => {
      if (error) {
        let message = error.message;
        if (error.errors) {
          message = error.errors;
        }

        logger.error(message);
      }
    });
  };

  while (nextAccident) {
    saveBatch();
  }

  return 0;
};

main()
  .then((code) => {
    process.exit(code);
  })
  .catch((error) => {
    logger.error(error);
    process.exit(1);
  });
