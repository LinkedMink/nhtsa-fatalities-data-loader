import { Schema, SchemaTypes, Types } from "mongoose";

const schemaDefinition = {
  vehicleNumber: { type: SchemaTypes.Number },
  conditionImpairmentAtTimeOfCrashDriver: { type: SchemaTypes.Number },
  conditionImpairmentAtTimeOfCrashDriverName: { type: SchemaTypes.String },
};

export const driverImpairSchema = new Schema(schemaDefinition);

export interface IDriverImpair extends Types.Subdocument {
  vehicleNumber: number;
  conditionImpairmentAtTimeOfCrashDriver: number;
  conditionImpairmentAtTimeOfCrashDriverName: string;
}
