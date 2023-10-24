import mongoose from "mongoose";

const UserRegistrationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    Designation: {
      type: String,
      required: true,
    },
    DOB: {
      type: String,
      required: true,
    },
    BloodGroup: {
      type: String,
      required: true,
    },
    Address: {
      type: String,
      required: true,
    },
    AdharNO: {
      type: Number,
      required: true,
      unique: true,
    },
    ContactNo: {
      type: Number,
      required: true,
      unique: true,
    },
    EmergencyMobileNo: {
      type: Number,
      required: true,
    },
    timestamp: { type: Date, default: Date.now },
    loginTimestamp: { type: Date },
  },
  { versionKey: false }
);

export default mongoose.model("User", UserRegistrationSchema);
