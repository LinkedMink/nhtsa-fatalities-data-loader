import { Schema, SchemaTypes, Types } from "mongoose";

const schemaDefinition = {
  state_number: { type: SchemaTypes.Number },
  consecutive_number: { type: SchemaTypes.Number },
  vehicle_number: { type: SchemaTypes.Number },
  person_number: { type: SchemaTypes.Number },
  non_motorist_contributing_circumstances: { type: SchemaTypes.Number },
  non_motorist_contributing_circumstances_name: { type: SchemaTypes.String },
};

export const nonMotoristCrashSchema = new Schema(schemaDefinition);

export interface INonMotoristCrash extends Types.Subdocument {
  state_number: number;
  consecutive_number: number;
  vehicle_number: number;
  person_number: number;
  non_motorist_contributing_circumstances: number;
  non_motorist_contributing_circumstances_name: string;
}
