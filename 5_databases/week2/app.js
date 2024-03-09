import express from "express";
import { readFileSync } from "node:fs";

const app = express();
const port = process.env.PORT || 3003;


const data = readFileSync("./documents.json", (err, data) => {
  if (err) throw err;
});
const documents = JSON.parse(data);
console.log(documents);


// Support parsing JSON requests
app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is a search engine");
});

app.get("/search", (req, res) => {
  const q = req.query.q;
  const fields = req.body.fields;

  if (q && fields) {
    res.status(400).send('Request and fields both can not be provided');
  } else if (q) {
      return res.json(documents);
    } else {
      const resp = documents.filter(docum => docum.value.includes(q));
      res.json(resp);
    }
})


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
