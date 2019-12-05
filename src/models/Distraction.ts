import { Schema, SchemaTypes, Types } from "mongoose";

const schemaDefinition = {
  vehicleNumber: { type: SchemaTypes.Number },
  driverDistractedBy: { type: SchemaTypes.Number },
  driverDistractedByName: { type: SchemaTypes.Number },
};

export const distractionSchema = new Schema(schemaDefinition);

export interface IDistraction extends Types.Subdocument {
  vehicleNumber: number;
  driverDistractedBy: number;
  driverDistractedByName: number;
}
