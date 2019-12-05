import { Schema, SchemaTypes, Types } from "mongoose";

const schemaDefinition = {
  vehicleNumber: { type: SchemaTypes.Number },
  vehicleMake: { type: SchemaTypes.Number },
  marketingYear: { type: SchemaTypes.Number },
  vehicleTypeCode: { type: SchemaTypes.Number },
  vehicleType: { type: SchemaTypes.Number },
  makeName: { type: SchemaTypes.Number },
  modelCode: { type: SchemaTypes.Number },
  vehicleTrim: { type: SchemaTypes.Number },
  vehicleTrim1: { type: SchemaTypes.Number },
  vehicleTrim2: { type: SchemaTypes.Number },
  vehicleTrim3: { type: SchemaTypes.Number },
  vehicleTrim4: { type: SchemaTypes.Number },
  bodyStyleCode: { type: SchemaTypes.Number },
  bodyStyle: { type: SchemaTypes.Number },
  numOfDoors: { type: SchemaTypes.Number },
  numberOfWheels: { type: SchemaTypes.Number },
  numOfWheelsByPowerTrain: { type: SchemaTypes.Number },
  vehicleManufacturerCode: { type: SchemaTypes.Number },
  vehicleManufacturerName: { type: SchemaTypes.Number },
  displacementCid: { type: SchemaTypes.Number },
  displacementCc: { type: SchemaTypes.Number },
  cylinderCountCode: { type: SchemaTypes.Number },
  cycleCount: { type: SchemaTypes.Number },
  fuelCode: { type: SchemaTypes.Number },
  fuel: { type: SchemaTypes.Number },
  typeOfFuelCode: { type: SchemaTypes.Number },
  typeOfFuel: { type: SchemaTypes.Number },
  carburetionTypesCode: { type: SchemaTypes.Number },
  carburetionTypes: { type: SchemaTypes.Number },
  numOfBarrels: { type: SchemaTypes.Number },
  grossVehicleWeightsRangeCode: { type: SchemaTypes.Number },
  grossVehicleWeightsRange: { type: SchemaTypes.Number },
  distanceBetweenAxlesForBaseModel: { type: SchemaTypes.Number },
  distanceBetweenAxlesForParticularSeries: { type: SchemaTypes.Number },
  frontTire: { type: SchemaTypes.Number },
  frontTirePressure: { type: SchemaTypes.Number },
  frontTireSizeCode: { type: SchemaTypes.Number },
  frontTireSize: { type: SchemaTypes.Number },
  rearTire: { type: SchemaTypes.Number },
  rearTirePressure: { type: SchemaTypes.Number },
  rearTireSizeCode: { type: SchemaTypes.Number },
  rearTireSize: { type: SchemaTypes.Number },
  tonnageRating: { type: SchemaTypes.Number },
  shippingWeight: { type: SchemaTypes.Number },
  basePrice: { type: SchemaTypes.Number },
  driveType1: { type: SchemaTypes.Number },
  driveType2: { type: SchemaTypes.Number },
  countrySoldCode: { type: SchemaTypes.Number },
  countrySold: { type: SchemaTypes.Number },
  brakesAbsCode: { type: SchemaTypes.Number },
  brakesAbsDescription: { type: SchemaTypes.Number },
  securityTypeCode: { type: SchemaTypes.Number },
  securityType: { type: SchemaTypes.Number },
  daytimeRunningLights1: { type: SchemaTypes.Number },
  daytimeRunningLights2: { type: SchemaTypes.Number },
  restraintTypeCode: { type: SchemaTypes.Number },
  restraintType: { type: SchemaTypes.Number },
  cabConfigurationCode: { type: SchemaTypes.Number },
  cabConfiguration: { type: SchemaTypes.Number },
  axleTypeFrontAxleCode: { type: SchemaTypes.Number },
  axleTypeFrontAxle: { type: SchemaTypes.Number },
  axleTypeRearAxleCode: { type: SchemaTypes.Number },
  axleTypeRearAxle: { type: SchemaTypes.Number },
  brakeTypeCode: { type: SchemaTypes.Number },
  brakeType: { type: SchemaTypes.Number },
  engineManufactureCode: { type: SchemaTypes.Number },
  engineManufacture: { type: SchemaTypes.Number },
  engineModel: { type: SchemaTypes.Number },
  dutyTypeCode: { type: SchemaTypes.Number },
  dutyType: { type: SchemaTypes.Number },
  bedLengthCode: { type: SchemaTypes.Number },
  bedLength: { type: SchemaTypes.Number },
  standardSegmentationCode: { type: SchemaTypes.Number },
  standardSegmentation: { type: SchemaTypes.Number },
  plantCode: { type: SchemaTypes.Number },
  plantCountry: { type: SchemaTypes.Number },
  plantCity: { type: SchemaTypes.Number },
  plantCountryCode: { type: SchemaTypes.Number },
  plantStateCode: { type: SchemaTypes.Number },
  plantState: { type: SchemaTypes.Number },
  originCode: { type: SchemaTypes.Number },
  origin: { type: SchemaTypes.Number },
  displacementLiters: { type: SchemaTypes.Number },
  blockType: { type: SchemaTypes.Number },
  headConfiguration1: { type: SchemaTypes.Number },
  headConfiguration2: { type: SchemaTypes.Number },
  valvesPerCylinder: { type: SchemaTypes.Number },
  valvesTotal: { type: SchemaTypes.Number },
  engineCode: { type: SchemaTypes.Number },
  isIncomplete: { type: SchemaTypes.Number },
  batteryTypeCode: { type: SchemaTypes.Number },
  batteryType: { type: SchemaTypes.Number },
  totalBatteryPower: { type: SchemaTypes.Number },
  batteryVoltage: { type: SchemaTypes.Number },
  superchargeFlag: { type: SchemaTypes.Number },
  superchargeFlagDescription: { type: SchemaTypes.Number },
  turbochargerFlag: { type: SchemaTypes.Number },
  turbochargerFlagDescription: { type: SchemaTypes.Number },
  variableValveTimingFlag: { type: SchemaTypes.Number },
  motorcyclesBodyStyleCode: { type: SchemaTypes.Number },
  motorcyclesBodyStyle: { type: SchemaTypes.Number },
};

export const vehicleDetailSchema = new Schema(schemaDefinition);

export interface IVehicleDetail extends Types.Subdocument {
  vehicleNumber: number;
  vehicleMake: number;
  marketingYear: number;
  vehicleTypeCode: number;
  vehicleType: number;
  makeName: number;
  modelCode: number;
  vehicleTrim: number;
  vehicleTrim1: number;
  vehicleTrim2: number;
  vehicleTrim3: number;
  vehicleTrim4: number;
  bodyStyleCode: number;
  bodyStyle: number;
  numOfDoors: number;
  numberOfWheels: number;
  numOfWheelsByPowerTrain: number;
  vehicleManufacturerCode: number;
  vehicleManufacturerName: number;
  displacementCid: number;
  displacementCc: number;
  cylinderCountCode: number;
  cycleCount: number;
  fuelCode: number;
  fuel: number;
  typeOfFuelCode: number;
  typeOfFuel: number;
  carburetionTypesCode: number;
  carburetionTypes: number;
  numOfBarrels: number;
  grossVehicleWeightsRangeCode: number;
  grossVehicleWeightsRange: number;
  distanceBetweenAxlesForBaseModel: number;
  distanceBetweenAxlesForParticularSeries: number;
  frontTire: number;
  frontTirePressure: number;
  frontTireSizeCode: number;
  frontTireSize: number;
  rearTire: number;
  rearTirePressure: number;
  rearTireSizeCode: number;
  rearTireSize: number;
  tonnageRating: number;
  shippingWeight: number;
  basePrice: number;
  driveType1: number;
  driveType2: number;
  countrySoldCode: number;
  countrySold: number;
  brakesAbsCode: number;
  brakesAbsDescription: number;
  securityTypeCode: number;
  securityType: number;
  daytimeRunningLights1: number;
  daytimeRunningLights2: number;
  restraintTypeCode: number;
  restraintType: number;
  cabConfigurationCode: number;
  cabConfiguration: number;
  axleTypeFrontAxleCode: number;
  axleTypeFrontAxle: number;
  axleTypeRearAxleCode: number;
  axleTypeRearAxle: number;
  brakeTypeCode: number;
  brakeType: number;
  engineManufactureCode: number;
  engineManufacture: number;
  engineModel: number;
  dutyTypeCode: number;
  dutyType: number;
  bedLengthCode: number;
  bedLength: number;
  standardSegmentationCode: number;
  standardSegmentation: number;
  plantCode: number;
  plantCountry: number;
  plantCity: number;
  plantCountryCode: number;
  plantStateCode: number;
  plantState: number;
  originCode: number;
  origin: number;
  displacementLiters: number;
  blockType: number;
  headConfiguration1: number;
  headConfiguration2: number;
  valvesPerCylinder: number;
  valvesTotal: number;
  engineCode: number;
  isIncomplete: number;
  batteryTypeCode: number;
  batteryType: number;
  totalBatteryPower: number;
  batteryVoltage: number;
  superchargeFlag: number;
  superchargeFlagDescription: number;
  turbochargerFlag: number;
  turbochargerFlagDescription: number;
  variableValveTimingFlag: number;
  motorcyclesBodyStyleCode: number;
  motorcyclesBodyStyle: number;
}
