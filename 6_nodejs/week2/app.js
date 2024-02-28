import express from "express";
import fs from "fs";
const port = process.env.PORT || 3000;
const path = "./documents.json";
const documents = JSON.parse(fs.readFileSync(path));
const app = express();

app.get("/", (req, res) => {
  res.send("This is a search");
});

app.get("/search", (req, res) => {
  const query = req.query.q;

  if (!query) {
    res.json(documents);
  } else {
    const filteredDocuments = documents.filter((doc) => {
      return Object.values(doc).some((value) =>
        value.toString().toLowerCase().includes(query.toLowerCase())
      );
    });
    res.json({ data: filteredDocuments, message: "ok" });
  }
});

//GET /documents/:id

app.get("/search/:id", (req, res) => {
  const documentId = +req.params.id;
  const document = documents.find((doc) => doc.id === documentId);
  if (document) {
    res.json(document);
  } else {
    res.status(404).send("Not Found");
    // res.sendStatus(404);
  }
});

//POST /search

app.post("/search", (req, res) => {
  const query = req.query.q;
  const fields = req.body.fields;

  if (query && fields) {
    res.status(400).send("Bad Request: Both q and fields cannot be provided");
    return;
  }

  let filteredDocuments = documents;

  if (query) {
    filteredDocuments = documents.filter((doc) => {
      return Object.values(doc).some((value) => value.toString().includes(query));
    });
  } else if (fields) {
    filteredDocuments = documents.filter((doc) => {
      return Object.entries(fields).every(
        ([field, value]) => doc[field] && doc[field].toString() === value.toString()
      );
    });
  } else {
    res.status(400).send("Bad Request: q or fields must be provided");
    return;
  }
  res.json(filteredDocuments);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
