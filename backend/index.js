const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const Model = require("./Models/db");
const authRouter = require("./Routes/authRouter");
const protectRouter = require("./Routes/protectRouter");

app.use(bodyParser.json());
app.use(cors());

app.use("/api", authRouter);
app.use("/protect", protectRouter);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
