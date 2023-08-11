import db from "../config/db.js";
import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const router = express.Router();

////////////////////
////////////////////
// USER ROUTES
////////////////////
////////////////////

////////////////////
// MIDDLEWARE TO VERIFY JWT
////////////////////

const verifyJWT = (req, res, next) => {
  const token = req.headers["x-acces-token"];
  if (!token) {
    res.json("there is no token; need token to proceed");
  } else {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, decoded) => {
      if (error) {
        res.json({ authorized: false, message: "authorization failed" });
      } else {
        req.user_id = decoded.id;
        next();
      }
    });
  }
};

//   app.get("/api/authenticate", (req, res) => {});

////////////////////
// USER LOGIN
////////////////////

router.get("/api/login/", (req, res) => {
  // req.body
  const email = req.body.email;

  // SQL query
  const getUser = `SELECT * FROM users WHERE email = "${email}"`;
  console.log("running -->", getUser);

  db.query(getUser, (error, data) => {
    // if there is an error making the request to the db
    if (error) {
      console.log("login error --> ", error);
      res.json({
        error: error,
        errorMessage: "There was a problem getting your profile data.",
      });
    } else {
      res.json(data[0]);
    }
  });
});

////////////////////
// REGISTER USER
////////////////////

router.post("/api/register", (req, res) => {
  // req.body
  const dataToInsert = req.body;

  // SQL query
  const insertNewUser =
    "INSERT INTO users (firstName, lastName, email, phone, password) VALUES (?)";

  db.query(insertNewUser, [dataToInsert], (error, data) => {
    if (error) {
      console.log(error);
      return res.json(error);
    }

    console.log(data);
    return res.json(data);
  });
});

export default router;
