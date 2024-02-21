const express = require("express");
const meals = require("./meals");
const app = express();

//app.get("/", (req, res) => {
/* res.send("hello world"); */
/* }); */

app.get("/meal", (req, res) => {
  const randomIndex = Math.floor(Math.random() * meals.length);
  const randomMeal = meals[randomIndex];
  res.send(randomMeal);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
