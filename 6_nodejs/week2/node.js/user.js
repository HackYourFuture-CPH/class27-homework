// Router so it can't be use in running the server by writing node user.js only from the main server index.js

import express from "express";
const router = express.Router();
const specialRouter = express.Router();

const users = [
  { id: 1, name: "John", country: "USA" },
  { id: 2, name: "Alice", country: "UK" },
  { id: 3, name: "Bob", country: "Canada" },
];

//to return all users

router.get("/", (req, res) => {
  const { country } = req.query;
  if (country) {
    const filteredUsers = users.filter(
      (user) => user.country.toLowerCase() === country.toLowerCase()
    );
    return res.json(filteredUsers);
  } else {
    return res.json(users);
  }
});

// user with specific ID   http://localhost:3002/users/1

router.get("/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((user) => user.id === userId);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  return res.json(user);
});

// middleware function to check if the user is premium (user ID 1)

const checkPremiumUser = (req, res, next) => {
  const userId = req.headers["user-id"];
  if (userId !== "1") {
    return res.status(403).json({
      message: "Only premium users are allowed to access this endpoint",
    });
  }
  next(); // continue to the next middleware/route handler
};

specialRouter.use(checkPremiumUser);

specialRouter.get("/", (req, res) => {
  res.send("This is a special endpoint for premium users only");
});

export default specialRouter;

// export default router;

//CRUD basic operation in coding PGPD
// create-post read-get update-put delete -delete

//localhost:3002/users  return All users info
// http://localhost:3002/users?country=Uk return users info with specific country
// http://localhost:3002/users/:id    return users with specific ID
// http://localhost:3002/users/1 return user with ID 1
