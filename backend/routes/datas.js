const express = require("express");
const { model } = require("mongoose");
const router = express.Router();
const Data = require("../models/data");
// const user = require("../models/user");


// Get all Team Leads
router.get("/", async (req, res) => {
  try {
    // const { userId } = req.params;
    // const datas = await Data.find({}).populate({ path: "users", model: "User", select: "photo" }).exec();
    const datas = await Data.find();
    // console.log(datas)
    res.json(datas);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// Post Enrollment Data
router.post("/", async (req, res) => {
  const data = new Data({
    lastName: req.body.lastName,
    firstName: req.body.firstName,
    middleName: req.body.middleName,
    title: req.body.title,
    county: req.body.county,
    enrollmentCenter: req.body.enrollmentCenter,
    totalMales: req.body.totalMales,
    totalFemales: req.body.totalFemales,
    totalDatas: req.body.totalDatas,
  });
  try {
    const newData = await data.save();
    res.status(201).json(newData);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Helper Function to get Data by ID
async function getData(req, res, next) {
  let data;
  try {
    data = await Data.findById(req.params.id);
    if (data == null) {
      return res.status(404).json({ message: "Cannot find Data" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.data = data;
  next();
}

// Get a single Data
router.get("/:id", getData, (req, res) => {
  // const data = Data.find({}).populate({ path: "users", model: "User", select: "photo" }).exec();
  res.json(res.data);
});

// Update a single Data record
router.patch("/:id", getData, async (req, res) => {
  if (req.body.lastName != null) {
    res.data.lastName = req.body.lastName;
  }
  if (req.body.firstName != null) {
    res.data.firstName = req.body.firstName;
  }
  if (req.body.middleName != null) {
    res.data.middleName = req.body.middleName;
  }
  if (req.body.title != null) {
    res.data.title = req.body.title;
  }
  if (req.body.county != null) {
    res.data.county = req.body.county;
  }
  if (req.body.enrollmentCenter != null) {
    res.data.enrollmentCenter = req.body.enrollmentCenter;
  }
  if (req.body.totalMales != null) {
    res.data.totalMales = req.body.totalMales;
  }
  if (req.body.totalFemales != null) {
    res.data.totalFemales = req.body.totalFemales;
  }
  if (req.body.totalDatas != null) {
    res.data.totalDatas = req.body.totalDatas;
  }

  try {
    const updatedData = await res.data.save();
    res.json(updatedData);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a single Data
router.delete("/:id", getData, async (req, res) => {
  try {
    await res.data.remove();
    res.json({ message: "Deleted Team Lead" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// Export the Router to be available the rest of the codes
module.exports = router;
