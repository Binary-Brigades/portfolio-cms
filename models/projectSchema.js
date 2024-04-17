const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: {
    type: String,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the User schema
    required: true,
  },
  duration: {
    type: String,
  },
  githublink: {
    type: String,
  },
  livelink: {
    type: String,
  },
  time: {
    type: Date,
    default: Date.now,
  },
  tabs: [
    {
      type: String,
    },
  ],
  imageUrls: [
    {
      type: String, // Store the URLs of the images uploaded to Cloudinary
    },
  ],
});

module.exports = mongoose.model("Project", projectSchema);
