import express from "express";
import cors from "cors";
import apiRoutes from "./api/index.js";
const app = express();

app.use(express.json());
app.use(cors());
// app.use(express.static(path.join(__dirname, "..", "public")))
app.use("/api", apiRoutes);

export default app;
