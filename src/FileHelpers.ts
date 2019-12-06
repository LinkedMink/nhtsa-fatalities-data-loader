import fs from "fs";
import path from "path";

import { config, ConfigKey } from "./EnvironmentalConfig";
import { logger } from "./Logger";

let filesInDataDirectory = fs.readdirSync(config.getString(ConfigKey.DataDirectory));
filesInDataDirectory = filesInDataDirectory.filter((file) => {
  return file.includes(config.getString(ConfigKey.DataYear));
});

export const getFileObjects = (modelType: string): Promise<any[]> => {
  return new Promise((resolve, reject) => {
    const modelFile = filesInDataDirectory.find((element) => element.includes(modelType));
    if (!modelFile) {
      reject(new Error(`Couldn't find file for model: ${modelType}`));
      return;
    }

    const filePath = path.join(config.getString(ConfigKey.DataDirectory), modelFile);
    logger.info(`Loading: ${filePath}`);

    const stream = fs.createReadStream(filePath);
    const fileObjects: any[] = [];
    let previousLine = "";

    stream.on("data", (chunk) => {
      const data = previousLine + chunk;
      const lines = data.split(/\r\n|\r|\n/);

      const lastIndex = lines.length - 1;
      for (let i = 0; i < lastIndex; i++) {
        const fileObject = JSON.parse(lines[i]);
        fileObjects.push(fileObject);
      }

      previousLine = lines[lastIndex];
    });

    stream.on("close", () => {
      logger.info(`Loaded: ${filePath}, bytes=${stream.bytesRead}, objects=${fileObjects.length}`);
      resolve(fileObjects);
    });

    stream.on("error", (error) => {
      logger.error(error);
      reject(error);
    });
  });
};
