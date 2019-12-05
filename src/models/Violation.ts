import { Schema, SchemaTypes, Types } from "mongoose";

const schemaDefinition = {
  vehicleNumber: { type: SchemaTypes.Number },
  violationsCharged: { type: SchemaTypes.Number },
  violationsChargedName: { type: SchemaTypes.String },
};

export const violationSchema = new Schema(schemaDefinition);

export interface IViolation extends Types.Subdocument {
  vehicleNumber: number;
  violationsCharged: number;
  violationsChargedName: string;
}
