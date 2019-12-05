import { Schema, SchemaTypes, Types } from "mongoose";

const schemaDefinition = {
  state_number: { type: SchemaTypes.Number },
  consecutive_number: { type: SchemaTypes.Number },
  event_number: { type: SchemaTypes.Number },
  vehicle_number_this_vehicle: { type: SchemaTypes.Number },
  area_of_impact_this_vehicle: { type: SchemaTypes.Number },
  area_of_impact_this_vehicle_name: { type: SchemaTypes.String },
  sequence_of_events: { type: SchemaTypes.Number },
  sequence_of_events_name: { type: SchemaTypes.String },
  vehicle_number_other_vehicle: { type: SchemaTypes.Number },
  area_of_impact_other_vehicle: { type: SchemaTypes.Number },
  area_of_impact_other_vehicle_name: { type: SchemaTypes.String },
};

export const crashEventSchema = new Schema(schemaDefinition);

export interface ICrashEvent extends Types.Subdocument {
  state_number: number;
  consecutive_number: number;
  event_number: number;
  vehicle_number_this_vehicle: number;
  area_of_impact_this_vehicle: number;
  area_of_impact_this_vehicle_name: string;
  sequence_of_events: number;
  sequence_of_events_name: string;
  vehicle_number_other_vehicle: number;
  area_of_impact_other_vehicle: number;
  area_of_impact_other_vehicle_name: string;
}
