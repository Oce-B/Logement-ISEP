const mongoose = require("mongoose");

const uri =
  "mongodb+srv://oceanebrf:Itsgonnabeokay1!@firsttest.cly7mf1.mongodb.net/ISEPLogement";

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB Logement database");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

module.exports = mongoose;
