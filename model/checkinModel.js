import mongoose from "mongoose";

const checkinModel = new mongoose.Schema({
  name: {
    type: String,
  },
  password: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  designation: {
    type: String,
    required: true,
  },
  DOB: {
    type: String,
  },
  bloodGroup: {
    type: String,
  },
  address: {
    type: String,
  },
  adharNo: {
    type: Number,
  },
  contactNo: {
    type: Number,
  },
  emergencyMobileNo: {
    type: Number,
  },
  data: String,
  createdAt: {
    type: Date,
    default: Date.now, // Set it to the current date and time when a new document is created
    immutable: true, // Make the field immutable once set
  }
}, { versionKey: false });

export default mongoose.model("Checkin", checkinModel);
