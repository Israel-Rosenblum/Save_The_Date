
const express = require('express');
const router = express.Router();

const ownerService = require('./owner.services')

router.post('/', async (req, res) => {
    try {
        let results = await ownerService.createOwner(req.body.newOwner)
        res.send(results)
    }
    catch (err) {
        res.status(err?.code ?? 400).send("isnot found")
    }
});

router.post('/id', async (req, res) => {
    try {
        let result = await ownerService.readById(req.body);
        res.send(result)

    } catch (err) {
        res.status(err?.code ?? 400).send("isnot found")
    }
});


router.post('/login', async (req, res) => {
    // console.log(req.body);
    try {
        let results = await ownerService.readOwner(req.body.checkOwner)
        // console.log(results);
        res.send(results)
    }
    catch (err) {
        res.status(err?.code ?? 400).send("isnot found")
    }
})
module.exports = router
