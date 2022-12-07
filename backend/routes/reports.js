require("dotenv").config();
const express = require("express");
const router = express.Router();
const mongodb = require("mongodb");
const fm_mongo_connector = require("flexmonster-mongo-connector");

let dbo = null;
let _apiReference = null; // it’ll be the Connector instance

// // Define the config for the Connector
let config = {
  cacheEnabled: true,
  cacheMemoryLimit: 100,
  cacheTimeToLive: 120,
  logsEnabled: true,
};

mongodb.MongoClient.connect(
  process.env.DATABASE_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, db) => {
    if (err) throw err;
    dbo = db.db("users");
    // Pass the config to the Connector
    _apiReference = new fm_mongo_connector.MongoDataAPI(config);
  }
);

// Handshake Request
router.post("/handshake", async (req, res) => {
  try {
    res.json({ version: _apiReference.API_VERSION });
  } catch (err) {
    handleError(err, res);
  }
});

// Fields Request
router.post("/fields", async (req, res) => {
  try {
    const result = await _apiReference.getSchema(dbo, req.body.index);
    res.json(result);
  } catch (err) {
    //your error handler
  }
});

// Members Request
router.post("/members", async (req, res) => {
  try {
    const result = await _apiReference.getMembers(
      dbo,
      req.body.index,
      { field: req.body.field },
      { page: req.body.page, pageToken: req.body.pageToken }
    );
    res.json(result);
  } catch (err) {
    //your error handler
  }
});

// Select Request
router.post("/select", async (req, res) => {
  try {
    const result = await _apiReference.getSelectResult(
      dbo,
      req.body.index,
      req.body.query,
      { page: req.body.page, pageToken: req.body.pageToken }
    );
    res.json(result);
  } catch (err) {
    //your error handler
  }
});

module.exports = router;
