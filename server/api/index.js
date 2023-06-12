import express from "express"
const router = express.Router();

router.use("/parks", require("./campusRoutes"));
router.use("/students", require("./studentRoutes"));

router.use((req, res, next) => {
  const err = new Error("API route not found!");
  err.status = 404;
  next(err);
});

module.exports = router;