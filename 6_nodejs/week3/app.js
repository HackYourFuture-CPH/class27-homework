import knex from 'knex'
const knexInstance = knex({
  client: "mysql2",
  connection: {
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "my-secret-pw",
    database: process.env.DB_NAME || "hyf_node_week3_warmup",
    multipleStatements: true,
  },
});

import 'dotenv/config'
import express from 'express'

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const apiRouter = express.Router();
app.use("/api", apiRouter);

const contactsAPIRouter = express.Router();
apiRouter.use("/contacts", contactsAPIRouter);

// http://localhost:3000/api/contacts?sort=first_name%20asc
contactsAPIRouter.get("/", async (req, res) => {   
  let query = knexInstance.select("*").from("contacts");

  if ("sort" in req.query) {   
    const orderBy = req.query.sort.toString(); // converting the sort to string to make it able to get used by .orderByRaw('')
    const allowedColumnsForSort = [
      "first_name",
      "last_name",
      "email",
      "phone", 
    ];
    if (orderBy.length > 0 && allowedColumnsForSort.includes(orderBy)) {// Check if the orderBy parameter is inside the allowedColumnsForSort
      query = query.orderByRaw(orderBy); 
    }
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