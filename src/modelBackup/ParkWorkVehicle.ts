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
  manner_of_collision_name: { type: SchemaTypes.Number },
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
  mcid_issuing_authority: { type: SchemaTypes.Number },
  mcid_issuing_authority_name: { type: SchemaTypes.Number },
  mcid_identification_number: { type: SchemaTypes.Number },
  motor_carrier_identification_number: { type: SchemaTypes.Number },
  gross_vehicle_weight_rating: { type: SchemaTypes.Number },
  vehicle_configuration: { type: SchemaTypes.Number },
  cargo_body_type: { type: SchemaTypes.Number },
  hazardous_material_involvement: { type: SchemaTypes.Number },
  hazardous_material_placard: { type: SchemaTypes.Number },
  hazardous_material_identification_number: { type: SchemaTypes.Number },
  hazardous_material_class_number: { type: SchemaTypes.Number },
  release_of_hazardous_material_from_the_cargo_compartment: { type: SchemaTypes.Number },
  bus_use: { type: SchemaTypes.Number },
  special_use: { type: SchemaTypes.Number },
  special_use_name: { type: SchemaTypes.Number },
  emergency_motor_vehicle_use: { type: SchemaTypes.Number },
  underride_override: { type: SchemaTypes.Number },
  underride_override_name: { type: SchemaTypes.Number },
  initial_contact_point: { type: SchemaTypes.Number },
  extent_of_damage: { type: SchemaTypes.Number },
  vehicle_removal: { type: SchemaTypes.Number },
  most_harmful_event: { type: SchemaTypes.Number },
  related_factors_vehicle_level1: { type: SchemaTypes.Number },
  related_factors_vehicle_level2: { type: SchemaTypes.Number },
  fire_occurrence: { type: SchemaTypes.Number },
  fatalities_in_vehicle: { type: SchemaTypes.Number },
};

export const parkWorkVehicleSchema = new Schema(schemaDefinition);

export interface IParkWorkVehicle extends Types.Subdocument {
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
  manner_of_collision_name: number;
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
  mcid_issuing_authority: number;
  mcid_issuing_authority_name: number;
  mcid_identification_number: number;
  motor_carrier_identification_number: number;
  gross_vehicle_weight_rating: number;
  vehicle_configuration: number;
  cargo_body_type: number;
  hazardous_material_involvement: number;
  hazardous_material_placard: number;
  hazardous_material_identification_number: number;
  hazardous_material_class_number: number;
  release_of_hazardous_material_from_the_cargo_compartment: number;
  bus_use: number;
  special_use: number;
  special_use_name: number;
  emergency_motor_vehicle_use: number;
  underride_override: number;
  underride_override_name: number;
  initial_contact_point: number;
  extent_of_damage: number;
  vehicle_removal: number;
  most_harmful_event: number;
  related_factors_vehicle_level1: number;
  related_factors_vehicle_level2: number;
  fire_occurrence: number;
  fatalities_in_vehicle: number;
}
