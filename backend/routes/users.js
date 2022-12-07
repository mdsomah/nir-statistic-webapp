const express = require("express");
const router = express.Router();
const passport = require("passport");
// const LocalStrategy = require("passport-local").Strategy;
// const JwtStrategy = require("passport-jwt").Strategy;
const passportConfig = require("../config/passport");
const JWT = require("jsonwebtoken");
const multer = require('multer');
// const { v4: uuidv4 } = require('uuid');
const path = require('path');

// Mongoose Model
const User = require("../models/user");

// Load input validation
const validateRegisterInput = require("../validations/regUsers");
// const validateLoginInput = require("../validations/authUsers");

const signToken = (userID) => {
  return JWT.sign(
    {
      iss: "NIRWebApp",
      sub: userID,
    },
    "NIRWebApp",
    { expiresIn: "1h" }
  );
};

// UserProfile Image Upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'images');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
  // filename: function (req, file, cb) {
  //   cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
  // }
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


// Authenticate and Login Team Lead
router.post(
  "/login",
  passport.authenticate("local", { session: false }),
  (req, res) => {
    if (req.isAuthenticated()) {
      const { _id, userName, password, confirmPassword, role, lastName, firstName, middleName, title, county, enrollmentCenter, photo } = req.user;
      const token = signToken(_id);
      res.cookie("access_token", token, { httpOnly: true, sameSite: true });
      res
        .status(200)
        .json({
          isAuthenticated: true,
          user: { _id, userName, password, confirmPassword, role, lastName, firstName, middleName, title, county, enrollmentCenter, photo },
        });
    }
  }
);

// Create new Team Lead
router.post("/register", (req, res) => {
  // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  // Checking if the user exit or creating new user
  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const user = new User({
        lastName: req.body.lastName,
        firstName: req.body.firstName,
        middleName: req.body.middleName,
        title: req.body.title,
        email: req.body.email,
        mobileOne: req.body.mobileOne,
        mobileTwo: req.body.mobileTwo,
        county: req.body.county,
        enrollmentCenter: req.body.enrollmentCenter,
        userName: req.body.userName,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
        role: req.body.role,
      });

      const newUser = user.save((err) => {
        if (err)
          res
            .status(500)
            .json({ message: { msgBody: "Error has occur", msgError: true } });
        else
          res.status(201).json({
            message: {
              msgBody: "Account Created Successfully",
              msgError: false,
            },
          });
      });
    }
  });
});

// Update User Profile Photo
router.post("/profile/photo", passport.authenticate("jwt", { session: false }), upload.single("photo"), async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    if (!req.file) {
      return res.status(400).json({ Error: "Please Select an image to upload" });
    } else {
      user.photo = req.file.originalname || user.photo;
    }
  }
  try {
    const updateUserProfilePhoto = await user.save();
    res.json(updateUserProfilePhoto);
  }
  catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update User Profiles Password
router.post("/profile/password", passport.authenticate("jwt", { session: false }), async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    if (req.body.password === req.body.confirmPassword) {
      user.password = req.body.password;
      user.confirmPassword = req.body.confirmPassword;
    } else {
      return res.status(400).json({ Error: "Password Did Not Matched!" });
    }
  }
  try {
    const updateUserProfilePassword = await user.save();
    res.json(updateUserProfilePassword);
  }
  catch (err) {
    res.status(400).json({ err: err.message });
  }
});


// Logout Authenticated Team Lead
router.get(
  "/logout",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.clearCookie("access_token");
    res.json({ user: { userName: "", role: "", photo: "" }, success: true });
  }
);

// Authenticated Endpoint for persistances
router.get(
  "/authenticated",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { userName, role, photo } = req.user;
    res.status(200).json({ isAuthenticated: true, user: { userName, role, photo } });
  }
);

// Get all Team Leads
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// // Get all Team Leads
// router.get("/", async (req, res) => {
//   try {
//     const users = await User.find();
//     res.json(users);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// Helper Function to get Team Lead by ID
async function getUser(req, res, next) {
  let user;
  try {
    user = await User.findById(req.params.id);
    if (user == null) {
      return res.status(404).json({ message: "Cannot find TeamLead" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.user = user;
  next();
}

// Get a single Team Lead
router.get("/:id", getUser, (req, res) => {
  res.json(res.user);
});

// Update a single Team Lead record
router.patch("/:id", getUser, async (req, res) => {
  if (req.body.lastName != null) {
    res.user.lastName = req.body.lastName;
  }
  if (req.body.firstName != null) {
    res.user.firstName = req.body.firstName;
  }
  if (req.body.middleName != null) {
    res.user.middleName = req.body.middleName;
  }
  if (req.body.title != null) {
    res.user.title = req.body.title;
  }
  if (req.body.email != null) {
    res.user.email = req.body.email;
  }
  if (req.body.mobileOne != null) {
    res.user.mobileOne = req.body.mobileOne;
  }
  if (req.body.mobileTwo != null) {
    res.user.mobileTwo = req.body.mobileTwo;
  }
  if (req.body.county != null) {
    res.user.county = req.body.county;
  }
  if (req.body.enrollmentCenter != null) {
    res.user.enrollmentCenter = req.body.enrollmentCenter;
  }
  if (req.body.userName != null) {
    res.user.userName = req.body.userName;
  }
  if (req.body.password != null) {
    res.user.password = req.body.password;
  }
  if (req.body.confirmPassword != null) {
    res.user.confirmPassword = req.body.confirmPassword;
  }
  if (req.body.role != null) {
    res.user.role = req.body.role;
  }
  try {
    const updatedUser = await res.user.save();
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


// Delete a single Team Lead
router.delete("/:id", getUser, async (req, res) => {
  try {
    await res.user.remove();
    res.json({ message: "Deleted Team Lead" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Export the Router to be available the rest of the codes
module.exports = router;
