const express = require("express");
const router = express.Router();
const books = require("../controllers/books");

router.post("/create", books.createBooks);
router.get("/", books.getBooks);
router.put("/update/:id", books.updatebooks);
router.delete("/delete/:id", books.deleteBooks);
router.get("/getsingleBook/:id", books.getById);

module.exports = router;
