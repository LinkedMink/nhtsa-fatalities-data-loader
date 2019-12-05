import { Schema, SchemaTypes, Types } from "mongoose";

const schemaDefinition = {
  vehicleNumber: { type: SchemaTypes.Number },
  driverManeuveredToAvoid: { type: SchemaTypes.Number },
  driverManeuveredToAvoidName: { type: SchemaTypes.String },
};

export const maneuverSchema = new Schema(schemaDefinition);

export interface IManeuver extends Types.Subdocument {
  vehicleNumber: number;
  driverManeuveredToAvoid: number;
  driverManeuveredToAvoidName: string;
}
