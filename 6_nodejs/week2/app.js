const express = require("express");
const app = express();
const documents = require("./documents");

//Support parsing JSON requests
app.use(express.json());

console.log(documents);

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("This is a search engine");
});

app.get("/documents", (req, res) => {
  res.send(documents);
});

//GET /search - endpoint will accept a query parameter called q (query)
//if q is not provided, the endpoint should return all documents (line - )
//if q is provided, the endpoint should return the documents with some field that matches the value of q (line - )

/*'req.query' is a request object that is populated by request query strings that are found in a URL. 
 These query strings are in key-value form. They start after the question mark in any URL. 
 And if there are more than one, they are separated with the ampersand.*/

app.get("/search", (req, res) => {
  const { q } = req.query;
  if (!q) {
    res.send(documents);
  } else {
    const filteredDocuments = documents.filter((doc) =>
      Object.values(doc).some((value) =>
        value.toString().toLowerCase().includes(q.toLowerCase())
      )
    );
    res.send(filteredDocuments);
  }
});

//GET /documents/:id - find and respond with the document matching the id parameter

app.get("/documents/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const document = documents.find((doc) => doc.id === id);
  if (document) {
    res.send(document);
  } else {
    res.status(404).send("Document not found");
  }
});

//POST /search - this endpoint is sort of like GET /search
//It also accepts a query parameter called q and it should behave just like GET /search
//But it also accepts a field called fields in the JSON request body
//Fields is an object where it will be possible to filter by specific fields
//If both q (query parameter) and fields (in body) are provided, should respond with status 400 Bad Request and explain that both can't be provided

app.post("/search", (req, res) => {
  const { q, fields } = req.body;
  if (q && fields) {
    res.status(400).json({ error: "Both q and fields cannot be provided" });
  } else {
    if (fields) {
      const filteredData = documents.filter((data) => {
        for (const [key, value] of Object.entries(fields)) {
          if (data[key] != value) {
            return false;
          }
        }
        return true;
      });
      return res.json(filteredData);
    }
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
