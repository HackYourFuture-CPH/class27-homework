import express from "express";
const app = express();
import fs from "fs";
const data = fs.readFileSync("./documents.json");
let documents = JSON.parse(data);
const port = process.env.PORT || 3000;

// Support parsing JSON requests
app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is a search engine");
});
//part1
app.get("/search", (req, res) => {
  const query = req.query.q; // Extract the 'q' query parameter from the request URL
  if (!query) {
    res.json(documents); // If 'q' is not provided, it returns all documents
  } else {
    // filter documents' objects, as doc, based on whether any field matches the query string
    const filteredDocuments = documents.filter((doc) =>
      Object.values(doc).some(
        (value) => typeof value === "string" && value.includes(query)
      )
    );
    if (filteredDocuments) {
      res.json(filteredDocuments);
    } else {
      res.send("no match found");
    }
  }
});
//part2:
app.get("/documents/:id", (req, res) => {
  console.log(req.params);
  const documentId = +req.params.id;
  //console.log(documentId);
  const resultDoc = documents.find((document) => document.id === documentId);
  if (resultDoc) {
    res.json(resultDoc);
    return;
  } else {
    res.status(404).json({ error: "Document not found" });
  }
});

//part3:
app.post("/search", (req, res) => {
  const query = req.query.q;
  const fields = req.body.fields;
  console.log(query);
  console.log(fields);
  // Check if both query parameter and fields in the body are provided
  if (query && fields) {
    res.status(400).json({
      error: "Both 'q' parameter and 'fields' in body cannot be provided",
    });
    return;
  }
  if (!query && !fields) {
    res.json(documents); // If neither query nor fields are provided, return all documents
    return;
  }
  if (query) {
    // Filter documents based on query parameter
    const filteredDocuments = documents.filter((doc) =>
      Object.values(doc).some(
        (value) => typeof value === "string" && value.includes(query)
      )
    );
    console.log("Filtered Documents:", filteredDocuments);
    res.json(filteredDocuments); // Respond with filtered documents
  } else if (fields) {
    // Filter documents based on fields in the body
    const filteredDocuments = documents.filter((doc) =>
      Object.keys(doc).some(
        (field) => typeof field === "string" && field.includes(fields)
      )
    );
    console.log("Filtered Documents:", filteredDocuments);
    res.json(filteredDocuments); // Respond with filtered documents
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
