const express = require("express");
const cors = require("cors");
const db = require("./config/db");

db();
const app = express();

//***MIDDLEWARE */
app.use(express.json({ limit: "30mb", extended: true }));
app.use(cors());

//*** ROUTES */
const noteRouter = require("./routes/noteRouters");
app.use("/api/notes", noteRouter);

const userRouter = require("./routes/userRouters");
app.use("/api/user",userRouter);

app.listen(4000, () => {
  console.log("sever is runnning");
});
