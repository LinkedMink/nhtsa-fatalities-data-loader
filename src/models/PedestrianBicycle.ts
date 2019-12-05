import { Schema, SchemaTypes, Types } from "mongoose";

const schemaDefinition = {
  vehicleNumber: { type: SchemaTypes.Number },
  personNumber: { type: SchemaTypes.Number },
  personType: { type: SchemaTypes.Number },
  personTypeName: { type: SchemaTypes.Number },
  age: { type: SchemaTypes.Number },
  sex: { type: SchemaTypes.Number },
  markedCrosswalkPresent: { type: SchemaTypes.Number },
  sidewalkPresent: { type: SchemaTypes.Number },
  schoolZone: { type: SchemaTypes.Number },
  crashTypePedestrian: { type: SchemaTypes.Number },
  crashTypePedestrianName: { type: SchemaTypes.Number },
  crashTypeBicycle: { type: SchemaTypes.Number },
  crashTypeBicycleName: { type: SchemaTypes.Number },
  crashLocationPedestrian: { type: SchemaTypes.Number },
  crashLocationBicycle: { type: SchemaTypes.Number },
  pedestrianPosition: { type: SchemaTypes.Number },
  bicyclistPosition: { type: SchemaTypes.Number },
  pedestrianInitialDirectionOfTravel: { type: SchemaTypes.Number },
  bicyclistInitialDirectionOfTravel: { type: SchemaTypes.Number },
  motoristInitialDirectionOfTravel: { type: SchemaTypes.Number },
  motoristManeuver: { type: SchemaTypes.Number },
  intersectionLeg: { type: SchemaTypes.Number },
  pedestrianScenario: { type: SchemaTypes.Number },
  pedestrianScenarioName: { type: SchemaTypes.Number },
  crashGroupPedestrian: { type: SchemaTypes.Number },
  crashGroupPedestrianName: { type: SchemaTypes.Number },
  crashGroupBicycle: { type: SchemaTypes.Number },
  crashGroupBicycleName: { type: SchemaTypes.Number },
};

export const pedestrianBicycleSchema = new Schema(schemaDefinition);

export interface IPedestrianBicycle extends Types.Subdocument {
  vehicleNumber: number;
  personNumber: number;
  personType: number;
  personTypeName: number;
  age: number;
  sex: number;
  markedCrosswalkPresent: number;
  sidewalkPresent: number;
  schoolZone: number;
  crashTypePedestrian: number;
  crashTypePedestrianName: number;
  crashTypeBicycle: number;
  crashTypeBicycleName: number;
  crashLocationPedestrian: number;
  crashLocationBicycle: number;
  pedestrianPosition: number;
  bicyclistPosition: number;
  pedestrianInitialDirectionOfTravel: number;
  bicyclistInitialDirectionOfTravel: number;
  motoristInitialDirectionOfTravel: number;
  motoristManeuver: number;
  intersectionLeg: number;
  pedestrianScenario: number;
  pedestrianScenarioName: number;
  crashGroupPedestrian: number;
  crashGroupPedestrianName: number;
  crashGroupBicycle: number;
  crashGroupBicycleName: number;
}
