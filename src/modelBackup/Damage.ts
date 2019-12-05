import { Schema, SchemaTypes, Types } from "mongoose";

const schemaDefinition = {
  state_number: { type: SchemaTypes.Number },
  consecutive_number: { type: SchemaTypes.Number },
  vehicle_number: { type: SchemaTypes.Number },
  damaged_areas: { type: SchemaTypes.Number },
  damaged_areas_name: { type: SchemaTypes.String },
};

export const damageSchema = new Schema(schemaDefinition);

export interface IDamage extends Types.Subdocument {
  state_number: number;
  consecutive_number: number;
  vehicle_number: number;
  damaged_areas: number;
  damaged_areas_name: string;
}
