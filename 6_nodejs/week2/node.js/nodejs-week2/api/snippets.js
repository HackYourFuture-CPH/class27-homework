import express from "express";
const router = express.Router();
const knex = require("../database");

// GET /api/snippets
router.get("/", async (req, res) => {
  try {
    const snippets = await db.select().from("snippets");
    res.json(snippets);
  } catch (error) {
    console.error("Error fetching snippets:", error);
    res.status(500).json({ error: "Failed to fetch snippets" });
  }
});

// POST /api/snippets
router.post("/", async (req, res) => {
  const { title, contents, is_private } = req.body;
  try {
    const [snippetId] = await db("snippets").insert({
      title,
      contents,
      is_private,
    });
    res.json({ id: snippetId, title, contents, is_private });
  } catch (error) {
    console.error("Error creating snippet:", error);
    res.status(500).json({ error: "Failed to create snippet" });
  }
});

// GET /api/snippets/:id
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const snippet = await db.select().from("snippets").where("id", id).first();
    if (!snippet) {
      return res.status(404).json({ error: "Snippet not found" });
    }
    res.json(snippet);
  } catch (error) {
    console.error("Error fetching snippet:", error);
    res.status(500).json({ error: "Failed to fetch snippet" });
  }
});

export default router;
