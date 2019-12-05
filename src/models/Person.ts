import { Schema, SchemaTypes, Types } from "mongoose";

const schemaDefinition = {
  numberOfMotorVehiclesInTransportMvit: { type: SchemaTypes.Number },
  vehicleNumber: { type: SchemaTypes.Number },
  personNumber: { type: SchemaTypes.Number },
  numberOfMotorVehicleStrikingNonMotorist: { type: SchemaTypes.Number },
  county: { type: SchemaTypes.Number },
  dayOfCrash: { type: SchemaTypes.Number },
  monthOfCrash: { type: SchemaTypes.Number },
  hourOfCrash: { type: SchemaTypes.Number },
  minuteOfCrash: { type: SchemaTypes.Number },
  landUse: { type: SchemaTypes.Number },
  landUseName: { type: SchemaTypes.Number },
  functionalSystem: { type: SchemaTypes.Number },
  functionalSystemName: { type: SchemaTypes.Number },
  firstHarmfulEvent: { type: SchemaTypes.Number },
  firstHarmfulEventName: { type: SchemaTypes.Number },
  mannerOfCollision: { type: SchemaTypes.Number },
  mannerOfCollisionName: { type: SchemaTypes.Number },
  schoolBusRelated: { type: SchemaTypes.Number },
  vehicleMake: { type: SchemaTypes.Number },
  vehicleMakeName: { type: SchemaTypes.Number },
  makeModelCombined: { type: SchemaTypes.Number },
  bodyType: { type: SchemaTypes.Number },
  bodyTypeName: { type: SchemaTypes.Number },
  vehicleTrailing: { type: SchemaTypes.Number },
  specialUse: { type: SchemaTypes.Number },
  specialUseName: { type: SchemaTypes.Number },
  emergencyMotorVehicleUse: { type: SchemaTypes.Number },
  rollover: { type: SchemaTypes.Number },
  initialContactPoint: { type: SchemaTypes.Number },
  initialContactPointName: { type: SchemaTypes.Number },
  fireOccurrence: { type: SchemaTypes.Number },
  age: { type: SchemaTypes.Number },
  sex: { type: SchemaTypes.Number },
  personType: { type: SchemaTypes.Number },
  personTypeName: { type: SchemaTypes.Number },
  injurySeverity: { type: SchemaTypes.Number },
  injurySeverityName: { type: SchemaTypes.Number },
  seatingPosition: { type: SchemaTypes.Number },
  seatingPositionName: { type: SchemaTypes.Number },
  restraintSystemHelmetUse: { type: SchemaTypes.Number },
  restraintSystemHelmetUseName: { type: SchemaTypes.Number },
  indicationOfMisuseOfRestraintSystemHelmet: { type: SchemaTypes.Number },
  airBagDeployed: { type: SchemaTypes.Number },
  airBagDeployedName: { type: SchemaTypes.Number },
  ejection: { type: SchemaTypes.Number },
  ejectionName: { type: SchemaTypes.Number },
  ejectionPath: { type: SchemaTypes.Number },
  ejectionPathName: { type: SchemaTypes.Number },
  extrication: { type: SchemaTypes.Number },
  policeReportedAlcoholInvolvement: { type: SchemaTypes.Number },
  methodOfAlcoholDeterminationByPolice: { type: SchemaTypes.Number },
  alcoholTestStatus1: { type: SchemaTypes.Number },
  alcoholTestStatus2: { type: SchemaTypes.Number },
  alcoholTestStatus3: { type: SchemaTypes.Number },
  alcoholTestStatus3Name: { type: SchemaTypes.Number },
  policeReportedDrugInvolvement: { type: SchemaTypes.Number },
  methodOfDrugDeterminationByPolice: { type: SchemaTypes.Number },
  drugTestStatus: { type: SchemaTypes.Number },
  drugTestType1: { type: SchemaTypes.Number },
  drugTestType2: { type: SchemaTypes.Number },
  drugTestType3: { type: SchemaTypes.Number },
  drugTestType4: { type: SchemaTypes.Number },
  drugTestType4Name: { type: SchemaTypes.Number },
  drugTestType5: { type: SchemaTypes.Number },
  drugTestType5Name: { type: SchemaTypes.Number },
  drugTestType6: { type: SchemaTypes.Number },
  drugTestType6Name: { type: SchemaTypes.Number },
  transportedToFirstTreatmentFacility: { type: SchemaTypes.Number },
  transportedToFirstTreatmentFacilityName: { type: SchemaTypes.Number },
  diedAtSceneEnRoute: { type: SchemaTypes.Number },
  dayOfDeath: { type: SchemaTypes.Number },
  monthOfDeath: { type: SchemaTypes.Number },
  yearOfDeath: { type: SchemaTypes.Number },
  hourOfDeath: { type: SchemaTypes.Number },
  minuteOfDeath: { type: SchemaTypes.Number },
  deathTime: { type: SchemaTypes.Number },
  lagHours: { type: SchemaTypes.Number },
  lagMinutes: { type: SchemaTypes.Number },
  relatedFactorsPersonLevel1: { type: SchemaTypes.Number },
  relatedFactorsPersonLevel2: { type: SchemaTypes.Number },
  relatedFactorsPersonLevel3: { type: SchemaTypes.Number },
  fatalInjuryAtWork: { type: SchemaTypes.Number },
  hispanicOrigin: { type: SchemaTypes.Number },
  hispanicOriginName: { type: SchemaTypes.Number },
  race: { type: SchemaTypes.Number },
  raceName: { type: SchemaTypes.Number },
  nonMotoristLocationAtTimeOfCrash: { type: SchemaTypes.Number },
  nonMotoristLocationAtTimeOfCrashName: { type: SchemaTypes.Number },
  timestampOfCrash: { type: SchemaTypes.Number },
};

export const personSchema = new Schema(schemaDefinition);

export interface IPerson extends Types.Subdocument {
  numberOfMotorVehiclesInTransportMvit: number;
  vehicleNumber: number;
  personNumber: number;
  numberOfMotorVehicleStrikingNonMotorist: number;
  county: number;
  dayOfCrash: number;
  monthOfCrash: number;
  hourOfCrash: number;
  minuteOfCrash: number;
  landUse: number;
  landUseName: number;
  functionalSystem: number;
  functionalSystemName: number;
  firstHarmfulEvent: number;
  firstHarmfulEventName: number;
  mannerOfCollision: number;
  mannerOfCollisionName: number;
  schoolBusRelated: number;
  vehicleMake: number;
  vehicleMakeName: number;
  makeModelCombined: number;
  bodyType: number;
  bodyTypeName: number;
  vehicleTrailing: number;
  specialUse: number;
  specialUseName: number;
  emergencyMotorVehicleUse: number;
  rollover: number;
  initialContactPoint: number;
  initialContactPointName: number;
  fireOccurrence: number;
  age: number;
  sex: number;
  personType: number;
  personTypeName: number;
  injurySeverity: number;
  injurySeverityName: number;
  seatingPosition: number;
  seatingPositionName: number;
  restraintSystemHelmetUse: number;
  restraintSystemHelmetUseName: number;
  indicationOfMisuseOfRestraintSystemHelmet: number;
  airBagDeployed: number;
  airBagDeployedName: number;
  ejection: number;
  ejectionName: number;
  ejectionPath: number;
  ejectionPathName: number;
  extrication: number;
  policeReportedAlcoholInvolvement: number;
  methodOfAlcoholDeterminationByPolice: number;
  alcoholTestStatus1: number;
  alcoholTestStatus2: number;
  alcoholTestStatus3: number;
  alcoholTestStatus3Name: number;
  policeReportedDrugInvolvement: number;
  methodOfDrugDeterminationByPolice: number;
  drugTestStatus: number;
  drugTestType1: number;
  drugTestType2: number;
  drugTestType3: number;
  drugTestType4: number;
  drugTestType4Name: number;
  drugTestType5: number;
  drugTestType5Name: number;
  drugTestType6: number;
  drugTestType6Name: number;
  transportedToFirstTreatmentFacility: number;
  transportedToFirstTreatmentFacilityName: number;
  diedAtSceneEnRoute: number;
  dayOfDeath: number;
  monthOfDeath: number;
  yearOfDeath: number;
  hourOfDeath: number;
  minuteOfDeath: number;
  deathTime: number;
  lagHours: number;
  lagMinutes: number;
  relatedFactorsPersonLevel1: number;
  relatedFactorsPersonLevel2: number;
  relatedFactorsPersonLevel3: number;
  fatalInjuryAtWork: number;
  hispanicOrigin: number;
  hispanicOriginName: number;
  race: number;
  raceName: number;
  nonMotoristLocationAtTimeOfCrash: number;
  nonMotoristLocationAtTimeOfCrashName: number;
  timestampOfCrash: Date;
}
