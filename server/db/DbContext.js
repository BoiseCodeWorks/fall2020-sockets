import mongoose from "mongoose";
import ValueSchema from "../models/Value";
import ProfileSchema from "../models/Profile";
import ShipSchema from '../models/Ship'
class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Profile = mongoose.model("Profile", ProfileSchema);
  Ships = mongoose.model("Ship", ShipSchema)
}

export const dbContext = new DbContext();
