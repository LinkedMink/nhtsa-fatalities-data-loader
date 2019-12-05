import { Schema, SchemaTypes, Types } from "mongoose";

const schemaDefinition = {
  state_number: { type: SchemaTypes.Number },
  consecutive_number: { type: SchemaTypes.Number },
  vehicle_number: { type: SchemaTypes.Number },
  person_number: { type: SchemaTypes.Number },
  person_type: { type: SchemaTypes.Number },
  person_type_name: { type: SchemaTypes.Number },
  age: { type: SchemaTypes.Number },
  sex: { type: SchemaTypes.Number },
  marked_crosswalk_present: { type: SchemaTypes.Number },
  sidewalk_present: { type: SchemaTypes.Number },
  school_zone: { type: SchemaTypes.Number },
  crash_type_pedestrian: { type: SchemaTypes.Number },
  crash_type_pedestrian_name: { type: SchemaTypes.Number },
  crash_type_bicycle: { type: SchemaTypes.Number },
  crash_type_bicycle_name: { type: SchemaTypes.Number },
  crash_location_pedestrian: { type: SchemaTypes.Number },
  crash_location_bicycle: { type: SchemaTypes.Number },
  pedestrian_position: { type: SchemaTypes.Number },
  bicyclist_position: { type: SchemaTypes.Number },
  pedestrian_initial_direction_of_travel: { type: SchemaTypes.Number },
  bicyclist_initial_direction_of_travel: { type: SchemaTypes.Number },
  motorist_initial_direction_of_travel: { type: SchemaTypes.Number },
  motorist_maneuver: { type: SchemaTypes.Number },
  intersection_leg: { type: SchemaTypes.Number },
  pedestrian_scenario: { type: SchemaTypes.Number },
  pedestrian_scenario_name: { type: SchemaTypes.Number },
  crash_group_pedestrian: { type: SchemaTypes.Number },
  crash_group_pedestrian_name: { type: SchemaTypes.Number },
  crash_group_bicycle: { type: SchemaTypes.Number },
  crash_group_bicycle_name: { type: SchemaTypes.Number },
};

export const pedestrianBicycleSchema = new Schema(schemaDefinition);

export interface IPedestrianBicycle extends Types.Subdocument {
  state_number: number;
  consecutive_number: number;
  vehicle_number: number;
  person_number: number;
  person_type: number;
  person_type_name: number;
  age: number;
  sex: number;
  marked_crosswalk_present: number;
  sidewalk_present: number;
  school_zone: number;
  crash_type_pedestrian: number;
  crash_type_pedestrian_name: number;
  crash_type_bicycle: number;
  crash_type_bicycle_name: number;
  crash_location_pedestrian: number;
  crash_location_bicycle: number;
  pedestrian_position: number;
  bicyclist_position: number;
  pedestrian_initial_direction_of_travel: number;
  bicyclist_initial_direction_of_travel: number;
  motorist_initial_direction_of_travel: number;
  motorist_maneuver: number;
  intersection_leg: number;
  pedestrian_scenario: number;
  pedestrian_scenario_name: number;
  crash_group_pedestrian: number;
  crash_group_pedestrian_name: number;
  crash_group_bicycle: number;
  crash_group_bicycle_name: number;
}
