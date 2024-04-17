const cloudinary = require("cloudinary").v2;
const projectSchema = require("../models/projectSchema");

const { userModel } = require("../models/userModel");
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
// Controller for getting all user projects
exports.getAllUserProjects = async (req, res) => {
  try {
    //logic for getting all projects by a user
    const userId = req.payload.aud;
    const projects = await projectSchema.find({ createdBy: userId });
    res.status(200).json(projects);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error", err });
  }
};

// Controller for getting an project by ID
exports.getProjectById = async (req, res) => {
  try {
    //logic for getting a project by ID
    const project = await projectSchema.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }
    res.status(200).json(project);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error", err });
  }
};

// Controller for creating an project
exports.createProject = async (req, res) => {
  try {
    const userId = req.payload.aud;
    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    //logic for creating a project
    const { title, description, duration, githublink, livelink, tabs } =
      req.body;
    // Upload images to Cloudinary
    const imageFiles = req.files; //  multiple files can be uploaded
    if (!imageFiles || imageFiles.length === 0) {
      return res.status(400).json({ error: "No files uploaded" });
    }

    const imageUrls = [];

    // Iterate through each image file, upload it to Cloudinary, and store its URL
    for (const imageFile of imageFiles) {
      const imageBuffer = imageFile.buffer.toString("base64");
      const result = await cloudinary.uploader.upload(
        `data:${imageFile.mimetype};base64,${imageBuffer}`,
        {
          folder: "portfolio-cms", // Replace 'your_folder_name' with your desired folder name on Cloudinary
        }
      );
      imageUrls.push(result.secure_url);
    }
    // Create the project in the database
    const project = await projectSchema.create({
      title,
      description,
      createdBy: user._id,
      duration,
      githublink,
      livelink,
      tabs,
      imageUrls,
    });
    await project.save();
    // await userModel.updateOne(
    //   { _id: createdBy },
    //   { $push: { projects: project._id } }
    // );
    res.status(201).json({ message: "Project created successfully", project });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error", err });
  }
};

// Controller for updating a project
exports.updateProject = async (req, res) => {
  try {
    const updatedProject = await projectSchema.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedProject) {
      return res.status(404).json({ error: "Project not found" });
    }
    res
      .status(200)
      .json({ message: "Project updated successfully", updatedProject });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Controller for deleting an project
exports.deleteProject = async (req, res) => {
  try {
    const deletedProject = await projectSchema.findByIdAndDelete(req.params.id);
    if (!deletedProject) {
      return res.status(404).json({ error: "Project not found" });
    }
    res.json({ message: "Project deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error", err });
  }
};
