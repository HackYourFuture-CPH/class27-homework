const express = require("express");
const fs = require("fs");
const app = express();
const port = process.env.PORT || 3002;

app.use(express.json());

// Read and parse the JSON file
const rawData = fs.readFileSync('./documents.json');
const documents = JSON.parse(rawData);

// GET /search 
app.get("/search", (req, res) => {
    const query = req.query.q;

    if (!query) {
        res.json(documents);
    } else {
        const filteredDocuments = documents.filter(doc => doc.value.includes(query));
        res.json(filteredDocuments);
    }
});

// GET /documents/:id 
app.get("/documents/:id", (req, res) => {
    const documentId = parseInt(req.params.id);
    const document = documents.find(doc => doc.id === documentId);

    if (document) {
        res.json(document);
    } else {
        res.status(404).json({ error: 'Document not found' });
    }
});

app.post("/search", (req, res) => {
    const query = req.body.q;
    const fields = req.body?.fields;

  
    if (query && fields) {
       return res.status(400).json({ message: "Query and fields cannot be used at the same time" });
      
    } else {
        // a copy of documents array
        let filteredDocuments = documents;

        if (query) {
            filteredDocuments = filteredDocuments.filter(doc => doc.value.includes(query));
        }

        if (fields) {
            Object.entries(fields).forEach(([field, value]) => {
                filteredDocuments = filteredDocuments.filter(doc => String(doc[field]).includes(value));
            });
        }

        res.json(filteredDocuments);
    }
});




app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
