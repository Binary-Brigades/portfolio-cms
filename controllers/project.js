const projectSchema = require("../models/projectSchema");

const { userModel } = require("../models/userModel");
// Controller for getting all user projects
exports.getAllUserProjects = async (req, res) => {
  try {
    //logic for getting all projects by a user
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error", err });
  }
};

// Controller for getting an project by ID
exports.getProjectById = async (req, res) => {
  try {
    //logic for getting a project by ID
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error", err });
  }
};

// Controller for creating an project
exports.createProject = async (req, res) => {
  try {
    //logic for creating a project
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
    res.json(updatedProject);
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
      return res.status(404).json({ error: "AProject not found" });
    }
    res.json({ message: "Project deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error", err });
  }
};
