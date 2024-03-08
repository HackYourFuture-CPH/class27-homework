import express from 'express';
import fs from 'fs/promises';
const app = express();
const port = process.env.PORT || 3000;

async function getDocument(){
    try{
        const data = await fs.readFile('documents.json', 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error("Failed to read documents from file:", error);
        return[];
    }
}
app.get('/search', async (req, res) => {
    const query = req.query.q;
    const documents = await getDocuments();

    if(query) {
        const filteredDocuments = documents.filter(doc => doc.value.includes(query));
        res.json(filteredDocuments);
    }else {
        res.json(documents);
    }
});
app.use(express.json());

app.get("/", (req, res) => {
    res.send("This is a search engine");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});