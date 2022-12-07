const express = require("express");
const router = express.Router();
const Project = require("../models/project");

// Get all Team Leads
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Post New Project Data
router.post("/", async (req, res) => {
  const project = new Project({
    lastName: req.body.lastName,
    firstName: req.body.firstName,
    middleName: req.body.middleName,
    title: req.body.title,
    county: req.body.county,
    enrollmentCenter: req.body.enrollmentCenter,
    projectName: req.body.projectName,
    numberOfProjects: req.body.numberOfProjects,
    totalMales: req.body.totalMales,
    totalFemales: req.body.totalFemales,
    totalDatas: req.body.totalDatas,
  });
  try {
    const newProject = await project.save();
    res.status(201).json(newProject);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Helper Function to get Project by ID
async function getProject(req, res, next) {
  let project;
  try {
    project = await Project.findById(req.params.id);
    if (project == null) {
      return res.status(404).json({ message: "Cannot find Project" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.project = project;
  next();
}

// Get a single Project
router.get("/:id", getProject, (req, res) => {
  res.json(res.project);
});

// Update a single Project record
router.patch("/:id", getProject, async (req, res) => {
  if (req.body.lastName != null) {
    res.project.lastName = req.body.lastName;
  }
  if (req.body.firstName != null) {
    res.project.firstName = req.body.firstName;
  }
  if (req.body.middleName != null) {
    res.project.middleName = req.body.middleName;
  }
  if (req.body.title != null) {
    res.project.title = req.body.title;
  }
  if (req.body.county != null) {
    res.project.county = req.body.county;
  }
  if (req.body.enrollmentCenter != null) {
    res.project.enrollmentCenter = req.body.enrollmentCenter;
  }
  if (req.body.projectName != null) {
    res.project.projectName = req.body.projectName;
  }
  if (req.body.numberOfProjects != null) {
    res.project.numberOfProjects = req.body.numberOfProjects;
  }
  if (req.body.totalMales != null) {
    res.project.totalMales = req.body.totalMales;
  }
  if (req.body.totalFemales != null) {
    res.project.totalFemales = req.body.totalFemales;
  }
  if (req.body.totalDatas != null) {
    res.project.totalDatas = req.body.totalDatas;
  }

  try {
    const updatedProject = await res.project.save();
    res.json(updatedProject);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a single Project
router.delete("/:id", getProject, async (req, res) => {
  try {
    await res.project.remove();
    res.json({ message: "Project Delected Successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Export the Router to be available the rest of the codes
module.exports = router;
