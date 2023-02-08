const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors());

// DB Config
const db = require("./config/keys").mongoURI;

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch((err) => console.log(err));
const port = process.env.PORT || 3300;
app.listen(port, () => console.log(`The server has started on port: ${port}`));

app.use("/users", require("./routes/users"));
// app.use("/todos", require("./routes/todo"));
