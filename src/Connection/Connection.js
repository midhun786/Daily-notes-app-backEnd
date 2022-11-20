//Required And connections;
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
mongoose
  .connect(
    process.env.DB_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("DB Connected Done");
  })
  .catch((error) => {
    console.log(error);
  });
