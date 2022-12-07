const express = require("express");
const router = express.Router();
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const path = require('path');

const Profile = require("../models/profile");

// UserProfile Image Upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'images');
  },
  filename: function (req, file, cb) {
    cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
  }
});

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
}

let upload = multer({ storage, fileFilter });



// Post Profile Photo
router.post("/profile", upload.single('photo'), (req, res) => {
  const photo = req.body.filename;

  const newProfileData = {
    photo,
  }

  const newPhoto = new Profile(newProfileData);

  newPhoto.save()
    .then(() => res.json('Profile Photo Added'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Get User Profile Photo
router.get("/", async (req, res) => {
  try {
    const profiles = await Profile.find();
    res.json(profiles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;