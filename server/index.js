import app from "./app.js";
// import db from "./config/db.js";

app.listen(3001, () => {
  console.log(
    "connected to backend server! yay! listening on http://localhost:3001/"
  );
});

// import express from "express";
// import cors from "cors";

// const app = express();
// app.use(express.json());
// app.use(cors())

// app.use(express.static(path.join(__dirname, "..", "public")))

// app.use("/api", require("./api"))

// app.get("/", (req, res) => {
//   res.json("hi!");
// });

// app.get("/parks", (req, res) => {
//   const getAllParks = "SELECT * FROM parks";
//   console.log("running -->", getAllParks);
//   db.query(getAllParks, (error, data) => {
//     if (error) {
//       console.log(error);
//       return res.json(error);
//     }
//     console.log(data);
//     return res.json(data);
//   });
// });

// app.post("/parks", (req, res) => {
//   const dataToInsert = req.body;
//   dataToInsert.forEach((element) => {
//     const insertPark =
//       "INSERT INTO parks (park_name, photo, est, state, latitude, longitude, area_sqmi, rec_stay) VALUES (?)";
//     const values = [
//       element.park_name,
//       element.photo,
//       element.est,
//       element.state,
//       element.latitude,
//       element.longitude,
//       element.area_sqmi,
//       element.rec_stay,
//     ];

//     db.query(insertPark, [values], (error, data) => {
//       console.log("inserting --> ", element);
//       console.log(values);
//       if (error) {
//         console.log(error);
//         return res.json(error);
//       }
//       console.log(data);
//       return res.json("park added to the database!");
//     });
//   });
// });
