const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 5000;

mongoose
  .connect("mongodb://127.0.0.1:27017/gofood")
  .then(() => {
    console.log("Database connected successfully");
    // Your application code goes here
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on Port ${port}`);
});
