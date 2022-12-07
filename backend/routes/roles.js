const express = require("express");
const router = express.Router();

// Mongoose Modle
const Role = require("../models/role");

// Add new User Role
router.post("/", async (req, res) => {
  const role = new Role({
    role: req.body.role,
    activate: req.body.activate,
  });
  try {
    const newRole = await role.save();
    res.status(201).json(newRole);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get All Users Role
router.get("/", async (req, res) => {
  try {
    const roles = await Role.find();
    res.json(roles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Helper Function to get Role by ID
async function getRole(req, res, next) {
  let role;
  try {
    role = await Role.findById(req.params.id);
    if (role == null) {
      return res.status(404).json({ message: "Cannot find Role" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.role = role;
  next();
}

// Get a single Role
router.get("/:id", getRole, (req, res) => {
  res.json(res.role);
});

// Update a single Role record
router.patch("/:id", getRole, async (req, res) => {
  if (req.body.role != null) {
    res.role.role = req.body.role;
  }
  if (req.body.activate != null) {
    res.role.activate = req.body.activate;
  }

  try {
    const updatedRole = await res.role.save();
    res.json(updatedRole);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a single Role
router.delete("/:id", getRole, async (req, res) => {
  try {
    await res.role.remove();
    res.json({ message: "Deleted Role" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
