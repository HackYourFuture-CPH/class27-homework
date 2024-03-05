import express from "express";
// import {bodyParser} from 'body-parser'
import fs from "fs";

const port = process.env.PORT || 3000;
const data = JSON.parse(fs.readFileSync("./document.json"));
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is a search engine");
});
// GET /search
app.get("/search", (req, res) => {
  const {q : query} = req.query;
  const searchedData = query ? data.filter(each => Object.values(each).join(' ').search(query) > -1) :data
  res.json({ data: searchedData, message: "ok" });
});

// GET /documents/:id
app.get("/search/:id", (req, res) => {
  const result = data.find(item => item.id === +req.params.id);
  const response = result ? {statusCode: 200 , message : "ok"} : {statusCode: 404 , message : "Not Found"};
  res.status(response.statusCode).json({data: result , message: response.message})
});

// POST /search
app.post("/search", (req, res) => {
  const query = req.query.q;
  const fields = req.body.fields;
  if (query && fields ) {
    res.status(400).send("can't provide both query and field");
  }
  if (query) {
    const filteredData = data.filter((item) =>
      Object.values(item).some(
        (value) => typeof value === "string" && value.includes(query)
      )
    );
    if (filteredData.length === 0) {
      return res.status(404).json({ data: null, message: "not found" });
    }
    return res.json({ data: filteredData, message: "ok" });
  } else if (fields) {

    // it checks if the key and the value of the fields object is exactly the same as key and value of data
    const keys = Object.keys(fields);
    const dataWithField = data.filter(item => {
      return keys.every(key => {
        return item[key] === fields[key]
      });
    });
    
    if (dataWithField.length === 0) {
        return res.status(404).json({ data: null, message: "not found" });
    }
    return res.status(200).json({ data: dataWithField, message: "ok" });
} else {
    return res.json({ data: data, message: "ok" });
  }
});

app.listen(port, () => console.log(`listening on port ${port}`));
