const mongoose = require("mongoose");
const projectSchema = new mongoose.Schema({
  lastName: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  county: {
    type: String,
    required: true,
  },
  enrollmentCenter: {
    type: String,
    required: true,
  },
  projectName: {
    type: String,
    required: true,
  },
  numberOfProjects: {
    type: Number,
    required: true,
  },
  totalMales: {
    type: Number,
    required: true,
  },
  totalFemales: {
    type: Number,
    required: true,
  },
  totalDatas: {
    type: Number,
    required: true,
  },
  createdDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("Project", projectSchema);
