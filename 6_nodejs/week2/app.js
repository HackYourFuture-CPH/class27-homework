import express from 'express'
const app = express();
const port = process.env.PORT || 3000;

// Support parsing JSON requests
app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is a search engine");
});

// GET /search
app.get('/search', (req, res) =>{
    const query = req.query.q;
    if(query){ 
        const filteredData = data.filter(item => { 
          for (const key in item) { 
            if (item[key].toString().includes(query)){ 
              return true
            }
          } return false
        });
        res.json(filteredData); 
    } else {
      res.json(data); 
    }
})

// GET /documents/:id
app.get('/documents/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const data = documents.find(item => item.id === id);
  if (data) {
    res.json(data);
  } else {
    res.status(404).send("Data is not found")
  }
});

// POST /search
app.post('/search', (req, res) => {
  const query = req.query.q;
  const fields = req.body.fields;

  if (query && fields) {
    res.status(400).send("q and fields cannot be provide at the same time.")
  } else if (query) {
    const filteredData = data.filter(item =>{
      for (const key in item) {
        if (item[key].toString().includes(query)){
          return true;
        }
      } return false;
    });
    res.json(filteredData);
}
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});