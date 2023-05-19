const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const filePath = "path/to/users.txt";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// Creae New user by using POST Method
app.post("/user", (req, res) => {
  const user = req.body;

  // if (!user || !user.name || !user.email) {
  //   return res.status(400).send("Missing required fields");
  // }

  fs.appendFileSync(
    path.join(__dirname, "data/users.txt"),
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

// // GET all users
// app.get("/", (req, res) => {
//   res.send("Get All Users");
//   fs.readFile(
//     path.join(__dirname, "../userData/users.txt"),
//     "utf8",
//     (err, data) => {
//       if (err) {
//         console.error(err);
//         return res.status(500).send("Error reading file");
//       }

//       const users = data
//         .trim()
//         .split("\n")
//         .map((line) => JSON.parse(line));
//       return res.status(200).json(users);
//     }
//   );
// });

// // GET user by ID
// app.get("/:id", (req, res) => {
//   const userId = parseInt(req.params.id);

//   if (isNaN(userId)) {
//     return res.status(400).send("Invalid user ID");
//   }

//   fs.readFile(
//     path.join(__dirname, "../data/users.txt"),
//     "utf8",
//     (err, data) => {
//       if (err) {
//         console.error(err);
//         return res.status(500).send("Error reading file");
//       }

//       const users = data
//         .trim()
//         .split("\n")
//         .map((line) => JSON.parse(line));
//       const user = users.find((u) => u.id === userId);

//       if (!user) {
//         return res.status(404).send("User not found");
//       }

//       return res.status(200).json(user);
//     }
//   );
// });

// // PUT update user
// app.put("/:id", (req, res) => {
//   const userId = parseInt(req.params.id);
//   const userUpdates = req.body;

//   if (isNaN(userId)) {
//     return res.status(400).send("Invalid user ID");
//   }

//   if (!userUpdates || Object.keys(userUpdates).length === 0) {
//     return res.status(400).send("No user updates provided");
//   }

//   fs.readFile(
//     path.join(__dirname, "../data/users.txt"),
//     "utf8",
//     (err, data) => {
//       if (err) {
//         console.error(err);
//         return res.status(500).send("Error reading file");
//       }

//       const users = data
//         .trim()
//         .split("\n")
//         .map((line) => JSON.parse(line));
//       const userIndex = users.findIndex((u) => u.id === userId);

//       if (userIndex === -1) {
//         return res.status(404).send("User not found");
//       }

//       const updatedUser = { ...users[userIndex], ...userUpdates };
//       users[userIndex] = updatedUser;

//       fs.writeFile(
//         path.join(__dirname, "../data/users.txt"),
//         users.map((u) => JSON.stringify(u)).join("\n"),
//         (err) => {
//           if (err) {
//             console.error(err);
//             return res.status(500).send("Error writing to file");
//           }

//           return res.status(200).json(updatedUser);
//         }
//       );
//     }
//   );
// });

// // DELETE user
// app.delete("/users/:id", (req, res) => {
//   const id = req.params.id;
//   fs.readFile("users.txt", "utf8", (err, data) => {
//     if (err) {
//       console.error(err);
//       res.status(500).send("Internal server error");
//       return;
//     }
//     let users = JSON.parse(data);
//     const index = users.findIndex((user) => user.id === id);
//     if (index === -1) {
//       res.status(404).send("User not found");
//       return;
//     }
//     users.splice(index, 1);
//     fs.writeFile("users.txt", JSON.stringify(users), (err) => {
//       if (err) {
//         console.error(err);
//         res.status(500).send("Internal server error");
//         return;
//       }
//       res.status(204).send();
//     });
//   });
// });

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
