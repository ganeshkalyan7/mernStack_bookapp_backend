const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongo = require("./connect");
const router = require("./routes/booksRouter");
const cors = require("cors");
dotenv.config();
//middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router);

//connecting to db
mongo.connect();
app.get("/", (req, res) => {
  res.send("Hello World!");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port number ${PORT}`));

//
