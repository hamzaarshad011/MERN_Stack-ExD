const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

const app = express();

// we are using node js file system
// first i write file name then i write the text i want to store in that file within writeFileSync() function.
fs.writeFileSync("data/user.txt", "1. Hi there!");

fs.appendFileSync("data/user.txt", "\n2. How are you");

const data = fs.readFileSync("data/user.txt");
console.log(data);
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
