import express from 'express';
import fs from 'fs/promises';
const app = express();
const port = process.env.PORT || 3000;

async function getDocuments(){
    try{
        const data = await fs.readFile('documents.json', 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error("Failed to read documents from file:", error);
        return[];
    }
}
app.get('/search', async (req, res) => {
    const {q} = req.query;
    const documents = await getDocuments();

    const filteredDocuments = q ? documents.filter(doc => 
        Object.values(doc).some(value => 
            typeof value === 'string' && value.toLowerCase().includes(q.toLowerCase())
        )
    ) : documents;

    res.json(filteredDocuments);
});

app.get('/documents/:id', async (req, res) => {
    const { id } = req.params; 
    const documents = await getDocuments();
    
    const document = documents.find(doc => doc.id === Number(id));

    if (document) {
        res.json(document);
    } else {
        res.status(404).send('Document not found');
    }
});

app.use(express.json());

app.post('/search', async (req, res) => {
    const { q } = req.query;
    const { fields } = req.body;

    if (q && fields) {
        return res.status(400).send('Both query parameter "q" and body field "fields" cannot be provided together.');
    }

    const documents = await getDocuments();

    if (fields) {
        const fieldKeys = Object.keys(fields);
        const filteredDocuments = documents.filter(doc => 
            fieldKeys.every(key => doc.hasOwnProperty(key) && doc[key] == fields[key])
        );
        return res.json(filteredDocuments);
    }

    if (q) {
        const filteredDocuments = documents.filter(doc => 
            Object.values(doc).some(value => 
                typeof value === 'string' && value.toLowerCase().includes(q.toLowerCase())
            )
        );
        return res.json(filteredDocuments);
    }

    res.json(documents);
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});