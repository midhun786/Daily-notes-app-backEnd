const express = require('express');
const app = express();
var cors = require('cors');
require('./src/Connection/Connection')
const noteRouter= require('./src/Routes/noteRouter');
const userRouter = require('./src/Routes/userRouter')

//Middleware;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: 'https://verdant-platypus-2a93fa.netlify.app'
  }));

//Routes;
app.use("/users", userRouter);
app.use("/api/notes", noteRouter);




//Port Listing;
const PORT = 5000;
app.listen(process.env.PORT || PORT, () => {
    console.log('Port is Running on ' + PORT);
});