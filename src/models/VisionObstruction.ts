import { Schema, SchemaTypes, Types } from "mongoose";

const schemaDefinition = {
  vehicleNumber: { type: SchemaTypes.Number },
  driversVisionObscuredBy: { type: SchemaTypes.Number },
  driversVisionObscuredByName: { type: SchemaTypes.String },
};

export const visionObstructionSchema = new Schema(schemaDefinition);

export interface IVisionObstruction extends Types.Subdocument {
  vehicleNumber: number;
  driversVisionObscuredBy: number;
  driversVisionObscuredByName: string;
}
