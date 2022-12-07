const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const role = require("./role");
const userSchema = new mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId,
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
  email: {
    type: String,
    required: true,
  },
  mobileOne: {
    type: Number,
    required: true,
  },
  mobileTwo: {
    type: Number,
    required: true,
  },
  county: {
    type: String,
    required: false,
  },
  enrollmentCenter: {
    type: String,
    required: false,
  },
  userName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
    required: true,
  },
  // roleName: {
  //   type: String,
  // },
  role: {
    type: String,
    enum: ["Super Admin", "Admin", "Supervisor", "Team Lead", "Manager"],
    required: true,
    // default: "teamLead",
  },
  createdDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
  photo: {
    type: String,
    required: true,
    default: "https://avatars.dicebear.com/api/adventurer/your-custom-seed.svg",
  },
});

// Password harch
userSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();
  bcrypt.hash(this.password, 10, (err, passwordHash) => {
    if (err) return next(err);
    this.password = passwordHash;
    next();
  });
});

// Confirm Password Harch
userSchema.pre("save", function (next) {
  if (!this.isModified("confirmPassword")) return next();
  bcrypt.hash(this.confirmPassword, 10, (err, passwordHash) => {
    if (err) return next(err);
    this.confirmPassword = passwordHash;
    next();
  });
});

// Compared Password Store in Database
userSchema.methods.comparePassword = function (password, cb) {
  bcrypt.compare(password, this.password, (err, isMatch) => {
    if (err) return cb(err);
    else {
      if (!isMatch) return cb(null, isMatch);
      return cb(null, this);
    }
  });
};

// console.log(mongoose.Types.ObjectId.isValid('630bd8b59339f4314cc4a255'));

module.exports = mongoose.model("User", userSchema);
