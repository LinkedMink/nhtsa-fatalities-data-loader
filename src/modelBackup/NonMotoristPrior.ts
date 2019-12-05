import { Schema, SchemaTypes, Types } from "mongoose";

const schemaDefinition = {
  state_number: { type: SchemaTypes.Number },
  consecutive_number: { type: SchemaTypes.Number },
  vehicle_number: { type: SchemaTypes.Number },
  person_number: { type: SchemaTypes.Number },
  non_motorist_action_circumstances: { type: SchemaTypes.Number },
  non_motorist_action_circumstances_name: { type: SchemaTypes.String },
};

export const nonMotoristPriorSchema = new Schema(schemaDefinition);

export interface INonMotoristPrior extends Types.Subdocument {
  state_number: number;
  consecutive_number: number;
  vehicle_number: number;
  person_number: number;
  non_motorist_action_circumstances: number;
  non_motorist_action_circumstances_name: string;
}
