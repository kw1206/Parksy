import db from "../config/db.js";
import express from "express";
const router = express.Router();

// TRIPS ROUTES

// GET ALL TRIPS
router.get("/", (req, res) => {
  const getAllTrips = "SELECT * FROM trips";
  console.log("running -->", getAllTrips);
  db.query(getAllTrips, (error, data) => {
    if (error) {
      console.log(error);
      return res.json(error);
    }
    console.log(data);
    return res.json(data);
  });
});

// GET TRIP BY ID
router.get("/:id", (req, res) => {
  const id = req.params.id;
  const getTripByID = `SELECT * FROM trips WHERE trip_id = ${id}`;
  console.log("running -->", getTripByID);
  db.query(getTripByID, (error, data) => {
    if (error) {
      console.log(error);
      return res.json(error);
    }
    return res.json(data);
  });
});

// GET TRIPS BY USER
router.get("/:user", (req, res) => {
  const user = req.params.user;
  const getTripsByUser = `SELECT * FROM trips WHERE user_id = ${user}`;
  console.log("running -->", getTripsByUser);
  db.query(getTripsByUser, (error, data) => {
    if (error) {
      console.log(error);
      return res.json(error);
    }
    return res.json(data);
  });
});

// GET TRIPS BY PARK
router.get("/park-id/:park", (req, res) => {
  const park = req.params.park;
  const getTripsByPark = `SELECT * FROM trips WHERE park_id = ${park}`;
  console.log("running -->", getTripsByPark);
  db.query(getTripsByPark, (error, data) => {
    if (error) {
      console.log(error);
      return res.json(error);
    }
    return res.json(data);
  });
});

// ADD TRIP
router.post("/add-trip", (req, res) => {
    // sql statement to insert trip
    const insertTrip =
    "INSERT INTO trips (user_id, park_id, trip_start, trip_end, duration, overall_rating, traveler_type, adults, adults_ages_low, adults_ages_high, kids, kids_ages_low, kids_ages_high, fitness_level, trip_activity_level, avg_week) VALUES (?)";
    console.log("running --> ", insertTrip)
    console.log("req.body sent to be inserted --> ", req.body);
    // put all the trip values together from req.body
  const tripValues = [
    req.body.user_id,
    req.body.park_id,
    new Date(req.body.trip_start),
    new Date(req.body.trip_end),
    req.body.duration,
    req.body.overall_rating,
    req.body.traveler_type,
    req.body.adults,
    req.body.adults_ages_low,
    req.body.adults_ages_high,
    req.body.kids,
    req.body.kids_ages_low,
    req.body.kids_ages_high,
    req.body.fitness_level,
    req.body.trip_activity_level,
    req.body.avg_week
  ];
  // insert the trip
  db.query(insertTrip, [tripValues], (tripError, tripData) => {
    console.log("inserting tripValue --> ", tripValues);
    if (tripError) {
      console.log(tripError);
      return res.json(tripError);
    }
    const newTripId = tripData.insertId;
    // after trip has been inserted, insert the weeks
    console.log(`trip ${newTripId} added`);
  });
  //     // // sql statement to insert week
  //     // const insertWeek =
  //     //   "INSERT INTO trips_weeks (week, trip_id, park_id) VALUES (?)";
  //     // // loop through each week in the weeks array from req.body and add an instance to trips_weeks
  //     // req.body.weeks.forEach((el) => {
  //     //   const weekValues = {
  //     //     week: el,
  //     //     trip_id: newTripId,
  //     //     park_id: req.body.park_id,
  //     //   };
  //     //   db.query(insertWeek, [weekValues], (weekError, weekData) => {
  //     //     console.log("inserting --> ", weekValues);
  //     //     if (weekError) {
  //     //       console.log(weekError);
  //     //       return res.json(weekError);
  //     //     }
  //     //   });
  //     // });
  //     return res.json("trip added to the database!");
  //   });
});

export default router;
