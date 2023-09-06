import express from "express";
import parksRoutes from "./parksRoutes.js";
import activitiesRoutes from "./activitiesRoutes.js";
import usersRoutes from "./usersRoutes.js";
import tripsRoutes from "./tripsRoutes.js";
const router = express.Router();

router.use("/parks", parksRoutes);
router.use("/activities", activitiesRoutes);
router.use("/users", usersRoutes);
router.use("/trips", tripsRoutes)

router.use((req, res, next) => {
  const err = new Error("API route not found!");
  err.status = 404;
  next(err);
});

export default router;
