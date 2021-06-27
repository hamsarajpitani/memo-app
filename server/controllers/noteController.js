const Note = require("../model/noteModel");

exports.getNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (e) {
    res.json(e);
  }
};

exports.createNote = async (req, res) => {
  try {
    // const noteObject = new Note(req.body);
    // const note = await noteObject.save();
    const note = await Note.create(req.body);
    res.json(note);
  } catch (e) {
    res.json(e);
  }
};

exports.updateNote = async (req, res) => {
  try {
    const _id = req.params.id;
    const note = await Note.findByIdAndUpdate(
      _id,
      { $set: req.body },
      { new: true }
    );
    res.json(note);
  } catch (error) {
    res.json(error.message);
  }
};

exports.deleteNote = async (req, res) => {
  try {
    const _id = req.params.id;
    const note = await Note.findByIdAndDelete(_id);
    res.json("deleted");
  } catch (error) { 
    console.log("ERROR", error.message);
  }
};
