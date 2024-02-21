import express from "express";

const app = express();
app.get("/", (req, res) => {
  console.log(req);
  res.send(`
  <p> PPP </p>
  <h1> Hello world </h1>`);
});

app.post("/", (req, res) => {});

app.get("/search", (req, res) => {
  res.json({
    searchResults: [
      {
        item: "foo",
      },
    ],
  });
});

app.listen(3030, () => console.log("i am running"));
