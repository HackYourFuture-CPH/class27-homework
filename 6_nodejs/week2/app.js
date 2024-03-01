import express from "express";
import fs from "fs";
const data = fs.readFileSync("./documents.json");
let documents = JSON.parse(data);
//console.log(documents);
const app = express();
const port = process.env.PORT || 3000;
// Support parsing JSON requests
app.use(express.json());
// For parsing application/x-www-form-urlencoded
//app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("This is a search engine.");
});
//---------------------------------------------------------------
//GET /search
/* This endpoint will accept a query parameter called q, short for query. 
If q is not provided, the endpoint should return all documents.
If q is provided, the endpoint should return the documents with some field that matches the value of q.
Example response if we call GET   /search?q=hello :
[
    {
        "id": 2,
        "type": "doc",
        "value": "hello world"
    }
]
*/
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
//----------------------------------------------------------------
//GET /documents/:id
//find and respond with the document matching the id parameter.
//If there is no such document, respond with a 404 Not Found.
//You can assume that the document IDs are unique so there's no need to handle duplicates.
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

//----------------------------------------------------------------
//POST /search
//This endpoint is sort of like GET /search.
//It also accepts a query parameter called q and it should behave just like GET /search.
//But it also accepts a field called fields in the JSON request body.
//fields is an object where it will be possible to filter by specific fields.
app.post("/search", (req, res) => {
  const query = req.query.q; // Extract the 'q' query parameter from the request URL .Example: http://localhost:3000/search?q=50
  const fields = req.body.fields; // Extract the 'fields' object from the request body . Example: http://localhost:3000/search?fields=price
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
