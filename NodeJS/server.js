const express = require("express");
const app = express();

app.get("/user", (req, res) => {
  res.send("hello world");
});

app.post("/user", (req, res) => {
  res.send("hi");
});
app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
