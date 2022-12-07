const mongoose = require("mongoose");
const profileSchema = new mongoose.Schema({
  photo: {
    type: String,
    required: true,
    default: "https://avatars.dicebear.com/api/adventurer/your-custom-seed.svg",
  },
});


module.exports = mongoose.model("Profile", profileSchema);
