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

export const mapRawAccident = (rawAccident: any): IAccident => {
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
      coordinates: [rawAccident.latitude, rawAccident.longitude],
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

  return accident;
};
