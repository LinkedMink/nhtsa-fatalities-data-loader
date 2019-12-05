import { Schema, SchemaTypes, Types } from "mongoose";

const schemaDefinition = {
  state_number: { type: SchemaTypes.Number },
  consecutive_number: { type: SchemaTypes.Number },
  vehicle_number: { type: SchemaTypes.Number },
  contributing_circumstances_motor_vehicle: { type: SchemaTypes.Number },
  contributing_circumstances_motor_vehicle_name: { type: SchemaTypes.String },
};

export const factorSchema = new Schema(schemaDefinition);

export interface IFactor extends Types.Subdocument {
  state_number: number;
  consecutive_number: number;
  vehicle_number: number;
  contributing_circumstances_motor_vehicle: number;
  contributing_circumstances_motor_vehicle_name: string;
}
