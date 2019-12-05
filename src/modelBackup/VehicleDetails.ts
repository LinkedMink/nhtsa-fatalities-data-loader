import { Schema, SchemaTypes, Types } from "mongoose";

const schemaDefinition = {
  state_number: { type: SchemaTypes.Number },
  consecutive_number: { type: SchemaTypes.Number },
  vehicle_number: { type: SchemaTypes.Number },
  vehicle_make: { type: SchemaTypes.Number },
  marketing_year: { type: SchemaTypes.Number },
  vehicle_type_code: { type: SchemaTypes.Number },
  vehicle_type: { type: SchemaTypes.Number },
  make_name: { type: SchemaTypes.Number },
  model_code: { type: SchemaTypes.Number },
  vehicle_trim: { type: SchemaTypes.Number },
  vehicle_trim_1: { type: SchemaTypes.Number },
  vehicle_trim_2: { type: SchemaTypes.Number },
  vehicle_trim_3: { type: SchemaTypes.Number },
  vehicle_trim_4: { type: SchemaTypes.Number },
  body_style_code: { type: SchemaTypes.Number },
  body_style: { type: SchemaTypes.Number },
  num_of_doors: { type: SchemaTypes.Number },
  number_of_wheels: { type: SchemaTypes.Number },
  num_of_wheels_by_power_train: { type: SchemaTypes.Number },
  vehicle_manufacturer_code: { type: SchemaTypes.Number },
  vehicle_manufacturer_name: { type: SchemaTypes.Number },
  displacement_cid: { type: SchemaTypes.Number },
  displacement_cc: { type: SchemaTypes.Number },
  cylinder_count_code: { type: SchemaTypes.Number },
  cycle_count: { type: SchemaTypes.Number },
  fuel_code: { type: SchemaTypes.Number },
  fuel: { type: SchemaTypes.Number },
  type_of_fuel_code: { type: SchemaTypes.Number },
  type_of_fuel: { type: SchemaTypes.Number },
  carburetion_types_code: { type: SchemaTypes.Number },
  carburetion_types: { type: SchemaTypes.Number },
  num_of_barrels: { type: SchemaTypes.Number },
  gross_vehicle_weights_range_code: { type: SchemaTypes.Number },
  gross_vehicle_weights_range: { type: SchemaTypes.Number },
  distance_between_axles_for_base_model: { type: SchemaTypes.Number },
  distance_between_axles_for_particular_series: { type: SchemaTypes.Number },
  front_tire: { type: SchemaTypes.Number },
  front_tire_pressure: { type: SchemaTypes.Number },
  front_tire_size_code: { type: SchemaTypes.Number },
  front_tire_size: { type: SchemaTypes.Number },
  rear_tire: { type: SchemaTypes.Number },
  rear_tire_pressure: { type: SchemaTypes.Number },
  rear_tire_size_code: { type: SchemaTypes.Number },
  rear_tire_size: { type: SchemaTypes.Number },
  tonnage_rating: { type: SchemaTypes.Number },
  shipping_weight: { type: SchemaTypes.Number },
  base_price: { type: SchemaTypes.Number },
  drive_type_1: { type: SchemaTypes.Number },
  drive_type_2: { type: SchemaTypes.Number },
  country_sold_code: { type: SchemaTypes.Number },
  country_sold: { type: SchemaTypes.Number },
  brakes_abs_code: { type: SchemaTypes.Number },
  brakes_abs_description: { type: SchemaTypes.Number },
  security_type_code: { type: SchemaTypes.Number },
  security_type: { type: SchemaTypes.Number },
  daytime_running_lights_1: { type: SchemaTypes.Number },
  daytime_running_lights_2: { type: SchemaTypes.Number },
  restraint_type_code: { type: SchemaTypes.Number },
  restraint_type: { type: SchemaTypes.Number },
  cab_configuration_code: { type: SchemaTypes.Number },
  cab_configuration: { type: SchemaTypes.Number },
  axle_type_front_axle_code: { type: SchemaTypes.Number },
  axle_type_front_axle: { type: SchemaTypes.Number },
  axle_type_rear_axle_code: { type: SchemaTypes.Number },
  axle_type_rear_axle: { type: SchemaTypes.Number },
  brake_type_code: { type: SchemaTypes.Number },
  brake_type: { type: SchemaTypes.Number },
  engine_manufacture_code: { type: SchemaTypes.Number },
  engine_manufacture: { type: SchemaTypes.Number },
  engine_model: { type: SchemaTypes.Number },
  duty_type_code: { type: SchemaTypes.Number },
  duty_type: { type: SchemaTypes.Number },
  bed_length_code: { type: SchemaTypes.Number },
  bed_length: { type: SchemaTypes.Number },
  standard_segmentation_code: { type: SchemaTypes.Number },
  standard_segmentation: { type: SchemaTypes.Number },
  plant_code: { type: SchemaTypes.Number },
  plant_country: { type: SchemaTypes.Number },
  plant_city: { type: SchemaTypes.Number },
  plant_country_code: { type: SchemaTypes.Number },
  plant_state_code: { type: SchemaTypes.Number },
  plant_state: { type: SchemaTypes.Number },
  origin_code: { type: SchemaTypes.Number },
  origin: { type: SchemaTypes.Number },
  displacement_liters: { type: SchemaTypes.Number },
  block_type: { type: SchemaTypes.Number },
  head_configuration_1: { type: SchemaTypes.Number },
  head_configuration_2: { type: SchemaTypes.Number },
  valves_per_cylinder: { type: SchemaTypes.Number },
  valves_total: { type: SchemaTypes.Number },
  engine_code: { type: SchemaTypes.Number },
  is_incomplete: { type: SchemaTypes.Number },
  battery_type_code: { type: SchemaTypes.Number },
  battery_type: { type: SchemaTypes.Number },
  total_battery_power: { type: SchemaTypes.Number },
  battery_voltage: { type: SchemaTypes.Number },
  supercharge_flag: { type: SchemaTypes.Number },
  supercharge_flag_description: { type: SchemaTypes.Number },
  turbocharger_flag: { type: SchemaTypes.Number },
  turbocharger_flag_description: { type: SchemaTypes.Number },
  variable_valve_timing_flag: { type: SchemaTypes.Number },
  motorcycles_body_style_code: { type: SchemaTypes.Number },
  motorcycles_body_style: { type: SchemaTypes.Number },
};

export const vehicleDetailsSchema = new Schema(schemaDefinition);

export interface IVehicleDetails extends Types.Subdocument {
  state_number: number;
  consecutive_number: number;
  vehicle_number: number;
  vehicle_make: number;
  marketing_year: number;
  vehicle_type_code: number;
  vehicle_type: number;
  make_name: number;
  model_code: number;
  vehicle_trim: number;
  vehicle_trim_1: number;
  vehicle_trim_2: number;
  vehicle_trim_3: number;
  vehicle_trim_4: number;
  body_style_code: number;
  body_style: number;
  num_of_doors: number;
  number_of_wheels: number;
  num_of_wheels_by_power_train: number;
  vehicle_manufacturer_code: number;
  vehicle_manufacturer_name: number;
  displacement_cid: number;
  displacement_cc: number;
  cylinder_count_code: number;
  cycle_count: number;
  fuel_code: number;
  fuel: number;
  type_of_fuel_code: number;
  type_of_fuel: number;
  carburetion_types_code: number;
  carburetion_types: number;
  num_of_barrels: number;
  gross_vehicle_weights_range_code: number;
  gross_vehicle_weights_range: number;
  distance_between_axles_for_base_model: number;
  distance_between_axles_for_particular_series: number;
  front_tire: number;
  front_tire_pressure: number;
  front_tire_size_code: number;
  front_tire_size: number;
  rear_tire: number;
  rear_tire_pressure: number;
  rear_tire_size_code: number;
  rear_tire_size: number;
  tonnage_rating: number;
  shipping_weight: number;
  base_price: number;
  drive_type_1: number;
  drive_type_2: number;
  country_sold_code: number;
  country_sold: number;
  brakes_abs_code: number;
  brakes_abs_description: number;
  security_type_code: number;
  security_type: number;
  daytime_running_lights_1: number;
  daytime_running_lights_2: number;
  restraint_type_code: number;
  restraint_type: number;
  cab_configuration_code: number;
  cab_configuration: number;
  axle_type_front_axle_code: number;
  axle_type_front_axle: number;
  axle_type_rear_axle_code: number;
  axle_type_rear_axle: number;
  brake_type_code: number;
  brake_type: number;
  engine_manufacture_code: number;
  engine_manufacture: number;
  engine_model: number;
  duty_type_code: number;
  duty_type: number;
  bed_length_code: number;
  bed_length: number;
  standard_segmentation_code: number;
  standard_segmentation: number;
  plant_code: number;
  plant_country: number;
  plant_city: number;
  plant_country_code: number;
  plant_state_code: number;
  plant_state: number;
  origin_code: number;
  origin: number;
  displacement_liters: number;
  block_type: number;
  head_configuration_1: number;
  head_configuration_2: number;
  valves_per_cylinder: number;
  valves_total: number;
  engine_code: number;
  is_incomplete: number;
  battery_type_code: number;
  battery_type: number;
  total_battery_power: number;
  battery_voltage: number;
  supercharge_flag: number;
  supercharge_flag_description: number;
  turbocharger_flag: number;
  turbocharger_flag_description: number;
  variable_valve_timing_flag: number;
  motorcycles_body_style_code: number;
  motorcycles_body_style: number;
}
