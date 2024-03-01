import {default as express} from "express";
import fs from "fs";

const app = express();
const port = process.env.PORT || 3000;
const path = "./documents.json";
const documents = JSON.parse(fs.readFileSync(path))

app.use(express.json());
app.get("/", (req, res) => {
  res.send("This is a search engine");
});

//GET /search
app.get("/search", (req, res) => {
   const query = req.query.q;
    if (!query) {
            res.json(documents);
    } else {
        const filteredDocuments = documents.filter((doc) => {
            return Object.values(doc).some((value) =>
              value.toString().includes(query)
            );
          });
          if (filteredDocuments) {
          res.json(filteredDocuments);
        } else {
          res.send("Unable to found");
        }
    }
  });

  //GET /documents/:id
  app.get("/documents/:id", (req, res) => {
    const documentId = +req.params.id;
    const resultDoc = documents.find((document) => document.id === documentId);
    if (resultDoc) {
      res.json(resultDoc);
    } else {
      res.status(404).send("Error: not found");
    }
  });
  
  //POST /search
  app.post("/search", (req, res) => {
    const query = req.query.q;
    const fields = req.body.fields;
  
    if (!query && !fields) {
      res.json(documents);
      return;
    }
    if (query && fields) {
      res.status(400).json({error: "Bad Request"});
      return;
    }
    if (query) {
      let filteredDocuments = documents.filter((doc) => {
        Object.values(doc).some((value) =>
        value.toString().includes(query));
        return;
      });
    } else if (fields) {
      const filteredDocuments = documents.filter((doc) => {
      Object.keys(doc).some((field) =>
      field.toString().includes(fields));
      return;
      });
    } else {
      res.status(400).json({error: "Bad Request"});
      return;
    }
    res.json(filteredDocuments);
  });

  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });