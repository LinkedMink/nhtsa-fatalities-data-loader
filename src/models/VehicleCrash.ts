import { Schema, SchemaTypes, Types } from "mongoose";

import { damageSchema, IDamage } from "./Damage";
import { distractionSchema, IDistraction } from "./Distraction";
import { driverImpairSchema, IDriverImpair } from "./DriverImpair";
import { factorSchema, IFactor } from "./Factor";
import { IManeuver, maneuverSchema } from "./Maneuver";
import { IViolation, violationSchema } from "./Violation";
import { IVisionObstruction, visionObstructionSchema } from "./VisionObstruction";

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
  jackknife: { type: SchemaTypes.Number },
  mcidIssuingAuthority: { type: SchemaTypes.Number },
  mcidIdentificationNumber: { type: SchemaTypes.Number },
  motorCarrierIdentificationNumberMcid: { type: SchemaTypes.Number },
  grossVehicleWeightRating: { type: SchemaTypes.Number },
  vehicleConfiguration: { type: SchemaTypes.Number },
  vehicleConfigurationName: { type: SchemaTypes.Number },
  cargoBodyType: { type: SchemaTypes.Number },
  cargoBodyTypeName: { type: SchemaTypes.Number },
  hazardousMaterialInvolvement: { type: SchemaTypes.Number },
  hazardousMaterialPlacard: { type: SchemaTypes.Number },
  hazardousMaterialIdentificationNumber: { type: SchemaTypes.Number },
  hazardousMaterialClassNumber: { type: SchemaTypes.Number },
  releaseOfHazardousMaterialFromTheCargoCompartment: { type: SchemaTypes.Number },
  busUse: { type: SchemaTypes.Number },
  specialUse: { type: SchemaTypes.Number },
  specialUseName: { type: SchemaTypes.Number },
  emergencyMotorVehicleUse: { type: SchemaTypes.Number },
  travelSpeed: { type: SchemaTypes.Number },
  underrideOverride: { type: SchemaTypes.Number },
  rollover: { type: SchemaTypes.Number },
  locationOfRollover: { type: SchemaTypes.Number },
  initialContactPoint: { type: SchemaTypes.Number },
  extentOfDamage: { type: SchemaTypes.Number },
  vehicleRemoval: { type: SchemaTypes.Number },
  mostHarmfulEvent: { type: SchemaTypes.Number },
  relatedFactorsVehicleLevel1: { type: SchemaTypes.Number },
  relatedFactorsVehicleLevel2: { type: SchemaTypes.Number },
  fireOccurrence: { type: SchemaTypes.Number },
  driverPresence: { type: SchemaTypes.Number },
  driversLicenseState: { type: SchemaTypes.Number },
  driversZipCode: { type: SchemaTypes.Number },
  nonCdlLicenseStatus: { type: SchemaTypes.Number },
  nonCdlLicenseType: { type: SchemaTypes.Number },
  commercialMotorVehicleLicenseStatus: { type: SchemaTypes.Number },
  complianceWithCdlEndorsements: { type: SchemaTypes.Number },
  licenseComplianceWithClassOfVehicle: { type: SchemaTypes.Number },
  complianceWithLicenseRestrictions: { type: SchemaTypes.Number },
  driverHeight: { type: SchemaTypes.Number },
  driverWeight: { type: SchemaTypes.Number },
  previousRecordedCrashes: { type: SchemaTypes.Number },
  previousRecordedSuspensionsAndRevocations: { type: SchemaTypes.Number },
  previousDwiConvictions: { type: SchemaTypes.Number },
  previousSpeedingConvictions: { type: SchemaTypes.Number },
  previousOtherMovingViolationConvictions: { type: SchemaTypes.Number },
  monthOfFirstCrashSuspensionOrConviction: { type: SchemaTypes.Number },
  yearOfFirstCrashSuspensionOrConviction: { type: SchemaTypes.Number },
  monthOfLastCrashSuspensionOrConviction: { type: SchemaTypes.Number },
  yearOfLastCrashSuspensionOrConviction: { type: SchemaTypes.Number },
  speedingRelated: { type: SchemaTypes.Number },
  relatedFactorsDriverLevel1: { type: SchemaTypes.Number },
  relatedFactorsDriverLevel2: { type: SchemaTypes.Number },
  relatedFactorsDriverLevel3: { type: SchemaTypes.Number },
  relatedFactorsDriverLevel4: { type: SchemaTypes.Number },
  trafficwayDescription: { type: SchemaTypes.Number },
  totalLanesInRoadway: { type: SchemaTypes.Number },
  speedLimit: { type: SchemaTypes.Number },
  roadwayAlignment: { type: SchemaTypes.Number },
  roadwayGrade: { type: SchemaTypes.Number },
  roadwaySurfaceType: { type: SchemaTypes.Number },
  roadwaySurfaceCondition: { type: SchemaTypes.Number },
  roadwaySurfaceConditionName: { type: SchemaTypes.Number },
  trafficControlDevice: { type: SchemaTypes.Number },
  trafficControlDeviceFunctioning: { type: SchemaTypes.Number },
  preEventMovementPriorToRecognitionOfCriticalEvent: { type: SchemaTypes.Number },
  criticalEventPrecrash: { type: SchemaTypes.Number },
  criticalEventPrecrashName: { type: SchemaTypes.Number },
  attemptedAvoidanceManeuver: { type: SchemaTypes.Number },
  attemptedAvoidanceManeuverName: { type: SchemaTypes.Number },
  preImpactStability: { type: SchemaTypes.Number },
  preImpactLocation: { type: SchemaTypes.Number },
  crashType: { type: SchemaTypes.Number },
  crashTypeName: { type: SchemaTypes.Number },
  fatalitiesInVehicle: { type: SchemaTypes.Number },
  driverDrinking: { type: SchemaTypes.Number },
  timestampOfCrash: { type: SchemaTypes.Number },

  damages: [damageSchema],
  distractions: [distractionSchema],
  driversImpair: [driverImpairSchema],
  factors: [factorSchema],
  maneuvers: [maneuverSchema],
  violations: [violationSchema],
  visionObstructions: [visionObstructionSchema],
};

export const vehicleCrashSchema = new Schema(schemaDefinition);

export interface IVehicleCrash extends Types.Subdocument {
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
  jackknife: number;
  mcidIssuingAuthority: number;
  mcidIdentificationNumber: number;
  motorCarrierIdentificationNumberMcid: number;
  grossVehicleWeightRating: number;
  vehicleConfiguration: number;
  vehicleConfigurationName: number;
  cargoBodyType: number;
  cargoBodyTypeName: number;
  hazardousMaterialInvolvement: number;
  hazardousMaterialPlacard: number;
  hazardousMaterialIdentificationNumber: number;
  hazardousMaterialClassNumber: number;
  releaseOfHazardousMaterialFromTheCargoCompartment: number;
  busUse: number;
  specialUse: number;
  specialUseName: number;
  emergencyMotorVehicleUse: number;
  travelSpeed: number;
  underrideOverride: number;
  rollover: number;
  locationOfRollover: number;
  initialContactPoint: number;
  extentOfDamage: number;
  vehicleRemoval: number;
  mostHarmfulEvent: number;
  relatedFactorsVehicleLevel1: number;
  relatedFactorsVehicleLevel2: number;
  fireOccurrence: number;
  driverPresence: number;
  driversLicenseState: number;
  driversZipCode: number;
  nonCdlLicenseStatus: number;
  nonCdlLicenseType: number;
  commercialMotorVehicleLicenseStatus: number;
  complianceWithCdlEndorsements: number;
  licenseComplianceWithClassOfVehicle: number;
  complianceWithLicenseRestrictions: number;
  driverHeight: number;
  driverWeight: number;
  previousRecordedCrashes: number;
  previousRecordedSuspensionsAndRevocations: number;
  previousDwiConvictions: number;
  previousSpeedingConvictions: number;
  previousOtherMovingViolationConvictions: number;
  monthOfFirstCrashSuspensionOrConviction: number;
  yearOfFirstCrashSuspensionOrConviction: number;
  monthOfLastCrashSuspensionOrConviction: number;
  yearOfLastCrashSuspensionOrConviction: number;
  speedingRelated: number;
  relatedFactorsDriverLevel1: number;
  relatedFactorsDriverLevel2: number;
  relatedFactorsDriverLevel3: number;
  relatedFactorsDriverLevel4: number;
  trafficwayDescription: number;
  totalLanesInRoadway: number;
  speedLimit: number;
  roadwayAlignment: number;
  roadwayGrade: number;
  roadwaySurfaceType: number;
  roadwaySurfaceCondition: number;
  roadwaySurfaceConditionName: number;
  trafficControlDevice: number;
  trafficControlDeviceFunctioning: number;
  preEventMovementPriorToRecognitionOfCriticalEvent: number;
  criticalEventPrecrash: number;
  criticalEventPrecrashName: number;
  attemptedAvoidanceManeuver: number;
  attemptedAvoidanceManeuverName: number;
  preImpactStability: number;
  preImpactLocation: number;
  crashType: number;
  crashTypeName: number;
  fatalitiesInVehicle: number;
  driverDrinking: number;
  timestampOfCrash: number;

  damages: Types.Array<IDamage>;
  distractions: Types.Array<IDistraction>;
  driversImpair: Types.Array<IDriverImpair>;
  factors: Types.Array<IFactor>;
  maneuvers: Types.Array<IManeuver>;
  violations: Types.Array<IViolation>;
  visionObstructions: Types.Array<IVisionObstruction>;
}
