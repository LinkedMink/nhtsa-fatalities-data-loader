import { Schema, SchemaTypes, Types } from "mongoose";

const schemaDefinition = {
  state_number: { type: SchemaTypes.Number },
  consecutive_number: { type: SchemaTypes.Number },
  vehicle_number: { type: SchemaTypes.Number },
  drivers_vision_obscured_by: { type: SchemaTypes.Number },
  drivers_vision_obscured_by_name: { type: SchemaTypes.String },
};

export const visionObstructionSchema = new Schema(schemaDefinition);

export interface IVisionObstruction extends Types.Subdocument {
  state_number: number;
  consecutive_number: number;
  vehicle_number: number;
  drivers_vision_obscured_by: number;
  drivers_vision_obscured_by_name: string;
}
