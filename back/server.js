// server.js
const express = require("express");
const bodyParser = require("body-parser");
const chatRoutes = require("./chatRoutes");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());
app.use("/api", chatRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
