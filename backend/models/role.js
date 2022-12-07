const mongoose = require("mongoose");
const roleSchema = new mongoose.Schema({
  role: {
    type: String,
    enum: ["Super Admin", "Admin", "Supervisor", "Team Lead", "Manager"],
    required: true,
    // default: "teamLead",
  },
  activate: {
    type: String,
    required: true,
  },
  createdDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

// console.log(roleSchema.obj.role.enum);

module.exports = mongoose.model("Role", roleSchema);
