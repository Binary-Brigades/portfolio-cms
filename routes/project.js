const projectRouter = require("express").Router();
const { verifyAccessToken } = require("../helpers/getJwt");
const {
  getAllUserProjects,
  createProject,
  deleteProject,
  getProjectById,
  updateProject,
} = require("../controllers/project");

// Project routes
projectRouter.get("/project/getall", verifyAccessToken, getAllUserProjects);
projectRouter.get("/project/:id", getProjectById);

projectRouter.post("/project", verifyAccessToken, createProject);
projectRouter.put("/project/:id", verifyAccessToken, updateProject);
projectRouter.delete("/project/:id", verifyAccessToken, deleteProject);

module.exports = { projectRouter };
