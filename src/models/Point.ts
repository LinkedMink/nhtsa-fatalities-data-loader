import { Schema, SchemaTypes, Types } from "mongoose";

const schemaDefinition = new Schema({
  type: {
    type: SchemaTypes.String,
    enum: ["Point"],
    required: true,
  },
  coordinates: {
    type: [SchemaTypes.Number],
    required: true,
  },
});

export const pointSchema = new Schema(schemaDefinition);

export interface IPoint extends Types.Subdocument {
  type: string;
  coordinates: number[];
}
