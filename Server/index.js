// index.js
const express = require('express');
const cors = require('cors');
const app = express();

require('./DL/db').connect();

app.use(express.json({ limit: "250mb" }));

app.use(cors());

const ownerRouter = require('./owner/owner.router');
const hallRouter = require('./hall/hall.router');

app.use('/owner', ownerRouter);
app.use('/hall', hallRouter);

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});

const uploadImage = require('./upload/upload.router')
app.use('/uploadImage', uploadImage);
//   app.post("/uploadImage", async (req, res) => {
//     try {
//       const url = await uploadImage.uploadImage(req.body.image);
//       res.send(url);
//     } catch (error) {
//       console.log(error.message + "/n" + error);
//       res.status(500).send({ error: error.message });
//     }
//   });

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Port: ${port}`));
