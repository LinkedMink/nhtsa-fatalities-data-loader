import { Schema, SchemaTypes, Types } from "mongoose";

const schemaDefinition = {
  vehicleNumber: { type: SchemaTypes.Number },
  numberOfMotorVehiclesInTransportMvit: { type: SchemaTypes.Number },
  numberOfOccupants: { type: SchemaTypes.Number },
  dayOfCrash: { type: SchemaTypes.Number },
  monthOfCrash: { type: SchemaTypes.Number },
  hourOfCrash: { type: SchemaTypes.Number },
  minuteOfCrash: { type: SchemaTypes.Number },
  firstHarmfulEvent: { type: SchemaTypes.Number },
  firstHarmfulEventName: { type: SchemaTypes.Number },
  mannerOfCollision: { type: SchemaTypes.Number },
  mannerOfCollisionName: { type: SchemaTypes.Number },
  unitType: { type: SchemaTypes.Number },
  hitAndRun: { type: SchemaTypes.Number },
  registrationState: { type: SchemaTypes.Number },
  registrationStateName: { type: SchemaTypes.Number },
  registeredVehicleOwner: { type: SchemaTypes.Number },
  registeredVehicleOwnerName: { type: SchemaTypes.Number },
  vehicleMake: { type: SchemaTypes.Number },
  vehicleMakeName: { type: SchemaTypes.Number },
  vehicleModel: { type: SchemaTypes.Number },
  makeModelCombined: { type: SchemaTypes.Number },
  bodyType: { type: SchemaTypes.Number },
  bodyTypeName: { type: SchemaTypes.Number },
  vehicleModelYear: { type: SchemaTypes.Number },
  vehicleIdentificationNumberVin: { type: SchemaTypes.Number },
  vinCharacter1: { type: SchemaTypes.Number },
  vinCharacter2: { type: SchemaTypes.Number },
  vinCharacter3: { type: SchemaTypes.Number },
  vinCharacter4: { type: SchemaTypes.Number },
  vinCharacter5: { type: SchemaTypes.Number },
  vinCharacter6: { type: SchemaTypes.Number },
  vinCharacter7: { type: SchemaTypes.Number },
  vinCharacter8: { type: SchemaTypes.Number },
  vinCharacter9: { type: SchemaTypes.Number },
  vinCharacter10: { type: SchemaTypes.Number },
  vinCharacter11: { type: SchemaTypes.Number },
  vinCharacter12: { type: SchemaTypes.Number },
  vehicleTrailing: { type: SchemaTypes.Number },
  mcidIssuingAuthority: { type: SchemaTypes.Number },
  mcidIssuingAuthorityName: { type: SchemaTypes.Number },
  mcidIdentificationNumber: { type: SchemaTypes.Number },
  motorCarrierIdentificationNumber: { type: SchemaTypes.Number },
  grossVehicleWeightRating: { type: SchemaTypes.Number },
  vehicleConfiguration: { type: SchemaTypes.Number },
  cargoBodyType: { type: SchemaTypes.Number },
  hazardousMaterialInvolvement: { type: SchemaTypes.Number },
  hazardousMaterialPlacard: { type: SchemaTypes.Number },
  hazardousMaterialIdentificationNumber: { type: SchemaTypes.Number },
  hazardousMaterialClassNumber: { type: SchemaTypes.Number },
  releaseOfHazardousMaterialFromTheCargoCompartment: { type: SchemaTypes.Number },
  busUse: { type: SchemaTypes.Number },
  specialUse: { type: SchemaTypes.Number },
  specialUseName: { type: SchemaTypes.Number },
  emergencyMotorVehicleUse: { type: SchemaTypes.Number },
  underrideOverride: { type: SchemaTypes.Number },
  underrideOverrideName: { type: SchemaTypes.Number },
  initialContactPoint: { type: SchemaTypes.Number },
  extentOfDamage: { type: SchemaTypes.Number },
  vehicleRemoval: { type: SchemaTypes.Number },
  mostHarmfulEvent: { type: SchemaTypes.Number },
  relatedFactorsVehicleLevel1: { type: SchemaTypes.Number },
  relatedFactorsVehicleLevel2: { type: SchemaTypes.Number },
  fireOccurrence: { type: SchemaTypes.Number },
  fatalitiesInVehicle: { type: SchemaTypes.Number },
};

export const parkWorkVehicleSchema = new Schema(schemaDefinition);

export interface IParkWorkVehicle extends Types.Subdocument {
  vehicleNumber: number;
  numberOfMotorVehiclesInTransportMvit: number;
  numberOfOccupants: number;
  dayOfCrash: number;
  monthOfCrash: number;
  hourOfCrash: number;
  minuteOfCrash: number;
  firstHarmfulEvent: number;
  firstHarmfulEventName: number;
  mannerOfCollision: number;
  mannerOfCollisionName: number;
  unitType: number;
  hitAndRun: number;
  registrationState: number;
  registrationStateName: number;
  registeredVehicleOwner: number;
  registeredVehicleOwnerName: number;
  vehicleMake: number;
  vehicleMakeName: number;
  vehicleModel: number;
  makeModelCombined: number;
  bodyType: number;
  bodyTypeName: number;
  vehicleModelYear: number;
  vehicleIdentificationNumberVin: number;
  vinCharacter1: number;
  vinCharacter2: number;
  vinCharacter3: number;
  vinCharacter4: number;
  vinCharacter5: number;
  vinCharacter6: number;
  vinCharacter7: number;
  vinCharacter8: number;
  vinCharacter9: number;
  vinCharacter10: number;
  vinCharacter11: number;
  vinCharacter12: number;
  vehicleTrailing: number;
  mcidIssuingAuthority: number;
  mcidIssuingAuthorityName: number;
  mcidIdentificationNumber: number;
  motorCarrierIdentificationNumber: number;
  grossVehicleWeightRating: number;
  vehicleConfiguration: number;
  cargoBodyType: number;
  hazardousMaterialInvolvement: number;
  hazardousMaterialPlacard: number;
  hazardousMaterialIdentificationNumber: number;
  hazardousMaterialClassNumber: number;
  releaseOfHazardousMaterialFromTheCargoCompartment: number;
  busUse: number;
  specialUse: number;
  specialUseName: number;
  emergencyMotorVehicleUse: number;
  underrideOverride: number;
  underrideOverrideName: number;
  initialContactPoint: number;
  extentOfDamage: number;
  vehicleRemoval: number;
  mostHarmfulEvent: number;
  relatedFactorsVehicleLevel1: number;
  relatedFactorsVehicleLevel2: number;
  fireOccurrence: number;
  fatalitiesInVehicle: number;
}
