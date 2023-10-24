import mongoose from "mongoose";

const noticeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please enter a title for the notice"],
  },
  content: {
    type: String,
    required: [true, "Please enter the content of the notice"],
  },
  author: {
    type:String ,
    
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  // Add URL fields
  imageUrl: {
    type: String,
    required: false, // Set to true if an image URL is required
  },
  linkUrl: {
    type: String,
    required: false, // Set to true if a link URL is required
  },
});

const Notice = mongoose.model("Notice", noticeSchema);

export default Notice;
