import express from "express";
import userRouter from "./user.js";
import specialRouter from "./specialRouter";
const app = express();

app.get("/about", (req, res) => {
  res.send("<h1>Angel Henrietta Aboah</h1>");
});
app.use("/users", userRouter);
app.use("/special", specialRouter);

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`I'm listening on port ${PORT}`);
});
