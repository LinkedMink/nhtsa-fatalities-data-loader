import { Schema, SchemaTypes, Types } from "mongoose";

const schemaDefinition = {
  state_number: { type: SchemaTypes.Number },
  consecutive_number: { type: SchemaTypes.Number },
  vehicle_number: { type: SchemaTypes.Number },
  violations_charged: { type: SchemaTypes.Number },
  violations_charged_name: { type: SchemaTypes.String },
};

export const violationSchema = new Schema(schemaDefinition);

export interface IViolation extends Types.Subdocument {
  state_number: number;
  consecutive_number: number;
  vehicle_number: number;
  violations_charged: number;
  violations_charged_name: string;
}
