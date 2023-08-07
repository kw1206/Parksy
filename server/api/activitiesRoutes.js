import db from "../config/db.js";
import express from "express";
const router = express.Router();

// ACTIVITIES ROUTES

// ALL ACTIVITIES
router.get("/", (req, res) => {
  const getAllActivities = "SELECT * FROM activities";
  console.log("running -->", getAllActivities);
  db.query(getAllActivities, (error, data) => {
    if (error) {
      console.log(error);
      return res.json(error);
    }
    return res.json(data);
  });
});

// ACTIVITY BY ACTIVITY ID
router.get("/:id", (req, res) => {
  const id = req.params.id;
  const getActivities = `SELECT * FROM activities WHERE activity_id = ${id}`;
  console.log("running -->", getActivities);
  db.query(getActivities, (error, data) => {
    if (error) {
      console.log(error);
      return res.json(error);
    }
    return res.json(data);
  });
});

export default router;
