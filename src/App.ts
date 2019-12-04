import { connectSingletonDatabase } from "./Database";
import { config } from "./EnvironmentalConfig";
import { getFileObjects } from "./FileHelpers";
import { logger } from "./Logger";

const MAX_PARALLEL_FILES = 4;

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
          accident[relatedType] = element;
        });

        await loadRelatedEntities();
      })
      .catch((error: any) => { throw error; });
  };

  const initialPromises = [];
  while (initialPromises.length < MAX_PARALLEL_FILES) {
    initialPromises.push(loadRelatedEntities());
  }

  await Promise.all(initialPromises)
    .catch((error: any) => { throw error; });

  logger.info("Save entities to Database");

  const saveBatch = () => {
    const batch = [];
    // TODO
  };

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
