const {
  getNotes,
  createNote,
  updateNote,
  deleteNote,
} = require("../controllers/noteController");
const { auth } = require("../middlewares/auth.js");

const router = require("express").Router();
router.route("/").get(getNotes).post(createNote);
router.route("/:id").patch(updateNote).delete(deleteNote);

module.exports = router;
