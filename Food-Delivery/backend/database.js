const mongoose = require("mongoose");

const mongoDB = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/gofood")
    .then(async () => {
      console.log("Database connected successfully");

      // Your application code goes here
    })
    .catch((error) => {
      console.error("Database connection error:", error);
    });
};

module.exports = mongoDB;
