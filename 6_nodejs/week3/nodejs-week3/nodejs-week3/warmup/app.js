import express from 'express';
import knex from 'knex';

const knexInstance = knex({
  client: "mysql2",
  connection: {
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || 3307,
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "pass",
    database: process.env.DB_NAME || "hyf_node_week3_warmup",
    multipleStatements: true, 
  },
});

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); 

const apiRouter = express.Router();
app.use("/api", apiRouter);

const contactsAPIRouter = express.Router();
apiRouter.use("/contacts", contactsAPIRouter);

contactsAPIRouter.get("/", async (req, res) => {
  let query = knexInstance.select("*").from("contacts");

  if ("sort" in req.query) {
    const sortFields = ['id', 'first_name', 'last_name', 'email', 'phone']; 
    const orderBy = req.query.sort.toString().split(','); 

    orderBy.forEach(sortField => {
      const [field, direction] = sortField.split(' ');
      if (sortFields.includes(field) && ['asc', 'desc'].includes(direction.toLowerCase())) {
        query = query.orderBy(field, direction);
      }
    });
  }

  console.log("SQL", query.toSQL().sql);

  try {
    const data = await query;
    res.json({ data });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
