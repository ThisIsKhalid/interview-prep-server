import cors from "cors";
import dotenv from "dotenv";
import express from "express";
dotenv.config();

import usersRouter from "./routes/usersRoute.js";
import { connectToDatabase } from "./db/db.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define routes
app.use(usersRouter);

await connectToDatabase();

// Root route
app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(port, () => {
  console.log(`Interview Prep is running on ${port}`);
});

