// import express from "express";
// const router = express.Router();

// router.get("/api/parks", (req, res) => {
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

// router.post("/api/parks", (req, res) => {
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

// module.exports = router;
