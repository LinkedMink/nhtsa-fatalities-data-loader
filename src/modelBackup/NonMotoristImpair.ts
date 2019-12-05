import { Schema, SchemaTypes, Types } from "mongoose";

const schemaDefinition = {
  state_number: { type: SchemaTypes.Number },
  consecutive_number: { type: SchemaTypes.Number },
  vehicle_number: { type: SchemaTypes.Number },
  person_number: { type: SchemaTypes.Number },
  condition_impairment_at_time_of_crash_non_motorist: { type: SchemaTypes.Number },
  condition_impairment_at_time_of_crash_non_motorist_name: { type: SchemaTypes.String },
};

export const nonMotoristImpairSchema = new Schema(schemaDefinition);

export interface INonMotoristImpair extends Types.Subdocument {
  state_number: number;
  consecutive_number: number;
  vehicle_number: number;
  person_number: number;
  condition_impairment_at_time_of_crash_non_motorist: number;
  condition_impairment_at_time_of_crash_non_motorist_name: string;
}
