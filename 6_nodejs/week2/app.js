const express = require("express");
const fs = require("fs");
const data = JSON.parse(fs.readFileSync("document.json"));

const app = express();
const port = process.env.PORT || 3000;

// Support parsing JSON requests
app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is a search engine");
});

app.get("/search", (req, res) => {
    const query = req.query.q;
    if (!query) {
      return res.status(200).json({ data: data, message: "ok" });
    } else {
      const filteredData = data.filter((item) =>
        Object.values(item).some((value) => typeof value === "string" && value.includes(query))
      );
      if (filteredData.length === 0)
        return res.status(404).json({ data: null, message: "item not found" });
      return res.status(200).json({ data: filteredData, message: "ok" });
    }
  });

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
