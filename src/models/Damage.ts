import { Schema, SchemaTypes, Types } from "mongoose";

const schemaDefinition = {
  vehicleNumber: { type: SchemaTypes.Number },
  damagedAreas: { type: SchemaTypes.Number },
  damagedAreasName: { type: SchemaTypes.String },
};

export const damageSchema = new Schema(schemaDefinition);

export interface IDamage extends Types.Subdocument {
  vehicleNumber: number;
  damagedAreas: number;
  damagedAreasName: string;
}
