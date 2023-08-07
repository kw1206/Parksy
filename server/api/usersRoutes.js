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

router.post("/api/login/", (req, res) => {
  // req.body
  const loginMethod = req.body.loginMethod;
  const emailOrPhone = req.body.emailOrPhone;
  const pw = req.body.pw;

  // SQL query
  const getUser = `SELECT * FROM users WHERE ${loginMethod} = "${emailOrPhone}"`;
  console.log("running -->", getUser);

  db.query(getUser, (error, data) => {
    // if there is an error making the request to the db
    if (error) {
      console.log("login error --> ", error);
      res.json({
        error: error,
        errorMessage: "There was a problem logging you in. Please try again.",
      });
    }

    // if the request is successful and the user exists
    if (data.length > 0) {
      const pwMatch = bcrypt.compareSync(pw, data[0].password);
      console.log("pwMatch --> ", pwMatch);
      if (pwMatch) {
        console.log("passwords match");

        // create JWT for user
        const user_id = data[0].user_id;
        const token = jwt.sign({ user_id }, process.env.ACCESS_TOKEN_SECRET, {
          expiresIn: 300,
        });

        res.json({
          authorized: true,
          token: token,
          data: {
            firstName: data[0].firstName,
            lastName: data[0].lastName,
            email: data[0].email,
            phone: data[0].phone,
            user_id: data[0].user_id,
            trips: data[0].trips,
          },
        });
      } else {
        // if the password does not match
        res.json({
          errorMessage:
            "The password you entered is incorrect. Please try again.",
        });
      }
    } else {
      // if a user does not exist
      res.json({
        errorMessage: `The user you have entered does not exist. Please try again or click "Register" to create an account.`,
      });
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
