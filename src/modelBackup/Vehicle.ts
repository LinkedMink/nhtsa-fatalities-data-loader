import { Schema, SchemaTypes, Types } from "mongoose";

const schemaDefinition = {
  state_number: { type: SchemaTypes.Number },
  consecutive_number: { type: SchemaTypes.Number },
  vehicle_number: { type: SchemaTypes.Number },
  number_of_motor_vehicles_in_transport_mvit: { type: SchemaTypes.Number },
  number_of_occupants: { type: SchemaTypes.Number },
  day_of_crash: { type: SchemaTypes.Number },
  month_of_crash: { type: SchemaTypes.Number },
  hour_of_crash: { type: SchemaTypes.Number },
  minute_of_crash: { type: SchemaTypes.Number },
  first_harmful_event: { type: SchemaTypes.Number },
  first_harmful_event_name: { type: SchemaTypes.Number },
  manner_of_collision: { type: SchemaTypes.Number },
  unit_type: { type: SchemaTypes.Number },
  hit_and_run: { type: SchemaTypes.Number },
  registration_state: { type: SchemaTypes.Number },
  registration_state_name: { type: SchemaTypes.Number },
  registered_vehicle_owner: { type: SchemaTypes.Number },
  registered_vehicle_owner_name: { type: SchemaTypes.Number },
  vehicle_make: { type: SchemaTypes.Number },
  vehicle_make_name: { type: SchemaTypes.Number },
  vehicle_model: { type: SchemaTypes.Number },
  make_model_combined: { type: SchemaTypes.Number },
  body_type: { type: SchemaTypes.Number },
  body_type_name: { type: SchemaTypes.Number },
  vehicle_model_year: { type: SchemaTypes.Number },
  vehicle_identification_number_vin: { type: SchemaTypes.Number },
  vin_character_1: { type: SchemaTypes.Number },
  vin_character_2: { type: SchemaTypes.Number },
  vin_character_3: { type: SchemaTypes.Number },
  vin_character_4: { type: SchemaTypes.Number },
  vin_character_5: { type: SchemaTypes.Number },
  vin_character_6: { type: SchemaTypes.Number },
  vin_character_7: { type: SchemaTypes.Number },
  vin_character_8: { type: SchemaTypes.Number },
  vin_character_9: { type: SchemaTypes.Number },
  vin_character_10: { type: SchemaTypes.Number },
  vin_character_11: { type: SchemaTypes.Number },
  vin_character_12: { type: SchemaTypes.Number },
  vehicle_trailing: { type: SchemaTypes.Number },
  jackknife: { type: SchemaTypes.Number },
  mcid_issuing_authority: { type: SchemaTypes.Number },
  mcid_identification_number: { type: SchemaTypes.Number },
  motor_carrier_identification_number_mcid: { type: SchemaTypes.Number },
  gross_vehicle_weight_rating: { type: SchemaTypes.Number },
  vehicle_configuration: { type: SchemaTypes.Number },
  vehicle_configuration_name: { type: SchemaTypes.Number },
  cargo_body_type: { type: SchemaTypes.Number },
  cargo_body_type_name: { type: SchemaTypes.Number },
  hazardous_material_involvement: { type: SchemaTypes.Number },
  hazardous_material_placard: { type: SchemaTypes.Number },
  hazardous_material_identification_number: { type: SchemaTypes.Number },
  hazardous_material_class_number: { type: SchemaTypes.Number },
  release_of_hazardous_material_from_the_cargo_compartment: { type: SchemaTypes.Number },
  bus_use: { type: SchemaTypes.Number },
  special_use: { type: SchemaTypes.Number },
  special_use_name: { type: SchemaTypes.Number },
  emergency_motor_vehicle_use: { type: SchemaTypes.Number },
  travel_speed: { type: SchemaTypes.Number },
  underride_override: { type: SchemaTypes.Number },
  rollover: { type: SchemaTypes.Number },
  location_of_rollover: { type: SchemaTypes.Number },
  initial_contact_point: { type: SchemaTypes.Number },
  extent_of_damage: { type: SchemaTypes.Number },
  vehicle_removal: { type: SchemaTypes.Number },
  most_harmful_event: { type: SchemaTypes.Number },
  related_factors_vehicle_level_1: { type: SchemaTypes.Number },
  related_factors_vehicle_level_2: { type: SchemaTypes.Number },
  fire_occurrence: { type: SchemaTypes.Number },
  driver_presence: { type: SchemaTypes.Number },
  drivers_license_state: { type: SchemaTypes.Number },
  drivers_zip_code: { type: SchemaTypes.Number },
  non_cdl_license_status: { type: SchemaTypes.Number },
  non_cdl_license_type: { type: SchemaTypes.Number },
  commercial_motor_vehicle_license_status: { type: SchemaTypes.Number },
  compliance_with_cdl_endorsements: { type: SchemaTypes.Number },
  license_compliance_with_class_of_vehicle: { type: SchemaTypes.Number },
  compliance_with_license_restrictions: { type: SchemaTypes.Number },
  driver_height: { type: SchemaTypes.Number },
  driver_weight: { type: SchemaTypes.Number },
  previous_recorded_crashes: { type: SchemaTypes.Number },
  previous_recorded_suspensions_and_revocations: { type: SchemaTypes.Number },
  previous_dwi_convictions: { type: SchemaTypes.Number },
  previous_speeding_convictions: { type: SchemaTypes.Number },
  previous_other_moving_violation_convictions: { type: SchemaTypes.Number },
  month_of_first_crash_suspension_or_conviction: { type: SchemaTypes.Number },
  year_of_first_crash_suspension_or_conviction: { type: SchemaTypes.Number },
  month_of_last_crash_suspension_or_conviction: { type: SchemaTypes.Number },
  year_of_last_crash_suspension_or_conviction: { type: SchemaTypes.Number },
  speeding_related: { type: SchemaTypes.Number },
  related_factors_driver_level_1: { type: SchemaTypes.Number },
  related_factors_driver_level_2: { type: SchemaTypes.Number },
  related_factors_driver_level_3: { type: SchemaTypes.Number },
  related_factors_driver_level_4: { type: SchemaTypes.Number },
  trafficway_description: { type: SchemaTypes.Number },
  total_lanes_in_roadway: { type: SchemaTypes.Number },
  speed_limit: { type: SchemaTypes.Number },
  roadway_alignment: { type: SchemaTypes.Number },
  roadway_grade: { type: SchemaTypes.Number },
  roadway_surface_type: { type: SchemaTypes.Number },
  roadway_surface_condition: { type: SchemaTypes.Number },
  roadway_surface_condition_name: { type: SchemaTypes.Number },
  traffic_control_device: { type: SchemaTypes.Number },
  traffic_control_device_functioning: { type: SchemaTypes.Number },
  pre_event_movement_prior_to_recognition_of_critical_event: { type: SchemaTypes.Number },
  critical_event_precrash: { type: SchemaTypes.Number },
  critical_event_precrash_name: { type: SchemaTypes.Number },
  attempted_avoidance_maneuver: { type: SchemaTypes.Number },
  attempted_avoidance_maneuver_name: { type: SchemaTypes.Number },
  pre_impact_stability: { type: SchemaTypes.Number },
  pre_impact_location: { type: SchemaTypes.Number },
  crash_type: { type: SchemaTypes.Number },
  crash_type_name: { type: SchemaTypes.Number },
  fatalities_in_vehicle: { type: SchemaTypes.Number },
  driver_drinking: { type: SchemaTypes.Number },
  timestamp_of_crash: { type: SchemaTypes.Number },
};

export const vehicleSchema = new Schema(schemaDefinition);

export interface IVehicle extends Types.Subdocument {
  state_number: number;
  consecutive_number: number;
  vehicle_number: number;
  number_of_motor_vehicles_in_transport_mvit: number;
  number_of_occupants: number;
  day_of_crash: number;
  month_of_crash: number;
  hour_of_crash: number;
  minute_of_crash: number;
  first_harmful_event: number;
  first_harmful_event_name: number;
  manner_of_collision: number;
  unit_type: number;
  hit_and_run: number;
  registration_state: number;
  registration_state_name: number;
  registered_vehicle_owner: number;
  registered_vehicle_owner_name: number;
  vehicle_make: number;
  vehicle_make_name: number;
  vehicle_model: number;
  make_model_combined: number;
  body_type: number;
  body_type_name: number;
  vehicle_model_year: number;
  vehicle_identification_number_vin: number;
  vin_character_1: number;
  vin_character_2: number;
  vin_character_3: number;
  vin_character_4: number;
  vin_character_5: number;
  vin_character_6: number;
  vin_character_7: number;
  vin_character_8: number;
  vin_character_9: number;
  vin_character_10: number;
  vin_character_11: number;
  vin_character_12: number;
  vehicle_trailing: number;
  jackknife: number;
  mcid_issuing_authority: number;
  mcid_identification_number: number;
  motor_carrier_identification_number_mcid: number;
  gross_vehicle_weight_rating: number;
  vehicle_configuration: number;
  vehicle_configuration_name: number;
  cargo_body_type: number;
  cargo_body_type_name: number;
  hazardous_material_involvement: number;
  hazardous_material_placard: number;
  hazardous_material_identification_number: number;
  hazardous_material_class_number: number;
  release_of_hazardous_material_from_the_cargo_compartment: number;
  bus_use: number;
  special_use: number;
  special_use_name: number;
  emergency_motor_vehicle_use: number;
  travel_speed: number;
  underride_override: number;
  rollover: number;
  location_of_rollover: number;
  initial_contact_point: number;
  extent_of_damage: number;
  vehicle_removal: number;
  most_harmful_event: number;
  related_factors_vehicle_level_1: number;
  related_factors_vehicle_level_2: number;
  fire_occurrence: number;
  driver_presence: number;
  drivers_license_state: number;
  drivers_zip_code: number;
  non_cdl_license_status: number;
  non_cdl_license_type: number;
  commercial_motor_vehicle_license_status: number;
  compliance_with_cdl_endorsements: number;
  license_compliance_with_class_of_vehicle: number;
  compliance_with_license_restrictions: number;
  driver_height: number;
  driver_weight: number;
  previous_recorded_crashes: number;
  previous_recorded_suspensions_and_revocations: number;
  previous_dwi_convictions: number;
  previous_speeding_convictions: number;
  previous_other_moving_violation_convictions: number;
  month_of_first_crash_suspension_or_conviction: number;
  year_of_first_crash_suspension_or_conviction: number;
  month_of_last_crash_suspension_or_conviction: number;
  year_of_last_crash_suspension_or_conviction: number;
  speeding_related: number;
  related_factors_driver_level_1: number;
  related_factors_driver_level_2: number;
  related_factors_driver_level_3: number;
  related_factors_driver_level_4: number;
  trafficway_description: number;
  total_lanes_in_roadway: number;
  speed_limit: number;
  roadway_alignment: number;
  roadway_grade: number;
  roadway_surface_type: number;
  roadway_surface_condition: number;
  roadway_surface_condition_name: number;
  traffic_control_device: number;
  traffic_control_device_functioning: number;
  pre_event_movement_prior_to_recognition_of_critical_event: number;
  critical_event_precrash: number;
  critical_event_precrash_name: number;
  attempted_avoidance_maneuver: number;
  attempted_avoidance_maneuver_name: number;
  pre_impact_stability: number;
  pre_impact_location: number;
  crash_type: number;
  crash_type_name: number;
  fatalities_in_vehicle: number;
  driver_drinking: number;
  timestamp_of_crash: number;
}
