import { Document, model, Schema, SchemaTypes, Types } from "mongoose";

import { distractionSchema, IDistraction } from "./Distraction";

const accidentSchema = new Schema({
  distractions: [distractionSchema],
});

export interface IAccident extends Document {
  distractions: Types.Array<IDistraction>;
}

export const User = model<IAccident>("Accident", accidentSchema);
