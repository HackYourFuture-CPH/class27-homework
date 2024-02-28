import express from "express";
const router = express.Router();
import knex from "../database";

// Middleware to authenticate requests
const authenticateToken = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(403).json({ error: "Not authorized" });
  }

  try {
    const user = await knex("users").where("token", token).first();
    if (!user) {
      return res.status(403).json({ error: "Not authorized" });
    }
    req.user = user; // Attach user object to request for later use
    next();
  } catch (error) {
    console.error("Error authenticating user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// POST /api/snippets
router.post("/", authenticateToken, async (req, res) => {
  try {
    // Validate request body
    const { title, contents, is_private } = req.body;
    if (!title || !contents) {
      return res.status(400).json({ error: "Title and contents are required" });
    }

    // Insert snippet into database
    const [snippetId] = await knex("snippets").insert({
      title,
      contents,
      is_private,
      user_id: req.user.id, // Use user ID from authenticated user
    });

    // Respond with the newly created snippet
    res.status(201).json({
      id: snippetId,
      title,
      contents,
      is_private,
      user_id: req.user.id,
    });
  } catch (error) {
    console.error("Error creating snippet:", error);
    res.status(500).json({ error: "Failed to create snippet" });
  }
});

// GET /api/snippets
router.get("/", async (req, res) => {
  try {
    let snippets;
    if (req.user) {
      // Authenticated access: return snippets belonging to the user
      snippets = await knex("snippets")
        .where("user_id", req.user.id)
        .select("id", "created_at", "title", "contents", "is_private");
    } else {
      // Anonymous access: return all non-private snippets with user information
      snippets = await knex("snippets")
        .where("is_private", false)
        .join("users", "snippets.user_id", "=", "users.id")
        .select(
          "snippets.id",
          "snippets.created_at",
          "snippets.title",
          "snippets.contents",
          "snippets.is_private",
          "users.id as user_id",
          "users.first_name",
          "users.last_name"
        );
    }
    res.json(snippets);
  } catch (error) {
    console.error("Error fetching snippets:", error);
    res.status(500).json({ error: "Failed to fetch snippets" });
  }
});

// GET /api/snippets/:id
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    // Retrieve the snippet with user information by ID
    const snippet = await knex("snippets")
      .where("snippets.id", id)
      .join("users", "snippets.user_id", "=", "users.id")
      .select(
        "snippets.id",
        "snippets.created_at",
        "snippets.title",
        "snippets.contents",
        "snippets.is_private",
        "users.id as user_id",
        "users.first_name",
        "users.last_name"
      )
      .first();

    // Respond with the snippet
    if (snippet) {
      res.json(snippet);
    } else {
      res.status(404).json({ error: "Snippet not found" });
    }
  } catch (error) {
    console.error("Error fetching snippet:", error);
    res.status(500).json({ error: "Failed to fetch snippet" });
  }
});

export default router;
