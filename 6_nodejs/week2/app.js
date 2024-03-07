import express from "express";
import fs from "fs";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
//load all document.json
const documents = JSON.parse(fs.readFileSync("documents.json", "utf8"));

app.get("/", (req, res) => {
  res.send("This is a search engine");
});

// GET /search?id=2
app.get("/search", (req, res) => {
  const query = req.query.q;
  if (!query) {
    res.json(documents);
  } else {
    const results = documents.filter((doc) =>
      Object.values(doc).some(
        (value) => typeof value === "string" && value.includes(query)
      )
    );
    res.json(results);
  }
});

// GET /documents/:id
app.get("/documents/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const document = documents.find((data) => data.id === id);
  if (document) {
    res.json(document);
  } else {
    res.status(404).json({ error: "Document not found" });
  }
});

//POST /search
//q (query parameter) and fields (in body)
app.post("/search", (req, res) => {
  const query = req.query.q;
  const fields = req.body.fields;

  if (query && fields) {
    return res
      .status(400)
      .json({ error: "Bad Request and both parameter can't provide" });
  }
  if (fields) {
    const filteredData = documents.filter((data) => {
      for (const field in fields) {
        if (data[field] !== fields[field]) {
          return false;
        }
      }
      return true;
    });
    return res.json(filteredData);
  }
  return res.json(documents);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
