const mongoose = require("mongoose");

const notesSchema = mongoose.Schema(
  {
    title: String,
    note: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("notes", notesSchema);
