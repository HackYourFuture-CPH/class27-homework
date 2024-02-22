// Replace require with import
import express from "express";
import meals from "./meals.js"; // Import the array of meals

// Create an instance of Express
const app = express();

// Define a route for "/"
app.get("/", (req, res) => {
  res.send("hello world");
});

// Define a route for "/meal"
app.get("/meal", (req, res) => {
  // Select a random meal from the array
  const randomIndex = Math.floor(Math.random() * meals.length);
  const randomMeal = meals[randomIndex];
  res.send(randomMeal);
});

// Listen on port 3001
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
