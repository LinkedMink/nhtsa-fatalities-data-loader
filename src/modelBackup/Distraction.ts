import { Schema, SchemaTypes, Types } from "mongoose";

const schemaDefinition = {
  state_number: { type: SchemaTypes.Number },
  consecutive_number: { type: SchemaTypes.Number },
  vehicle_number: { type: SchemaTypes.Number },
  driver_distracted_by: { type: SchemaTypes.Number },
  driver_distracted_by_name: { type: SchemaTypes.Number },
};

export const distractionSchema = new Schema(schemaDefinition);

export interface IDistraction extends Types.Subdocument {
  state_number: number;
  consecutive_number: number;
  vehicle_number: number;
  driver_distracted_by: number;
  driver_distracted_by_name: number;
}
