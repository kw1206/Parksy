import express from "express";
import cors from "cors";
import db from "./config/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
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
app.post("/api/login/", (req, res) => {
  const loginMethod = req.body.loginMethod;
  const emailOrPhone = req.body.emailOrPhone;
  const pw = req.body.pw;
  console.log("req.body --> ", req.body);
  const getUser = `SELECT * FROM users WHERE ${loginMethod} = "${emailOrPhone}"`;

  console.log("running -->", getUser);

  db.query(getUser, (error, data) => {
    // if there is an error making the request to the db
    if (error) {
      console.log("login error --> ", error)
      res.json({error: error, errorMessage: "There was a problem logging you in. Please try again."});
    }

    // if the request is successful and the user exists
    if (data.length > 0) {
      const pwMatch = bcrypt.compareSync(pw, data[0].password)
      console.log("pwMatch --> ", pwMatch)
      if (pwMatch) {
        console.log("passwords match")
        res.json(data);
      } else {
        res.json({errorMessage: "The password you entered is incorrect. Please try again."});
      }
    } else {
      // if a user does not exist
      res.json({errorMessage: `The user you have entered does not exist. Please try again or click "Register" to create an account.`});
    }

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
