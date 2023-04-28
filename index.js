const express = require("express");
const cors = require("cors");
require("dotenv").config();

const usersRouter = require('./routes/usersRoute')


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define routes
app.use(usersRouter)

// Root route
app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(port, () => {
  console.log(`Interview Prep is running on ${port}`);
});
