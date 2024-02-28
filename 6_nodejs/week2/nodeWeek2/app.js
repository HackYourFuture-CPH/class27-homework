import express from "express";
const app = express();

const port = process.env.PORT || 3000;

// Sample data
import documents from "./documents.json" assert { type: "json" };
console.log(documents);

// Support parsing JSON requests
app.use(express.json());

// GET /search
app.get("/search", (req, res) => {
  const { q } = req.query;
  if (!q) {
    res.json(documents);
  } else {
    const filteredDocuments = documents.filter((doc) => {
      for (const key in doc) {
        if (doc[key].toString().includes(q)) {
          return true;
        }
      }
      return false;
    });
    res.json(filteredDocuments);
  }
});

// GET /documents/:id
app.get("/documents/:id", (req, res) => {
  const { id } = req.params;
  const document = documents.find((doc) => doc.id === parseInt(id));
  if (document) {
    res.json(document);
  } else {
    res.status(404).json({ error: "Document not found" });
  }
});

// POST /search
app.post("/search", (req, res) => {
  const { q } = req.query;
  const { fields } = req.body;

  if (q && fields) {
    res.status(400).json({
      error:
        "Both query parameter 'q' and 'fields' in the body cannot be provided",
    });
    return;
  }

  let filteredDocuments = documents;

  if (q) {
    filteredDocuments = documents.filter((doc) => {
      for (const key in doc) {
        if (doc[key].toString().includes(q)) {
          return true;
        }
      }
      return false;
    });
  } else if (fields) {
    filteredDocuments = documents.filter((doc) => {
      for (const key in fields) {
        if (doc[key] !== fields[key]) {
          return false;
        }
      }
      return true;
    });
  }

  res.json(filteredDocuments);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

export default documents.json;
