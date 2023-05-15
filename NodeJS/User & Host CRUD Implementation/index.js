const express = require("express");
const bodyParser = "body-parser";
const fs = require("fs");
const router = express.Router();
const path = require("path");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// GET all users
router.get("/", (req, res) => {
  fs.readFile(
    path.join(__dirname, "../data/users.txt"),
    "utf8",
    (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Error reading file");
      }

      const users = data
        .trim()
        .split("\n")
        .map((line) => JSON.parse(line));
      return res.status(200).json(users);
    }
  );
});

// GET user by ID
router.get("/:id", (req, res) => {
  const userId = parseInt(req.params.id);

  if (isNaN(userId)) {
    return res.status(400).send("Invalid user ID");
  }

  fs.readFile(
    path.join(__dirname, "../data/users.txt"),
    "utf8",
    (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Error reading file");
      }

      const users = data
        .trim()
        .split("\n")
        .map((line) => JSON.parse(line));
      const user = users.find((u) => u.id === userId);

      if (!user) {
        return res.status(404).send("User not found");
      }

      return res.status(200).json(user);
    }
  );
});

// POST new user
router.post("/", (req, res) => {
  const user = req.body;

  if (!user || !user.name || !user.email) {
    return res.status(400).send("Missing required fields");
  }

  fs.appendFile(
    path.join(__dirname, "../data/users.txt"),
    JSON.stringify(user) + "\n",
    (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Error writing to file");
      }

      return res.status(201).send("User created");
    }
  );
});

// PUT update user
router.put("/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const userUpdates = req.body;

  if (isNaN(userId)) {
    return res.status(400).send("Invalid user ID");
  }

  if (!userUpdates || Object.keys(userUpdates).length === 0) {
    return res.status(400).send("No user updates provided");
  }

  fs.readFile(
    path.join(__dirname, "../data/users.txt"),
    "utf8",
    (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Error reading file");
      }

      const users = data
        .trim()
        .split("\n")
        .map((line) => JSON.parse(line));
      const userIndex = users.findIndex((u) => u.id === userId);

      if (userIndex === -1) {
        return res.status(404).send("User not found");
      }

      const updatedUser = { ...users[userIndex], ...userUpdates };
      users[userIndex] = updatedUser;

      fs.writeFile(
        path.join(__dirname, "../data/users.txt"),
        users.map((u) => JSON.stringify(u)).join("\n"),
        (err) => {
          if (err) {
            console.error(err);
            return res.status(500).send("Error writing to file");
          }

          return res.status(200).json(updatedUser);
        }
      );
    }
  );
});

// DELETE user
app.delete("/users/:id", (req, res) => {
  const id = req.params.id;
  fs.readFile("users.txt", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal server error");
      return;
    }
    let users = JSON.parse(data);
    const index = users.findIndex((user) => user.id === id);
    if (index === -1) {
      res.status(404).send("User not found");
      return;
    }
    users.splice(index, 1);
    fs.writeFile("users.txt", JSON.stringify(users), (err) => {
      if (err) {
        console.error(err);
        res.status(500).send("Internal server error");
        return;
      }
      res.status(204).send();
    });
  });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
