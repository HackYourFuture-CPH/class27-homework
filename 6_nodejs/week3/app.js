import knex from 'knex'
const knexInstance = knex({
  client: "mysql2",
  connection: {
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || 3307,
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "password",
    database: process.env.DB_NAME || "hyf_node_week3_warmup",
    multipleStatements: true,
  },
});

import express from 'express'
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const apiRouter = express.Router();
app.use("/api", apiRouter);

const contactsAPIRouter = express.Router();
apiRouter.use("/contacts", contactsAPIRouter);

//Preventing SQL Injection
contactsAPIRouter.get("/", async (req, res) => {
    try{
        const { sort } = req.query;
        const allowedSortKeys = ["id", "first_name", "last_name", "email", "phone"];
        if(sort && allowedSortKeys.includes(sort)){
            const contacts = await knexInstance.from("contacts").orderBy(sort);
            res.json(contacts);
        }else{
            res.status(400).json({ error: "Invalid sort key" });
        }
    }catch(error){
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}); 





app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});