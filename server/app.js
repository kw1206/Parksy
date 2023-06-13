import express from "express";
import cors from "cors";
import db from "./config/db.js";

const app = express();
app.use(express.json());
app.use(cors());

// app.use(express.static(path.join(__dirname, "..", "public")))
// app.use("/api", require("./api"));

// PARK ROUTES
app.get("/api/parks", (req, res) => {
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

app.get("/api/parks/:id", (req, res) => {
  const id = req.params.id;
  const getPark = `SELECT * FROM parks WHERE park_id = ${id}`;
  console.log("running -->", getPark);
  db.query(getPark, (error, data) => {
    if (error) {
      console.log(error);
      return res.json(error);
    }
    console.log(data);
    return res.json(data);
  });
});

app.post("/api/parks", (req, res) => {
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

// USER ROUTES
// need to add middleware to verify authorization to user account
app.get("/api/users/:id", (req, res) => {
  const id = req.params.id;
  const getUser = `SELECT * FROM users WHERE user_id = ${id}`;
  console.log("running -->", getUser);
  db.query(getUser, (error, data) => {
    if (error) {
      console.log(error);
      return res.json(error);
    }
    console.log(data);
    return res.json(data);
  });
});

app.post("/api/register", (req, res) => {
  const dataToInsert = req.body;
  const insertNewUser =
    "INSERT INTO users (firstName, lastName, email, phone, password) VALUES (?)";
  console.log(dataToInsert);
  console.log(insertNewUser);
  db.query(insertNewUser, [dataToInsert], (error, data) => {
    console.log("inserting --> ", dataToInsert);
    if (error) {
      console.log(error);
      return res.json(error);
    }
    console.log(data);
    return res.json("new user added to the database!");
  });
});

export default app;
