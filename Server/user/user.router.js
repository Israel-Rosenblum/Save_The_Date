const express = require('express');
const router = express.Router();
const userService = require('./user.services')
const jwt = require('../jwt')

router.post('/', jwt.authenticateToken, async (req, res) => {
    try {
        let results = await userService.createUser(req.body.newUser)
        res.send(results)
    }
    catch (err) {
        res.status(err?.code ?? 400).send("isnot found")
    }
});

router.post('/id', async (req, res) => {
    try {
        let result = await userService.readById(req.body);
        res.send(result)

    } catch (err) {
        res.status(err?.code ?? 400).send("isnot found")
    }
});


router.post('/login', async (req, res) => {
    try {
        const token = jwt.createToken(req.body.UserLogin.email)
        let results = await userService.readUser(req.body.UserLogin)
        res.send({ results, token })
    }
    catch (err) {
        res.status(err?.code ?? 400).send("isnot found")
    }
})
module.exports = router
