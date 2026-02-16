import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes.js";

dotenv.config(); // <-- MUST be here

const app = express();

app.use(express.json());
app.use(cors()); // Optional: can restrict origin later
app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

export default app;