import express from "express";
const app = express();
const port = process.env.PORT || 3003;

// Support parsing JSON requests
app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is a search engine");
});

app.get("/search", (req, res) => {
    console.log(req.query);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
