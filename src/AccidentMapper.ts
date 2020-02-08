import { Types } from "mongoose";

import { IAccident } from "./models/Accident";
import { ICrashEvent } from "./models/CrashEvent";
import { IDamage } from "./models/Damage";
import { IDistraction } from "./models/Distraction";
import { IDriverImpair } from "./models/DriverImpair";
import { IFactor } from "./models/Factor";
import { IManeuver } from "./models/Maneuver";
import { INonMotoristCrash } from "./models/NonMotoristCrash";
import { INonMotoristImpair } from "./models/NonMotoristImpair";
import { INonMotoristPrior } from "./models/NonMotoristPrior";
import { INonMotoristSafetyEquipment } from "./models/NonMotoristSafetyEquipment";
import { IParkWorkVehicle } from "./models/ParkWorkVehicle";
import { IPedestrianBicycle } from "./models/PedestrianBicycle";
import { IPerson } from "./models/Person";
import { IPoint } from "./models/Point";
import { IVehicleCrash } from "./models/VehicleCrash";
import { IVehicleDetail } from "./models/VehicleDetails";
import { IVehicleEvent } from "./models/VehicleEvent";
import { IViolation } from "./models/Violation";
import { IVisionObstruction } from "./models/VisionObstruction";

const mapRawICrashEvent = (raw: any): ICrashEvent => {
  return {
    eventNumber: raw.event_number,
    vehicleNumberThisVehicle: raw.vehicle_number_this_vehicle,
    areaOfImpactThisVehicle: raw.area_of_impact_this_vehicle,
    areaOfImpactThisVehicleName: raw.area_of_impact_this_vehicle_name,
    sequenceOfEvents: raw.sequence_of_events,
    sequenceOfEventsName: raw.sequence_of_events_name,
    vehicleNumberOtherVehicle: raw.vehicle_number_other_vehicle,
    areaOfImpactOtherVehicle: raw.area_of_impact_other_vehicle,
    areaOfImpactOtherVehicleName: raw.area_of_impact_other_vehicle_name,
  } as ICrashEvent;
};

const mapRawIDamage = (raw: any): IDamage => {
  return {
    damagedAreas: raw.damaged_areas,
    damagedAreasName: raw.damaged_areas_name,
  } as IDamage;
};

const mapRawIDistraction = (raw: any): IDistraction => {
  return {
    driverDistractedBy: raw.driver_distracted_by,
    driverDistractedByName: raw.driver_distracted_by_name,
  } as IDistraction;
};

const mapRawIDriverImpair = (raw: any): IDriverImpair => {
  return {
    conditionImpairmentAtTimeOfCrashDriver: raw.condition_impairment_at_time_of_crash_driver,
    conditionImpairmentAtTimeOfCrashDriverName: raw.condition_impairment_at_time_of_crash_driver_name,
  } as IDriverImpair;
};

const mapRawIFactor = (raw: any): IFactor => {
  return {
    contributingCircumstancesMotorVehicle: raw.contributing_circumstances_motor_vehicle,
    contributingCircumstancesMotorVehicleName: raw.contributing_circumstances_motor_vehicle_name,
  } as IFactor;
};

const mapRawIManeuver = (raw: any): IManeuver => {
  return {
    driverManeuveredToAvoid: raw.driver_maneuvered_to_avoid,
    driverManeuveredToAvoidName: raw.driver_maneuvered_to_avoid_name,
  } as IManeuver;
};

const mapRawINonMotoristCrash = (raw: any): INonMotoristCrash => {
  return {
    vehicleNumber: raw.vehicle_number,
    personNumber: raw.person_number,
    nonMotoristContributingCircumstances: raw.non_motorist_contributing_circumstances,
    nonMotoristContributingCircumstancesName: raw.non_motorist_contributing_circumstances_name,
  } as INonMotoristCrash;
};

const mapRawINonMotoristImpair = (raw: any): INonMotoristImpair => {
  return {
    vehicleNumber: raw.vehicle_number,
    personNumber: raw.person_number,
    conditionImpairmentAtTimeOfCrashNonMotorist: raw.condition_impairment_at_time_of_crash_non_motorist,
    conditionImpairmentAtTimeOfCrashNonMotoristName: raw.condition_impairment_at_time_of_crash_non_motorist_name,
  } as INonMotoristImpair;
};

const mapRawINonMotoristPrior = (raw: any): INonMotoristPrior => {
  return {
    vehicleNumber: raw.vehicle_number,
    personNumber: raw.person_number,
    nonMotoristActionCircumstances: raw.non_motorist_action_circumstances,
    nonMotoristActionCircumstancesName: raw.non_motorist_action_circumstances_name,
  } as INonMotoristPrior;
};

const mapRawINonMotoristSafetyEquipment = (raw: any): INonMotoristSafetyEquipment => {
  return {
    vehicleNumber: raw.vehicle_number,
    personNumber: raw.person_number,
    nonMotoristSafetyEquipmentUse: raw.non_motorist_safety_equipment_use,
  } as INonMotoristSafetyEquipment;
};

const mapRawIParkWorkVehicle = (raw: any): IParkWorkVehicle => {
  return {
    vehicleNumber: raw.vehicle_number,
    numberOfMotorVehiclesInTransportMvit: raw.number_of_motor_vehicles_in_transport_mvit,
    numberOfOccupants: raw.number_of_occupants,
    dayOfCrash: raw.day_of_crash,
    monthOfCrash: raw.month_of_crash,
    hourOfCrash: raw.hour_of_crash,
    minuteOfCrash: raw.minute_of_crash,
    firstHarmfulEvent: raw.first_harmful_event,
    firstHarmfulEventName: raw.first_harmful_event_name,
    mannerOfCollision: raw.manner_of_collision,
    mannerOfCollisionName: raw.manner_of_collision_name,
    unitType: raw.unit_type,
    hitAndRun: raw.hit_and_run,
    registrationState: raw.registration_state,
    registrationStateName: raw.registration_state_name,
    registeredVehicleOwner: raw.registered_vehicle_owner,
    registeredVehicleOwnerName: raw.registered_vehicle_owner_name,
    vehicleMake: raw.vehicle_make,
    vehicleMakeName: raw.vehicle_make_name,
    vehicleModel: raw.vehicle_model,
    makeModelCombined: raw.make_model_combined,
    bodyType: raw.body_type,
    bodyTypeName: raw.body_type_name,
    vehicleModelYear: raw.vehicle_model_year,
    vehicleIdentificationNumberVin: raw.vehicle_identification_number_vin,
    vehicleTrailing: raw.vehicle_trailing,
    mcidIssuingAuthority: raw.mcid_issuing_authority,
    mcidIssuingAuthorityName: raw.mcid_issuing_authority_name,
    mcidIdentificationNumber: raw.mcid_identification_number,
    motorCarrierIdentificationNumber: raw.motor_carrier_identification_number,
    grossVehicleWeightRating: raw.gross_vehicle_weight_rating,
    vehicleConfiguration: raw.vehicle_configuration,
    cargoBodyType: raw.cargo_body_type,
    hazardousMaterialInvolvement: raw.hazardous_material_involvement,
    hazardousMaterialPlacard: raw.hazardous_material_placard,
    hazardousMaterialIdentificationNumber: raw.hazardous_material_identification_number,
    hazardousMaterialClassNumber: raw.hazardous_material_class_number,
    releaseOfHazardousMaterialFromTheCargoCompartment: raw.release_of_hazardous_material_from_the_cargo_compartment,
    busUse: raw.bus_use,
    specialUse: raw.special_use,
    specialUseName: raw.special_use_name,
    emergencyMotorVehicleUse: raw.emergency_motor_vehicle_use,
    underrideOverride: raw.underride_override,
    underrideOverrideName: raw.underride_override_name,
    initialContactPoint: raw.initial_contact_point,
    extentOfDamage: raw.extent_of_damage,
    vehicleRemoval: raw.vehicle_removal,
    mostHarmfulEvent: raw.most_harmful_event,
    relatedFactorsVehicleLevel1: raw.related_factors_vehicle_level1,
    relatedFactorsVehicleLevel2: raw.related_factors_vehicle_level2,
    fireOccurrence: raw.fire_occurrence,
    fatalitiesInVehicle: raw.fatalities_in_vehicle,
  } as IParkWorkVehicle;
};

const mapRawIPedestrianBicycle = (raw: any): IPedestrianBicycle => {
  return {
    vehicleNumber: raw.vehicle_number,
    personNumber: raw.person_number,
    personType: raw.person_type,
    personTypeName: raw.person_type_name,
    age: raw.age,
    sex: raw.sex,
    markedCrosswalkPresent: raw.marked_crosswalk_present,
    sidewalkPresent: raw.sidewalk_present,
    schoolZone: raw.school_zone,
    crashTypePedestrian: raw.crash_type_pedestrian,
    crashTypePedestrianName: raw.crash_type_pedestrian_name,
    crashTypeBicycle: raw.crash_type_bicycle,
    crashTypeBicycleName: raw.crash_type_bicycle_name,
    crashLocationPedestrian: raw.crash_location_pedestrian,
    crashLocationBicycle: raw.crash_location_bicycle,
    pedestrianPosition: raw.pedestrian_position,
    bicyclistPosition: raw.bicyclist_position,
    pedestrianInitialDirectionOfTravel: raw.pedestrian_initial_direction_of_travel,
    bicyclistInitialDirectionOfTravel: raw.bicyclist_initial_direction_of_travel,
    motoristInitialDirectionOfTravel: raw.motorist_initial_direction_of_travel,
    motoristManeuver: raw.motorist_maneuver,
    intersectionLeg: raw.intersection_leg,
    pedestrianScenario: raw.pedestrian_scenario,
    pedestrianScenarioName: raw.pedestrian_scenario_name,
    crashGroupPedestrian: raw.crash_group_pedestrian,
    crashGroupPedestrianName: raw.crash_group_pedestrian_name,
    crashGroupBicycle: raw.crash_group_bicycle,
    crashGroupBicycleName: raw.crash_group_bicycle_name,
  } as IPedestrianBicycle;
};

const mapRawIPerson = (raw: any): IPerson => {
  return {
    numberOfMotorVehiclesInTransportMvit: raw.number_of_motor_vehicles_in_transport_mvit,
    vehicleNumber: raw.vehicle_number,
    personNumber: raw.person_number,
    numberOfMotorVehicleStrikingNonMotorist: raw.number_of_motor_vehicle_striking_non_motorist,
    county: raw.county,
    dayOfCrash: raw.day_of_crash,
    monthOfCrash: raw.month_of_crash,
    hourOfCrash: raw.hour_of_crash,
    minuteOfCrash: raw.minute_of_crash,
    landUse: raw.land_use,
    landUseName: raw.land_use_name,
    functionalSystem: raw.functional_system,
    functionalSystemName: raw.functional_system_name,
    firstHarmfulEvent: raw.first_harmful_event,
    firstHarmfulEventName: raw.first_harmful_event_name,
    mannerOfCollision: raw.manner_of_collision,
    mannerOfCollisionName: raw.manner_of_collision_name,
    schoolBusRelated: raw.school_bus_related,
    vehicleMake: raw.vehicle_make,
    vehicleMakeName: raw.vehicle_make_name,
    makeModelCombined: raw.make_model_combined,
    bodyType: raw.body_type,
    bodyTypeName: raw.body_type_name,
    vehicleTrailing: raw.vehicle_trailing,
    specialUse: raw.special_use,
    specialUseName: raw.special_use_name,
    emergencyMotorVehicleUse: raw.emergency_motor_vehicle_use,
    rollover: raw.rollover,
    initialContactPoint: raw.initial_contact_point,
    initialContactPointName: raw.initial_contact_point_name,
    fireOccurrence: raw.fire_occurrence,
    age: raw.age,
    sex: raw.sex,
    personType: raw.person_type,
    personTypeName: raw.person_type_name,
    injurySeverity: raw.injury_severity,
    injurySeverityName: raw.injury_severity_name,
    seatingPosition: raw.seating_position,
    seatingPositionName: raw.seating_position_name,
    restraintSystemHelmetUse: raw.restraint_system_helmet_use,
    restraintSystemHelmetUseName: raw.restraint_system_helmet_use_name,
    indicationOfMisuseOfRestraintSystemHelmet: raw.indication_of_misuse_of_restraint_system_helmet,
    airBagDeployed: raw.air_bag_deployed,
    airBagDeployedName: raw.air_bag_deployed_name,
    ejection: raw.ejection,
    ejectionName: raw.ejection_name,
    ejectionPath: raw.ejection_path,
    ejectionPathName: raw.ejection_path_name,
    extrication: raw.extrication,
    policeReportedAlcoholInvolvement: raw.police_reported_alcohol_involvement,
    methodOfAlcoholDeterminationByPolice: raw.method_of_alcohol_determination_by_police,
    alcoholTestStatus1: raw.alcohol_test_status1,
    alcoholTestStatus2: raw.alcohol_test_status2,
    alcoholTestStatus3: raw.alcohol_test_status3,
    alcoholTestStatus3Name: raw.alcohol_test_status3_name,
    policeReportedDrugInvolvement: raw.police_reported_drug_involvement,
    methodOfDrugDeterminationByPolice: raw.method_of_drug_determination_by_police,
    drugTestStatus: raw.drug_test_status,
    drugTestType1: raw.drug_test_type1,
    drugTestType2: raw.drug_test_type2,
    drugTestType3: raw.drug_test_type3,
    drugTestType4: raw.drug_test_type4,
    drugTestType4Name: raw.drug_test_type4_name,
    drugTestType5: raw.drug_test_type5,
    drugTestType5Name: raw.drug_test_type5_name,
    drugTestType6: raw.drug_test_type6,
    drugTestType6Name: raw.drug_test_type6_name,
    transportedToFirstTreatmentFacility: raw.transported_to_first_treatment_facility,
    transportedToFirstTreatmentFacilityName: raw.transported_to_first_treatment_facility_name,
    diedAtSceneEnRoute: raw.died_at_scene_en_route,
    dayOfDeath: raw.day_of_death,
    monthOfDeath: raw.month_of_death,
    yearOfDeath: raw.year_of_death,
    hourOfDeath: raw.hour_of_death,
    minuteOfDeath: raw.minute_of_death,
    deathTime: raw.death_time,
    lagHours: raw.lag_hours,
    lagMinutes: raw.lag_minutes,
    relatedFactorsPersonLevel1: raw.related_factors_person_level1,
    relatedFactorsPersonLevel2: raw.related_factors_person_level2,
    relatedFactorsPersonLevel3: raw.related_factors_person_level3,
    fatalInjuryAtWork: raw.fatal_injury_at_work,
    hispanicOrigin: raw.hispanic_origin,
    hispanicOriginName: raw.hispanic_origin_name,
    race: raw.race,
    raceName: raw.race_name,
    nonMotoristLocationAtTimeOfCrash: raw.non_motorist_location_at_time_of_crash,
    nonMotoristLocationAtTimeOfCrashName: raw.non_motorist_location_at_time_of_crash_name,
    timestampOfCrash: raw.timestamp_of_crash,
  } as IPerson;
};

const mapRawIVehicleEvent = (raw: any): IVehicleEvent => {
  return {
    eventNumber: raw.event_number,
    vehicleNumber: raw.vehicle_number,
    vehicleEventNumber: raw.vehicle_event_number,
    vehicleNumberThisVehicle: raw.vehicle_number_this_vehicle,
    areaOfImpactThisVehicle: raw.area_of_impact_this_vehicle,
    areaOfImpactThisVehicleName: raw.area_of_impact_this_vehicle_name,
    sequenceOfEvents: raw.sequence_of_events,
    sequenceOfEventsName: raw.sequence_of_events_name,
    vehicleNumberOtherVehicle: raw.vehicle_number_other_vehicle,
    areaOfImpactOtherVehicle: raw.area_of_impact_other_vehicle,
    areaOfImpactOtherVehicleName: raw.area_of_impact_other_vehicle_name,
  } as IVehicleEvent;
};

const mapRawIViolation = (raw: any): IViolation => {
  return {
    violationsCharged: raw.violations_charged,
    violationsChargedName: raw.violations_charged_name,
  } as IViolation;
};

const mapRawIVisionObstruction = (raw: any): IVisionObstruction => {
  return {
    driversVisionObscuredBy: raw.drivers_vision_obscured_by,
    driversVisionObscuredByName: raw.drivers_vision_obscured_by_name,
  } as IVisionObstruction;
};

const mapRawIVehicleCrash = (raw: any, rawAccident: any): IVehicleCrash => {
  const vehicleCrash = {
    vehicleNumber: raw.vehicle_number,
    numberOfMotorVehiclesInTransportMvit: raw.number_of_motor_vehicles_in_transport_mvit,
    numberOfOccupants: raw.number_of_occupants,
    dayOfCrash: raw.day_of_crash,
    monthOfCrash: raw.month_of_crash,
    hourOfCrash: raw.hour_of_crash,
    minuteOfCrash: raw.minute_of_crash,
    firstHarmfulEvent: raw.first_harmful_event,
    firstHarmfulEventName: raw.first_harmful_event_name,
    mannerOfCollision: raw.manner_of_collision,
    unitType: raw.unit_type,
    hitAndRun: raw.hit_and_run,
    registrationState: raw.registration_state,
    registrationStateName: raw.registration_state_name,
    registeredVehicleOwner: raw.registered_vehicle_owner,
    registeredVehicleOwnerName: raw.registered_vehicle_owner_name,
    vehicleMake: raw.vehicle_make,
    vehicleMakeName: raw.vehicle_make_name,
    vehicleModel: raw.vehicle_model,
    makeModelCombined: raw.make_model_combined,
    bodyType: raw.body_type,
    bodyTypeName: raw.body_type_name,
    vehicleModelYear: raw.vehicle_model_year,
    vehicleIdentificationNumberVin: raw.vehicle_identification_number_vin,
    vehicleTrailing: raw.vehicle_trailing,
    jackknife: raw.jackknife,
    mcidIssuingAuthority: raw.mcid_issuing_authority,
    mcidIdentificationNumber: raw.mcid_identification_number,
    motorCarrierIdentificationNumberMcid: raw.motor_carrier_identification_number_mcid,
    grossVehicleWeightRating: raw.gross_vehicle_weight_rating,
    vehicleConfiguration: raw.vehicle_configuration,
    vehicleConfigurationName: raw.vehicle_configuration_name,
    cargoBodyType: raw.cargo_body_type,
    cargoBodyTypeName: raw.cargo_body_type_name,
    hazardousMaterialInvolvement: raw.hazardous_material_involvement,
    hazardousMaterialPlacard: raw.hazardous_material_placard,
    hazardousMaterialIdentificationNumber: raw.hazardous_material_identification_number,
    hazardousMaterialClassNumber: raw.hazardous_material_class_number,
    releaseOfHazardousMaterialFromTheCargoCompartment: raw.release_of_hazardous_material_from_the_cargo_compartment,
    busUse: raw.bus_use,
    specialUse: raw.special_use,
    specialUseName: raw.special_use_name,
    emergencyMotorVehicleUse: raw.emergency_motor_vehicle_use,
    travelSpeed: raw.travel_speed,
    underrideOverride: raw.underride_override,
    rollover: raw.rollover,
    locationOfRollover: raw.location_of_rollover,
    initialContactPoint: raw.initial_contact_point,
    extentOfDamage: raw.extent_of_damage,
    vehicleRemoval: raw.vehicle_removal,
    mostHarmfulEvent: raw.most_harmful_event,
    relatedFactorsVehicleLevel1: raw.related_factors_vehicle_level1,
    relatedFactorsVehicleLevel2: raw.related_factors_vehicle_level2,
    fireOccurrence: raw.fire_occurrence,
    driverPresence: raw.driver_presence,
    driversLicenseState: raw.drivers_license_state,
    driversZipCode: raw.drivers_zip_code,
    nonCdlLicenseStatus: raw.non_cdl_license_status,
    nonCdlLicenseType: raw.non_cdl_license_type,
    commercialMotorVehicleLicenseStatus: raw.commercial_motor_vehicle_license_status,
    complianceWithCdlEndorsements: raw.compliance_with_cdl_endorsements,
    licenseComplianceWithClassOfVehicle: raw.license_compliance_with_class_of_vehicle,
    complianceWithLicenseRestrictions: raw.compliance_with_license_restrictions,
    driverHeight: raw.driver_height,
    driverWeight: raw.driver_weight,
    previousRecordedCrashes: raw.previous_recorded_crashes,
    previousRecordedSuspensionsAndRevocations: raw.previous_recorded_suspensions_and_revocations,
    previousDwiConvictions: raw.previous_dwi_convictions,
    previousSpeedingConvictions: raw.previous_speeding_convictions,
    previousOtherMovingViolationConvictions: raw.previous_other_moving_violation_convictions,
    monthOfFirstCrashSuspensionOrConviction: raw.month_of_first_crash_suspension_or_conviction,
    yearOfFirstCrashSuspensionOrConviction: raw.year_of_first_crash_suspension_or_conviction,
    monthOfLastCrashSuspensionOrConviction: raw.month_of_last_crash_suspension_or_conviction,
    yearOfLastCrashSuspensionOrConviction: raw.year_of_last_crash_suspension_or_conviction,
    speedingRelated: raw.speeding_related,
    relatedFactorsDriverLevel1: raw.related_factors_driver_level1,
    relatedFactorsDriverLevel2: raw.related_factors_driver_level2,
    relatedFactorsDriverLevel3: raw.related_factors_driver_level3,
    relatedFactorsDriverLevel4: raw.related_factors_driver_level4,
    trafficwayDescription: raw.trafficway_description,
    totalLanesInRoadway: raw.total_lanes_in_roadway,
    speedLimit: raw.speed_limit,
    roadwayAlignment: raw.roadway_alignment,
    roadwayGrade: raw.roadway_grade,
    roadwaySurfaceType: raw.roadway_surface_type,
    roadwaySurfaceCondition: raw.roadway_surface_condition,
    roadwaySurfaceConditionName: raw.roadway_surface_condition_name,
    trafficControlDevice: raw.traffic_control_device,
    trafficControlDeviceFunctioning: raw.traffic_control_device_functioning,
    preEventMovementPriorToRecognitionOfCriticalEvent: raw.pre_event_movement_prior_to_recognition_of_critical_event,
    criticalEventPrecrash: raw.critical_event_precrash,
    criticalEventPrecrashName: raw.critical_event_precrash_name,
    attemptedAvoidanceManeuver: raw.attempted_avoidance_maneuver,
    attemptedAvoidanceManeuverName: raw.attempted_avoidance_maneuver_name,
    preImpactStability: raw.pre_impact_stability,
    preImpactLocation: raw.pre_impact_location,
    crashType: raw.crash_type,
    crashTypeName: raw.crash_type_name,
    fatalitiesInVehicle: raw.fatalities_in_vehicle,
    driverDrinking: raw.driver_drinking,
    timestampOfCrash: raw.timestamp_of_crash,

    damages: new Types.Array<IDamage>(),
    distractions: new Types.Array<IDistraction>(),
    driversImpair: new Types.Array<IDriverImpair>(),
    factors: new Types.Array<IFactor>(),
    maneuvers: new Types.Array<IManeuver>(),
    violations: new Types.Array<IViolation>(),
    visionObstructions: new Types.Array<IVisionObstruction>(),
  } as IVehicleCrash;

  if (rawAccident.damage) {
    rawAccident.damage.forEach((element: any) => {
      vehicleCrash.damages.push(
        mapRawIDamage (element));
    });
  }

  if (rawAccident.distract) {
    rawAccident.distract.forEach((element: any) => {
      vehicleCrash.distractions.push(
        mapRawIDistraction (element));
    });
  }

  if (rawAccident.drimpair) {
    rawAccident.drimpair.forEach((element: any) => {
      vehicleCrash.driversImpair.push(
        mapRawIDriverImpair (element));
    });
  }

  if (rawAccident.factor) {
    rawAccident.factor.forEach((element: any) => {
      vehicleCrash.factors.push(
        mapRawIFactor (element));
    });
  }

  if (rawAccident.maneuver) {
    rawAccident.maneuver.forEach((element: any) => {
      vehicleCrash.maneuvers.push(
        mapRawIManeuver (element));
    });
  }

  if (rawAccident.violatn) {
    rawAccident.violatn.forEach((element: any) => {
      vehicleCrash.violations.push(
        mapRawIViolation (element));
    });
  }

  if (rawAccident.vision) {
    rawAccident.vision.forEach((element: any) => {
      vehicleCrash.visionObstructions.push(
        mapRawIVisionObstruction (element));
    });
  }

  return vehicleCrash;
};

const mapRawIVehicleDetail = (raw: any): IVehicleDetail => {
  return {
    vehicleNumber: raw.vehicle_number,
    vehicleMake: raw.vehicle_make,
    marketingYear: raw.marketing_year,
    vehicleTypeCode: raw.vehicle_type_code,
    vehicleType: raw.vehicle_type,
    makeName: raw.make_name,
    modelCode: raw.model_code,
    vehicleTrim: raw.vehicle_trim,
    vehicleTrim1: raw.vehicle_trim1,
    vehicleTrim2: raw.vehicle_trim2,
    vehicleTrim3: raw.vehicle_trim3,
    vehicleTrim4: raw.vehicle_trim4,
    bodyStyleCode: raw.body_style_code,
    bodyStyle: raw.body_style,
    numOfDoors: raw.num_of_doors,
    numberOfWheels: raw.number_of_wheels,
    numOfWheelsByPowerTrain: raw.num_of_wheels_by_power_train,
    vehicleManufacturerCode: raw.vehicle_manufacturer_code,
    vehicleManufacturerName: raw.vehicle_manufacturer_name,
    displacementCid: raw.displacement_cid,
    displacementCc: raw.displacement_cc,
    cylinderCountCode: raw.cylinder_count_code,
    cycleCount: raw.cycle_count,
    fuelCode: raw.fuel_code,
    fuel: raw.fuel,
    typeOfFuelCode: raw.type_of_fuel_code,
    typeOfFuel: raw.type_of_fuel,
    carburetionTypesCode: raw.carburetion_types_code,
    carburetionTypes: raw.carburetion_types,
    numOfBarrels: raw.num_of_barrels,
    grossVehicleWeightsRangeCode: raw.gross_vehicle_weights_range_code,
    grossVehicleWeightsRange: raw.gross_vehicle_weights_range,
    distanceBetweenAxlesForBaseModel: raw.distance_between_axles_for_base_model,
    distanceBetweenAxlesForParticularSeries: raw.distance_between_axles_for_particular_series,
    frontTire: raw.front_tire,
    frontTirePressure: raw.front_tire_pressure,
    frontTireSizeCode: raw.front_tire_size_code,
    frontTireSize: raw.front_tire_size,
    rearTire: raw.rear_tire,
    rearTirePressure: raw.rear_tire_pressure,
    rearTireSizeCode: raw.rear_tire_size_code,
    rearTireSize: raw.rear_tire_size,
    tonnageRating: raw.tonnage_rating,
    shippingWeight: raw.shipping_weight,
    basePrice: raw.base_price,
    driveType1: raw.drive_type1,
    driveType2: raw.drive_type2,
    countrySoldCode: raw.country_sold_code,
    countrySold: raw.country_sold,
    brakesAbsCode: raw.brakes_abs_code,
    brakesAbsDescription: raw.brakes_abs_description,
    securityTypeCode: raw.security_type_code,
    securityType: raw.security_type,
    daytimeRunningLights1: raw.daytime_running_lights1,
    daytimeRunningLights2: raw.daytime_running_lights2,
    restraintTypeCode: raw.restraint_type_code,
    restraintType: raw.restraint_type,
    cabConfigurationCode: raw.cab_configuration_code,
    cabConfiguration: raw.cab_configuration,
    axleTypeFrontAxleCode: raw.axle_type_front_axle_code,
    axleTypeFrontAxle: raw.axle_type_front_axle,
    axleTypeRearAxleCode: raw.axle_type_rear_axle_code,
    axleTypeRearAxle: raw.axle_type_rear_axle,
    brakeTypeCode: raw.brake_type_code,
    brakeType: raw.brake_type,
    engineManufactureCode: raw.engine_manufacture_code,
    engineManufacture: raw.engine_manufacture,
    engineModel: raw.engine_model,
    dutyTypeCode: raw.duty_type_code,
    dutyType: raw.duty_type,
    bedLengthCode: raw.bed_length_code,
    bedLength: raw.bed_length,
    standardSegmentationCode: raw.standard_segmentation_code,
    standardSegmentation: raw.standard_segmentation,
    plantCode: raw.plant_code,
    plantCountry: raw.plant_country,
    plantCity: raw.plant_city,
    plantCountryCode: raw.plant_country_code,
    plantStateCode: raw.plant_state_code,
    plantState: raw.plant_state,
    originCode: raw.origin_code,
    origin: raw.origin,
    displacementLiters: raw.displacement_liters,
    blockType: raw.block_type,
    headConfiguration1: raw.head_configuration1,
    headConfiguration2: raw.head_configuration2,
    valvesPerCylinder: raw.valves_per_cylinder,
    valvesTotal: raw.valves_total,
    engineCode: raw.engine_code,
    isIncomplete: raw.is_incomplete,
    batteryTypeCode: raw.battery_type_code,
    batteryType: raw.battery_type,
    totalBatteryPower: raw.total_battery_power,
    batteryVoltage: raw.battery_voltage,
    superchargeFlag: raw.supercharge_flag,
    superchargeFlagDescription: raw.supercharge_flag_description,
    turbochargerFlag: raw.turbocharger_flag,
    turbochargerFlagDescription: raw.turbocharger_flag_description,
    variableValveTimingFlag: raw.variable_valve_timing_flag,
    motorcyclesBodyStyleCode: raw.motorcycles_body_style_code,
    motorcyclesBodyStyle: raw.motorcycles_body_style,
  } as IVehicleDetail;
};

export const mapRawIAccident = (rawAccident: any): IAccident => {
  const accident: IAccident = {
    consecutiveNumber: rawAccident.consecutive_number,
    stateNumber: rawAccident.state_number,
    stateName: rawAccident.state_name,
    numberOfVehicleFormsSubmittedAll: rawAccident.number_of_vehicle_forms_submitted_all,
    numberOfMotorVehiclesInTransportMvit: rawAccident.number_of_motor_vehicles_in_transport_mvit,
    numberOfParkedWorkingVehicles: rawAccident.number_of_parked_working_vehicles,
    numberOfFormsSubmittedForPersonsNotInMotorVehicles:
      rawAccident.number_of_forms_submitted_for_persons_not_in_motor_vehicles,
    numberOfPersonsNotInMotorVehiclesInTransportMvit:
      rawAccident.number_of_persons_not_in_motor_vehicles_in_transport_mvit,
    numberOfPersonsInMotorVehiclesInTransportMvit:
      rawAccident.number_of_persons_in_motor_vehicles_in_transport_mvit,
    numberOfFormsSubmittedForPersonsInMotorVehicles:
      rawAccident.number_of_forms_submitted_for_persons_in_motor_vehicles,
    county: rawAccident.county,
    city: rawAccident.city,
    dayOfCrash: rawAccident.day_of_crash,
    monthOfCrash: rawAccident.month_of_crash,
    yearOfCrash: rawAccident.year_of_crash,
    dayOfWeek: rawAccident.day_of_week,
    hourOfCrash: rawAccident.hour_of_crash,
    minuteOfCrash: rawAccident.minute_of_crash,
    nationalHighwaySystem: rawAccident.national_highway_system,
    landUse: rawAccident.land_use,
    landUseName: rawAccident.land_use_name,
    functionalSystem: rawAccident.functional_system,
    functionalSystemName: rawAccident.functional_system_name,
    ownership: rawAccident.ownership,
    ownershipName: rawAccident.ownership_name,
    routeSigning: rawAccident.route_signing,
    routeSigningName: rawAccident.route_signing_name,
    trafficwayIdentifier: rawAccident.trafficway_identifier,
    trafficwayIdentifier2: rawAccident.trafficway_identifier2,
    milepoint: rawAccident.milepoint,
    /*
    latitude: rawAccident.latitude,
    longitude: rawAccident.longitude,
    */
    location: {
      type: "Point",
      coordinates: [rawAccident.longitude, rawAccident.latitude],
    } as IPoint,
    specialJurisdiction: rawAccident.special_jurisdiction,
    specialJurisdictionName: rawAccident.special_jurisdiction_name,
    firstHarmfulEvent: rawAccident.first_harmful_event,
    firstHarmfulEventName: rawAccident.first_harmful_event_name,
    mannerOfCollision: rawAccident.manner_of_collision,
    mannerOfCollisionName: rawAccident.manner_of_collision_name,
    relationToJunctionWithinInterchangeArea: rawAccident.relation_to_junction_within_interchange_area,
    relationToJunctionSpecificLocation: rawAccident.relation_to_junction_specific_location,
    relationToJunctionSpecificLocationName: rawAccident.relation_to_junction_specific_location_name,
    typeOfIntersection: rawAccident.type_of_intersection,
    workZone: rawAccident.work_zone,
    relationToTrafficway: rawAccident.relation_to_trafficway,
    relationToTrafficwayName: rawAccident.relation_to_trafficway_name,
    lightCondition: rawAccident.light_condition,
    lightConditionName: rawAccident.light_condition_name,
    atmosphericConditions1: rawAccident.atmospheric_conditions1,
    atmosphericConditions1Name: rawAccident.atmospheric_conditions1_name,
    atmosphericConditions2: rawAccident.atmospheric_conditions2,
    atmosphericConditions2Name: rawAccident.atmospheric_conditions2_name,
    atmosphericConditions: rawAccident.atmospheric_conditions,
    atmosphericConditionsName: rawAccident.atmospheric_conditions_name,
    schoolBusRelated: rawAccident.school_bus_related,
    railGradeCrossingIdentifier: rawAccident.rail_grade_crossing_identifier,
    hourOfNotification: rawAccident.hour_of_notification,
    minuteOfNotification: rawAccident.minute_of_notification,
    hourOfArrivalAtScene: rawAccident.hour_of_arrival_at_scene,
    minuteOfArrivalAtScene: rawAccident.minute_of_arrival_at_scene,
    hourOfEmsArrivalAtHospital: rawAccident.hour_of_ems_arrival_at_hospital,
    minuteOfEmsArrivalAtHospital: rawAccident.minute_of_ems_arrival_at_hospital,
    relatedFactorsCrashLevel1: rawAccident.related_factors_crash_level1,
    relatedFactorsCrashLevel1Name: rawAccident.related_factors_crash_level1_name,
    relatedFactorsCrashLevel2: rawAccident.related_factors_crash_level2,
    relatedFactorsCrashLevel2Name: rawAccident.related_factors_crash_level2_name,
    relatedFactorsCrashLevel3: rawAccident.related_factors_crash_level3,
    relatedFactorsCrashLevel3Name: rawAccident.related_factors_crash_level3_name,
    numberOfFatalities: rawAccident.number_of_fatalities,
    numberOfDrunkDrivers: rawAccident.number_of_drunk_drivers,
    timestampOfCrash: rawAccident.timestamp_of_crash,

    crashEvents: new Types.Array<ICrashEvent>(),
    nonMotoristsCrash: new Types.Array<INonMotoristCrash>(),
    nonMotoristsImpair: new Types.Array<INonMotoristImpair>(),
    nonMotoristsPrior: new Types.Array<INonMotoristPrior>(),
    nonMotoristsSafetyEquipment: new Types.Array<INonMotoristSafetyEquipment>(),
    parkWorkVehicles: new Types.Array<IParkWorkVehicle>(),
    pedestrianBicycles: new Types.Array<IPedestrianBicycle>(),
    persons: new Types.Array<IPerson>(),
    vehicleCrashs: new Types.Array<IVehicleCrash>(),
    vehicleDetails: new Types.Array<IVehicleDetail>(),
    vehicleEvents: new Types.Array<IVehicleEvent>(),
  } as IAccident;

  if (rawAccident.cevent) {
    rawAccident.cevent.forEach((element: any) => {
      accident.crashEvents.push(
        mapRawICrashEvent (element));
    });
  }

  if (rawAccident.nmcrash) {
    rawAccident.nmcrash.forEach((element: any) => {
      accident.nonMotoristsCrash.push(
        mapRawINonMotoristCrash(element));
    });
  }

  if (rawAccident.nmimpair) {
    rawAccident.nmimpair.forEach((element: any) => {
      accident.nonMotoristsImpair.push(
        mapRawINonMotoristImpair (element));
    });
  }

  if (rawAccident.nmprior) {
    rawAccident.nmprior.forEach((element: any) => {
      accident.nonMotoristsPrior.push(
        mapRawINonMotoristPrior (element));
    });
  }

  if (rawAccident.safetyeq) {
    rawAccident.safetyeq.forEach((element: any) => {
      accident.nonMotoristsSafetyEquipment.push(
        mapRawINonMotoristSafetyEquipment (element));
    });
  }

  if (rawAccident.parkwork) {
    rawAccident.parkwork.forEach((element: any) => {
      accident.parkWorkVehicles.push(
        mapRawIParkWorkVehicle (element));
    });
  }

  if (rawAccident.pbtype) {
    rawAccident.pbtype.forEach((element: any) => {
      accident.pedestrianBicycles.push(
        mapRawIPedestrianBicycle (element));
    });
  }

  if (rawAccident.person) {
    rawAccident.person.forEach((element: any) => {
      accident.persons.push(
        mapRawIPerson (element));
    });
  }

  if (rawAccident.vehicle) {
    rawAccident.vehicle.forEach((element: any) => {
      accident.vehicleCrashs.push(
        mapRawIVehicleCrash (element, rawAccident));
    });
  }

  if (rawAccident.vindecode) {
    rawAccident.vindecode.forEach((element: any) => {
      accident.vehicleDetails.push(
        mapRawIVehicleDetail (element));
    });
  }

  if (rawAccident.vevent) {
    rawAccident.vevent.forEach((element: any) => {
      accident.vehicleEvents.push(
        mapRawIVehicleEvent(element));
    });
  }

  return accident;
};
