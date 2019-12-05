import dotenv from "dotenv";
import fs from "fs";

export enum Environment {
  // localhost
  Local = "local",
  Test = "test",                // Unit Test process
  // Standalone servers
  Development = "development",
  Production = "production",
}

export enum ConfigKey {
  LogFile = "LOG_FILE",
  LogLevel = "LOG_LEVEL",
  MongoDbConnectionString = "MONGO_DB_CONNECTION_STRING",
  MongoDbBatchSize = "MONGO_DB_BATCH_SIZE",
  DataDirectory = "DATA_DIRECTORY",
  DataYear = "DATA_YEAR",
  MaxParallelDownlaods = "MAX_PARALLEL_DOWNLOADS",
}

const configDefaultMap: Map<ConfigKey, string | undefined> = new Map([
  [ConfigKey.LogFile, "combined.log"],
  [ConfigKey.LogLevel, "info"],
  [ConfigKey.MongoDbBatchSize, "20"],
  [ConfigKey.DataDirectory, "./data"],
  [ConfigKey.DataYear, "2015"],
  [ConfigKey.MaxParallelDownlaods, "4"],
]);

if (process.env.NODE_ENV === Environment.Test) {
  dotenv.config({ path: ".env.test" });
}

export class EnvironmentalConfig {
  private fileBuffers: Map<ConfigKey, Buffer> = new Map();
  private jsonObjects: Map<ConfigKey, { [key: string]: any; }> = new Map();
  private isEnvironmentLocalValue: boolean =
    !process.env.NODE_ENV || process.env.NODE_ENV === Environment.Local;
  private packageJsonValue: { [key: string]: any; };

  constructor() {
      // const filePath = isEnvironmentLocal ? "../package.json" : "./package.json";
    const filePath = "./package.json";
    const data = fs.readFileSync(filePath, "utf8");
    this.packageJsonValue = JSON.parse(data);
  }

  public get isEnvironmentLocal(): boolean {
    return this.isEnvironmentLocalValue;
  }

  public get packageJson(): { [key: string]: any; } {
    return this.packageJsonValue;
  }

  public getString = (key: ConfigKey) => {
    return this.getConfigValue(key);
  }

  public getNumber = (key: ConfigKey) => {
    const value = this.getConfigValue(key);
    return Number(value);
  }

  public getBool = (key: ConfigKey) => {
    const value = this.getConfigValue(key);
    return value.trim().toLowerCase() === "true";
  }

  public getJsonOrString = (key: ConfigKey) => {
    const json = this.jsonObjects.get(key);
    if (json) {
      return json;
    }

    const value = this.getConfigValue(key).trim();
    if (value.length > 0 && (value[0] === "{" || value[0] === "[")) {
      return this.getJson(key);
    }

    return value;
  }

  public getJson = (key: ConfigKey) => {
    const json = this.jsonObjects.get(key);
    if (json) {
      return json;
    }

    const value = this.getConfigValue(key);
    const parsed = JSON.parse(value) as { [key: string]: any; };
    this.jsonObjects.set(key, parsed);
    return parsed;
  }

  public getFileBuffer = (key: ConfigKey) => {
    const buffer = this.fileBuffers.get(key);
    if (buffer) {
      return buffer;
    }

    if (process.env.NODE_ENV === Environment.Test) {
      return Buffer.alloc(0);
    }

    const filePath = this.getConfigValue(key);
    const data = fs.readFileSync(filePath);
    this.fileBuffers.set(key, data);
    return data;
  }

  private getConfigValue = (key: ConfigKey): string => {
    let configValue = process.env[key];
    if (configValue) {
      return configValue;
    }

    configValue = configDefaultMap.get(key);
    if (configValue !== undefined) {
      return configValue;
    }

    throw new Error(`Environmental variable must be defined: ${key}`);
  }
}

export const config = new EnvironmentalConfig();
