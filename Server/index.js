// index.js
const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config()
const jwt = require('jsonwebtoken')
//connecting the Mongo
require('./DL/db').connect();

app.use(express.json({ limit: "250mb" }));
app.use(cors());

const userRouter = require('./user/user.router');
const hallRouter = require('./hall/hall.router');
const uploadImage = require('./upload/upload.router')

app.use('/user', userRouter);
app.use('/hall', hallRouter);

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});

app.use('/uploadImage', uploadImage);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Port: ${port}`));
