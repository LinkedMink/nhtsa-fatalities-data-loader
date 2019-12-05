import { Schema, SchemaTypes, Types } from "mongoose";

const schemaDefinition = {
  state_number: { type: SchemaTypes.Number },
  consecutive_number: { type: SchemaTypes.Number },
  vehicle_number: { type: SchemaTypes.Number },
  person_number: { type: SchemaTypes.Number },
  non_motorist_safety_equipment_use: { type: SchemaTypes.String },
};

export const nonMotoristSafetyEquipmentSchema = new Schema(schemaDefinition);

export interface INonMotoristSafetyEquipment extends Types.Subdocument {
  state_number: number;
  consecutive_number: number;
  vehicle_number: number;
  person_number: number;
  non_motorist_safety_equipment_use: string;
}
