import { Schema, SchemaTypes, Types } from "mongoose";

const schemaDefinition = {
  state_number: { type: SchemaTypes.Number },
  consecutive_number: { type: SchemaTypes.Number },
  vehicle_number: { type: SchemaTypes.Number },
  condition_impairment_at_time_of_crash_driver: { type: SchemaTypes.Number },
  condition_impairment_at_time_of_crash_driver_name: { type: SchemaTypes.String },
};

export const driverImpairSchema = new Schema(schemaDefinition);

export interface IDriverImpair extends Types.Subdocument {
  state_number: number;
  consecutive_number: number;
  vehicle_number: number;
  condition_impairment_at_time_of_crash_driver: number;
  condition_impairment_at_time_of_crash_driver_name: string;
}
