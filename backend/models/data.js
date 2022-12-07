const mongoose = require("mongoose");
// Schema = mongoose.Schema;
const dataSchema = new mongoose.Schema({
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
    default: new Date(),
  },
  // photo: {
  //   type: String,
  //   required: true,
  // },
  // users: [{
  //   type: Schema.Types.ObjectId,
  //   required: true,
  //   ref: "User",
  //   // `populatedField`
  //   autopopulate: true
  // }],
});

// dataSchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model("Data", dataSchema);



