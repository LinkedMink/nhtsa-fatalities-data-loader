import { Schema, SchemaTypes, Types } from "mongoose";

const schemaDefinition = {
  name: {
    type: SchemaTypes.String,
    required: true,
  },
};

export const distractionSchema = new Schema(schemaDefinition);

export interface IDistraction extends Types.Subdocument {
  name: string;
}
