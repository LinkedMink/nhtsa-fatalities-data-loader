import { Schema, SchemaTypes, Types } from "mongoose";

const schemaDefinition = {
  state_number: { type: SchemaTypes.Number },
  consecutive_number: { type: SchemaTypes.Number },
  vehicle_number: { type: SchemaTypes.Number },
  driver_maneuvered_to_avoid: { type: SchemaTypes.Number },
  driver_maneuvered_to_avoid_name: { type: SchemaTypes.String },
};

export const maneuverSchema = new Schema(schemaDefinition);

export interface IManeuver extends Types.Subdocument {
  state_number: number;
  consecutive_number: number;
  vehicle_number: number;
  driver_maneuvered_to_avoid: number;
  driver_maneuvered_to_avoid_name: string;
}
