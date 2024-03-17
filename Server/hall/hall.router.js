
const express = require('express');
const router = express.Router();

const hallService = require('./hall.services');
const jwt = require('../jwt')
require('dotenv').config()

router.post('/createHall', jwt.authenticateToken, async (req, res) => {
    try {
        if (req.token.email !== process.env.PERMISSION_PASSWORD) {
            res.sendStatus(403);
        }
        let results = await hallService.createHall(req.body.newHall)
        res.send(results)
    }
    catch (err) {
        res.status(err?.code ?? 400).send(err?.msg)
    }
})
router.post('/search', async (req, res) => {
    // console.log(req.body.selectedDates,1);
    try {
        let results = await hallService.getHalls(req.body.selectedDates)
        // console.log(results, "router");
        res.send(results)
    }
    catch (err) {
        res.status(400).send("isnot found")
    }
})


module.exports = router
