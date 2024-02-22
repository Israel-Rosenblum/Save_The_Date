const express = require('express');
const router = express.Router();

const uploadImage=require('./upload.controller')


router.post("/", async (req, res) => {
    try {
      const url = await uploadImage.uploadImage(req.body.image);
      res.send(url);
    } catch (error) {
      console.log(error.message + "/n" + error);
      res.status(500).send({ error: error.message });
    }
  });

  module.exports = router