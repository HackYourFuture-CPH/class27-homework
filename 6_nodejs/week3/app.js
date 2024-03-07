import knex from "knex";
const knexInstance = knex({
  client: "mysql2",
  connection: {
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "2424",
    database: process.env.DB_NAME || "hyf_node_week3_warmup",
    multipleStatements: true,
  },
});

import express from "express";
const app = express();
const port = process.env.PORT || 3002;

app.use(express.json());

const apiRouter = express.Router();
app.use("/api", apiRouter);

const contactsAPIRouter = express.Router();
apiRouter.use("/contacts", contactsAPIRouter);

contactsAPIRouter.get("/", async (req, res) => {
  let query = knex.select("*").from("contacts");

  if ("sort" in req.query) {
    const orderBy = req.query.sort.toString();
    const validFields = ["first_name", "last_name"]; // Define valid sorting fields
    const validDirections = ["ASC", "DESC"]; // Define valid sorting directions

    // Parse and validate the sort parameter
    const [field, direction] = orderBy.split(" ");
    if (validFields.includes(field) && validDirections.includes(direction)) {
      query = query.orderBy(field, direction); // Use sanitized orderBy
    } else {
      return res.status(400).json({ error: "Invalid sort parameter" });
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
