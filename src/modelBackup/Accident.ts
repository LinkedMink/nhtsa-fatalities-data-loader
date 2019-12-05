import { Document, model, Schema, SchemaTypes, Types } from "mongoose";

import { crashEventSchema, ICrashEvent } from "./CrashEvent";
import { damageSchema, IDamage } from "./Damage";
import { distractionSchema, IDistraction } from "./Distraction";
import { driverImpairSchema, IDriverImpair } from "./DriverImpair";
import { factorSchema, IFactor } from "./Factor";
import { IManeuver, maneuverSchema } from "./Maneuver";
import { INonMotoristCrash, nonMotoristCrashSchema } from "./NonMotoristCrash";
import { INonMotoristImpair, nonMotoristImpairSchema } from "./NonMotoristImpair";
import { INonMotoristPrior, nonMotoristPriorSchema } from "./NonMotoristPrior";
import { INonMotoristSafetyEquipment, nonMotoristSafetyEquipmentSchema } from "./NonMotoristSafetyEquipment";
import { IParkWorkVehicle, parkWorkVehicleSchema } from "./ParkWorkVehicle";
import { IPedestrianBicycle, pedestrianBicycleSchema } from "./PedestrianBicycle";
import { IPerson, personSchema } from "./Person";
import { IPoint, pointSchema } from "./Point";
import { IVehicle, vehicleSchema } from "./Vehicle";
import { IVehicleDetails, vehicleDetailsSchema } from "./VehicleDetails";
import { IVehicleEvent, vehicleEventSchema } from "./VehicleEvent";
import { IViolation, violationSchema } from "./Violation";
import { IVisionObstruction, visionObstructionSchema } from "./VisionObstruction";

const accidentSchema = new Schema({
  consecutive_number: {
    type: SchemaTypes.Number,
    index: true,
    unique: true,
  },
  state_number: {
    type: SchemaTypes.Number,
  },
  state_name: {
    type: SchemaTypes.String,
  },
  number_of_vehicle_forms_submitted_all: {
    type: SchemaTypes.Number,
  },
  number_of_motor_vehicles_in_transport_mvit: {
    type: SchemaTypes.Number,
  },
  number_of_parked_working_vehicles: {
    type: SchemaTypes.Number,
  },
  number_of_forms_submitted_for_persons_not_in_motor_vehicles: {
    type: SchemaTypes.Number,
  },
  number_of_persons_not_in_motor_vehicles_in_transport_mvit: {
    type: SchemaTypes.Number,
  },
  number_of_persons_in_motor_vehicles_in_transport_mvit: {
    type: SchemaTypes.Number,
  },
  number_of_forms_submitted_for_persons_in_motor_vehicles: {
    type: SchemaTypes.Number,
  },
  county: {
    type: SchemaTypes.Number,
  },
  city: {
    type: SchemaTypes.Number,
  },
  day_of_crash: {
    type: SchemaTypes.Number,
  },
  month_of_crash: {
    type: SchemaTypes.Number,
  },
  year_of_crash: {
    type: SchemaTypes.Number,
  },
  day_of_week: {
    type: SchemaTypes.Number,
  },
  hour_of_crash: {
    type: SchemaTypes.Number,
  },
  minute_of_crash: {
    type: SchemaTypes.Number,
  },
  national_highway_system: {
    type: SchemaTypes.Number,
  },
  land_use: {
    type: SchemaTypes.Number,
  },
  land_use_name: {
    type: SchemaTypes.String,
  },
  functional_system: {
    type: SchemaTypes.Number,
  },
  functional_system_name: {
    type: SchemaTypes.String,
  },
  ownership: {
    type: SchemaTypes.Number,
  },
  ownership_name: {
    type: SchemaTypes.String,
  },
  route_signing: {
    type: SchemaTypes.Number,
  },
  route_signing_name: {
    type: SchemaTypes.String,
  },
  trafficway_identifier: {
    type: SchemaTypes.String,
  },
  trafficway_identifier_2: {
    type: SchemaTypes.String,
  },
  milepoint: {
    type: SchemaTypes.Number,
  },
  location: {
    type: pointSchema,
  },
  /*
  latitude: {
    type: SchemaTypes.Number,
  },
  longitude: {
    type: SchemaTypes.Number,
  },
  */
  special_jurisdiction: {
    type: SchemaTypes.Number,
  },
  special_jurisdiction_name: {
    type: SchemaTypes.String,
  },
  first_harmful_event: {
    type: SchemaTypes.Number,
  },
  first_harmful_event_name: {
    type: SchemaTypes.String,
  },
  manner_of_collision: {
    type: SchemaTypes.Number,
  },
  manner_of_collision_name: {
    type: SchemaTypes.String,
  },
  relation_to_junction_within_interchange_area: {
    type: SchemaTypes.String,
  },
  relation_to_junction_specific_location: {
    type: SchemaTypes.Number,
  },
  relation_to_junction_specific_location_name: {
    type: SchemaTypes.String,
  },
  type_of_intersection: {
    type: SchemaTypes.String,
  },
  work_zone: {
    type: SchemaTypes.String,
  },
  relation_to_trafficway: {
    type: SchemaTypes.Number,
  },
  relation_to_trafficway_name: {
    type: SchemaTypes.String,
  },
  light_condition: {
    type: SchemaTypes.Number,
  },
  light_condition_name: {
    type: SchemaTypes.String,
  },
  atmospheric_conditions_1: {
    type: SchemaTypes.Number,
  },
  atmospheric_conditions_1_name: {
    type: SchemaTypes.String,
  },
  atmospheric_conditions_2: {
    type: SchemaTypes.Number,
  },
  atmospheric_conditions_2_name: {
    type: SchemaTypes.String,
  },
  atmospheric_conditions: {
    type: SchemaTypes.Number,
  },
  atmospheric_conditions_name: {
    type: SchemaTypes.String,
  },
  school_bus_related: {
    type: SchemaTypes.String,
  },
  rail_grade_crossing_identifier: {
    type: SchemaTypes.String,
  },
  hour_of_notification: {
    type: SchemaTypes.Number,
  },
  minute_of_notification: {
    type: SchemaTypes.Number,
  },
  hour_of_arrival_at_scene: {
    type: SchemaTypes.Number,
  },
  minute_of_arrival_at_scene: {
    type: SchemaTypes.Number,
  },
  hour_of_ems_arrival_at_hospital: {
    type: SchemaTypes.Number,
  },
  minute_of_ems_arrival_at_hospital: {
    type: SchemaTypes.Number,
  },
  related_factors_crash_level_1: {
    type: SchemaTypes.Number,
  },
  related_factors_crash_level_1_name: {
    type: SchemaTypes.String,
  },
  related_factors_crash_level_2: {
    type: SchemaTypes.Number,
  },
  related_factors_crash_level_2_name: {
    type: SchemaTypes.String,
  },
  related_factors_crash_level_3: {
    type: SchemaTypes.Number,
  },
  related_factors_crash_level_3_name: {
    type: SchemaTypes.String,
  },
  number_of_fatalities: {
    type: SchemaTypes.Number,
  },
  number_of_drunk_drivers: {
    type: SchemaTypes.Number,
  },
  timestamp_of_crash: {
    type: SchemaTypes.Date,
    index: true,
  },
  distractions: [distractionSchema],
});

export interface IAccident extends Document {
  consecutive_number: number;
  state_number: number;
  state_name: string;
  number_of_vehicle_forms_submitted_all: number;
  number_of_motor_vehicles_in_transport_mvit: number;
  number_of_parked_working_vehicles: number;
  number_of_forms_submitted_for_persons_not_in_motor_vehicles: number;
  number_of_persons_not_in_motor_vehicles_in_transport_mvit: number;
  number_of_persons_in_motor_vehicles_in_transport_mvit: number;
  number_of_forms_submitted_for_persons_in_motor_vehicles: number;
  county: number;
  city: number;
  day_of_crash: number;
  month_of_crash: number;
  year_of_crash: number;
  day_of_week: number;
  hour_of_crash: number;
  minute_of_crash: number;
  national_highway_system: number;
  land_use: number;
  land_use_name: string;
  functional_system: number;
  functional_system_name: string;
  ownership: number;
  ownership_name: string;
  route_signing: number;
  route_signing_name: string;
  trafficway_identifier: string;
  trafficway_identifier_2: string;
  milepoint: number;
  /*
  latitude: number;
  longitude: number;
  */
  location: IPoint;
  special_jurisdiction: number;
  special_jurisdiction_name: string;
  first_harmful_event: number;
  first_harmful_event_name: string;
  manner_of_collision: number;
  manner_of_collision_name: string;
  relation_to_junction_within_interchange_area: string;
  relation_to_junction_specific_location: number;
  relation_to_junction_specific_location_name: string;
  type_of_intersection: string;
  work_zone: string;
  relation_to_trafficway: number;
  relation_to_trafficway_name: string;
  light_condition: number;
  light_condition_name: string;
  atmospheric_conditions_1: number;
  atmospheric_conditions_1_name: string;
  atmospheric_conditions_2: number;
  atmospheric_conditions_2_name: string;
  atmospheric_conditions: number;
  atmospheric_conditions_name: string;
  school_bus_related: string;
  rail_grade_crossing_identifier: string;
  hour_of_notification: number;
  minute_of_notification: number;
  hour_of_arrival_at_scene: number;
  minute_of_arrival_at_scene: number;
  hour_of_ems_arrival_at_hospital: number;
  minute_of_ems_arrival_at_hospital: number;
  related_factors_crash_level_1: number;
  related_factors_crash_level_1_name: string;
  related_factors_crash_level_2: number;
  related_factors_crash_level_2_name: string;
  related_factors_crash_level_3: number;
  related_factors_crash_level_3_name: string;
  number_of_fatalities: number;
  number_of_drunk_drivers: number;
  timestamp_of_crash: Date;
  distractions: Types.Array<IDistraction>;
}

export const Accident = model<IAccident>("Accident", accidentSchema);
