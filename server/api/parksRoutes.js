import db from "../config/db.js";
import express from "express";
const router = express.Router();

// PARK ROUTES

// GET ALL PARKS
router.get("/", (req, res) => {
  const getAllParks = "SELECT * FROM parks";
  console.log("running -->", getAllParks);
  db.query(getAllParks, (error, data) => {
    if (error) {
      console.log(error);
      return res.json(error);
    }
    console.log(data);
    return res.json(data);
  });
});

// GET PARK BY ID
router.get("/id/:id", (req, res) => {
  const id = req.params.id;
  const getParkByID = `SELECT * FROM parks WHERE park_id = ${id}`;
  console.log("running -->", getParkByID);
  db.query(getParkByID, (error, data) => {
    if (error) {
      console.log(error);
      return res.json(error);
    }
    return res.json(data);
  });
});

// GET PARK BY NAME
router.get("/name/:name", (req, res) => {
  const name = req.params.name;
  const getParkByName = `SELECT * FROM parks WHERE park_name = "${name}"`;
  console.log("running -->", getParkByName);
  db.query(getParkByName, (error, data) => {
    if (error) {
      console.log(error);
      return res.json(error);
    }
    return res.json(data);
  });
});

// GET ACTIVITIES FOR PARK ID
router.get("/:id/activities", (req, res) => {
  const id = req.params.id;
  const getParkActivities = `SELECT a.*
    FROM activities a
    INNER JOIN parks_activities pa ON a.activity_id = pa.activity_id
    WHERE pa.park_id = ${id}`;
  console.log("running -->", getParkActivities);
  db.query(getParkActivities, (error, data) => {
    if (error) {
      console.log(error);
      return res.json(error);
    }
    console.log(data);
    return res.json(data);
  });
});

// ADD PARK
router.post("/api/parks", (req, res) => {
  const dataToInsert = req.body;
  dataToInsert.forEach((element) => {
    const insertPark =
      "INSERT INTO parks (park_name, photo, est, state, latitude, longitude, area_sqmi, rec_stay) VALUES (?)";
    const values = [
      element.park_name,
      element.photo,
      element.est,
      element.state,
      element.latitude,
      element.longitude,
      element.area_sqmi,
      element.rec_stay,
    ];

    db.query(insertPark, [values], (error, data) => {
      console.log("inserting --> ", element);
      console.log(values);
      if (error) {
        console.log(error);
        return res.json(error);
      }
      console.log(data);
      return res.json("park added to the database!");
    });
  });
});

export default router;
