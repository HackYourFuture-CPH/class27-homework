const express = require("express");
const app = express();
const fs = require("fs");
const port = 3000;

app.use(express.json());

const documents = JSON.parse(fs.readFileSync("documents.json", "utf-8"));

app.get("/", (req, res) => {
  res.send("Hi there");
});
// GET /search
app.get("/search", (req, res) => {
  const query = req.query.q;

  if (!query) {
    res.json(documents);
  } else {
    const results = documents.filter((doc) => {
      for (const key in doc) {
        if (doc[key].toString().includes(query)) {
          return true;
        }
      }
      return false;
    });
    res.json(results);
  }
});

// GET /documents/:id
app.get("/documents/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const document = documents.find((doc) => doc.id === id);

  if (document) {
    res.json(document);
  } else {
    res.status(404).send("Document not found");
  }
});

// POST /search
app.post("/search", (req, res) => {
  const query = req.query.q;
  const fields = req.body.fields;

  if (query && fields) {
    res
      .status(400)
      .send("Both query parameter and fields in body cannot be provided");
  } else {
    if (query) {
      const results = documents.filter((doc) => {
        for (const key in doc) {
          if (doc[key].toString().includes(query)) {
            return true;
          }
        }
        return false;
      });
      res.json(results);
    } else if (fields) {
      const results = documents.filter((doc) => {
        for (const key in fields) {
          if (doc[key] && doc[key].toString() === fields[key]) {
            return true;
          }
        }
        return false;
      });
      res.json(results);
    } else {
      res
        .status(400)
        .send("Either query parameter or fields in body must be provided");
    }
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
