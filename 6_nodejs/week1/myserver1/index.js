import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("hello");

  // <p> ppp <p>

  // <h1> Hello World <h1>

  //}]

  //app.get("/", (req, res) => {
  //res.status(202).send(`<p> ppp </p>
  // <h1> Hello World </h1>`);

  //app.post('/', (req, res)=>{})

  // app.get('/search',(req, res) => {
  // res.send('search results')})

  // app.get('/search',(req, res) => {
  //res.json({
  //searchResults: [{
  //item: 'foo'
  //}
  //]
  //}]
  //})
  // res.send('search results')})
});

app.listen(3030, () => console.log("I am running"));
