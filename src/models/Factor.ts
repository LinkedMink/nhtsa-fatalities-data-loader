import { Schema, SchemaTypes, Types } from "mongoose";

const schemaDefinition = {
  vehicleNumber: { type: SchemaTypes.Number },
  contributingCircumstancesMotorVehicle: { type: SchemaTypes.Number },
  contributingCircumstancesMotorVehicleName: { type: SchemaTypes.String },
};

export const factorSchema = new Schema(schemaDefinition);

export interface IFactor extends Types.Subdocument {
  vehicleNumber: number;
  contributingCircumstancesMotorVehicle: number;
  contributingCircumstancesMotorVehicleName: string;
}
