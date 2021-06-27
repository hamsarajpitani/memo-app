const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const url = process.env.DB_URL;

const db = async () => {
  try {
    const mongo = await mongoose.connect(url, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });

    console.log("db connected succesfully");
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = db;
