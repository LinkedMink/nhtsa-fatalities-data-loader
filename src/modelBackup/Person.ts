import { Schema, SchemaTypes, Types } from "mongoose";

const schemaDefinition = {
  state_number: { type: SchemaTypes.Number },
  consecutive_number: { type: SchemaTypes.Number },
  number_of_motor_vehicles_in_transport_mvit: { type: SchemaTypes.Number },
  vehicle_number: { type: SchemaTypes.Number },
  person_number: { type: SchemaTypes.Number },
  number_of_motor_vehicle_striking_non_motorist: { type: SchemaTypes.Number },
  county: { type: SchemaTypes.Number },
  day_of_crash: { type: SchemaTypes.Number },
  month_of_crash: { type: SchemaTypes.Number },
  hour_of_crash: { type: SchemaTypes.Number },
  minute_of_crash: { type: SchemaTypes.Number },
  land_use: { type: SchemaTypes.Number },
  land_use_name: { type: SchemaTypes.Number },
  functional_system: { type: SchemaTypes.Number },
  functional_system_name: { type: SchemaTypes.Number },
  first_harmful_event: { type: SchemaTypes.Number },
  first_harmful_event_name: { type: SchemaTypes.Number },
  manner_of_collision: { type: SchemaTypes.Number },
  manner_of_collision_name: { type: SchemaTypes.Number },
  school_bus_related: { type: SchemaTypes.Number },
  vehicle_make: { type: SchemaTypes.Number },
  vehicle_make_name: { type: SchemaTypes.Number },
  make_model_combined: { type: SchemaTypes.Number },
  body_type: { type: SchemaTypes.Number },
  body_type_name: { type: SchemaTypes.Number },
  vehicle_trailing: { type: SchemaTypes.Number },
  special_use: { type: SchemaTypes.Number },
  special_use_name: { type: SchemaTypes.Number },
  emergency_motor_vehicle_use: { type: SchemaTypes.Number },
  rollover: { type: SchemaTypes.Number },
  initial_contact_point: { type: SchemaTypes.Number },
  initial_contact_point_name: { type: SchemaTypes.Number },
  fire_occurrence: { type: SchemaTypes.Number },
  age: { type: SchemaTypes.Number },
  sex: { type: SchemaTypes.Number },
  person_type: { type: SchemaTypes.Number },
  person_type_name: { type: SchemaTypes.Number },
  injury_severity: { type: SchemaTypes.Number },
  injury_severity_name: { type: SchemaTypes.Number },
  seating_position: { type: SchemaTypes.Number },
  seating_position_name: { type: SchemaTypes.Number },
  restraint_system_helmet_use: { type: SchemaTypes.Number },
  restraint_system_helmet_use_name: { type: SchemaTypes.Number },
  indication_of_misuse_of_restraint_system_helmet: { type: SchemaTypes.Number },
  air_bag_deployed: { type: SchemaTypes.Number },
  air_bag_deployed_name: { type: SchemaTypes.Number },
  ejection: { type: SchemaTypes.Number },
  ejection_name: { type: SchemaTypes.Number },
  ejection_path: { type: SchemaTypes.Number },
  ejection_path_name: { type: SchemaTypes.Number },
  extrication: { type: SchemaTypes.Number },
  police_reported_alcohol_involvement: { type: SchemaTypes.Number },
  method_of_alcohol_determination_by_police: { type: SchemaTypes.Number },
  alcohol_test_status1: { type: SchemaTypes.Number },
  alcohol_test_status2: { type: SchemaTypes.Number },
  alcohol_test_status3: { type: SchemaTypes.Number },
  alcohol_test_status3_name: { type: SchemaTypes.Number },
  police_reported_drug_involvement: { type: SchemaTypes.Number },
  method_of_drug_determination_by_police: { type: SchemaTypes.Number },
  drug_test_status: { type: SchemaTypes.Number },
  drug_test_type1: { type: SchemaTypes.Number },
  drug_test_type2: { type: SchemaTypes.Number },
  drug_test_type3: { type: SchemaTypes.Number },
  drug_test_type4: { type: SchemaTypes.Number },
  drug_test_type4_name: { type: SchemaTypes.Number },
  drug_test_type5: { type: SchemaTypes.Number },
  drug_test_type5_name: { type: SchemaTypes.Number },
  drug_test_type6: { type: SchemaTypes.Number },
  drug_test_type6_name: { type: SchemaTypes.Number },
  transported_to_first_treatment_facility: { type: SchemaTypes.Number },
  transported_to_first_treatment_facility_name: { type: SchemaTypes.Number },
  died_at_scene_en_route: { type: SchemaTypes.Number },
  day_of_death: { type: SchemaTypes.Number },
  month_of_death: { type: SchemaTypes.Number },
  year_of_death: { type: SchemaTypes.Number },
  hour_of_death: { type: SchemaTypes.Number },
  minute_of_death: { type: SchemaTypes.Number },
  death_time: { type: SchemaTypes.Number },
  lag_hours: { type: SchemaTypes.Number },
  lag_minutes: { type: SchemaTypes.Number },
  related_factors_person_level1: { type: SchemaTypes.Number },
  related_factors_person_level2: { type: SchemaTypes.Number },
  related_factors_person_level3: { type: SchemaTypes.Number },
  fatal_injury_at_work: { type: SchemaTypes.Number },
  hispanic_origin: { type: SchemaTypes.Number },
  hispanic_origin_name: { type: SchemaTypes.Number },
  race: { type: SchemaTypes.Number },
  race_name: { type: SchemaTypes.Number },
  non_motorist_location_at_time_of_crash: { type: SchemaTypes.Number },
  non_motorist_location_at_time_of_crash_name: { type: SchemaTypes.Number },
  timestamp_of_crash: { type: SchemaTypes.Number },
};

export const personSchema = new Schema(schemaDefinition);

export interface IPerson extends Types.Subdocument {
  state_number: number;
  consecutive_number: number;
  number_of_motor_vehicles_in_transport_mvit: number;
  vehicle_number: number;
  person_number: number;
  number_of_motor_vehicle_striking_non_motorist: number;
  county: number;
  day_of_crash: number;
  month_of_crash: number;
  hour_of_crash: number;
  minute_of_crash: number;
  land_use: number;
  land_use_name: number;
  functional_system: number;
  functional_system_name: number;
  first_harmful_event: number;
  first_harmful_event_name: number;
  manner_of_collision: number;
  manner_of_collision_name: number;
  school_bus_related: number;
  vehicle_make: number;
  vehicle_make_name: number;
  make_model_combined: number;
  body_type: number;
  body_type_name: number;
  vehicle_trailing: number;
  special_use: number;
  special_use_name: number;
  emergency_motor_vehicle_use: number;
  rollover: number;
  initial_contact_point: number;
  initial_contact_point_name: number;
  fire_occurrence: number;
  age: number;
  sex: number;
  person_type: number;
  person_type_name: number;
  injury_severity: number;
  injury_severity_name: number;
  seating_position: number;
  seating_position_name: number;
  restraint_system_helmet_use: number;
  restraint_system_helmet_use_name: number;
  indication_of_misuse_of_restraint_system_helmet: number;
  air_bag_deployed: number;
  air_bag_deployed_name: number;
  ejection: number;
  ejection_name: number;
  ejection_path: number;
  ejection_path_name: number;
  extrication: number;
  police_reported_alcohol_involvement: number;
  method_of_alcohol_determination_by_police: number;
  alcohol_test_status1: number;
  alcohol_test_status2: number;
  alcohol_test_status3: number;
  alcohol_test_status3_name: number;
  police_reported_drug_involvement: number;
  method_of_drug_determination_by_police: number;
  drug_test_status: number;
  drug_test_type1: number;
  drug_test_type2: number;
  drug_test_type3: number;
  drug_test_type4: number;
  drug_test_type4_name: number;
  drug_test_type5: number;
  drug_test_type5_name: number;
  drug_test_type6: number;
  drug_test_type6_name: number;
  transported_to_first_treatment_facility: number;
  transported_to_first_treatment_facility_name: number;
  died_at_scene_en_route: number;
  day_of_death: number;
  month_of_death: number;
  year_of_death: number;
  hour_of_death: number;
  minute_of_death: number;
  death_time: number;
  lag_hours: number;
  lag_minutes: number;
  related_factors_person_level1: number;
  related_factors_person_level2: number;
  related_factors_person_level3: number;
  fatal_injury_at_work: number;
  hispanic_origin: number;
  hispanic_origin_name: number;
  race: number;
  race_name: number;
  non_motorist_location_at_time_of_crash: number;
  non_motorist_location_at_time_of_crash_name: number;
  timestamp_of_crash: Date;
}
