const express = require('express');
const router = express.Router();
const userService = require('./user.services')
const jwt = require('../jwt')

router.post('/create', async (req, res) => {
    try {
        // if (req.user === PERMISSION_PASSWORD) {
        // }
       
        let results = await userService.createUser(req.body.newUser)
        res.send(results)
    }
    catch (err) {
        res.status(err?.code ?? 400).send("isnot found")
    }
});

router.post('/update', jwt.authenticateToken, async (req, res) => {
    try {
        let results = await userService.updateByEmail(req.token.email, req.body)
        console.log(results);
        res.send(results)
    }
    catch (err) {
        res.status(err?.code ?? 400).send("isnot found")
    }
});

router.post('/id', async (req, res) => {
    try {
        let result = await userService.readById(req.body);
        console.log("🚀 ~ router.post ~ result", result)
        res.send(result)

    } catch (err) {
        res.status(err?.code ?? 400).send("isnot found")
    }
});


router.post('/login', async (req, res) => {
    try {
        const token = jwt.createToken(req.body.UserLogin.email)
        let results = await userService.readUser(req.body.UserLogin)
        console.log("🚀 ~ router.post ~ results", results)
        res.send({ results, token })
    }
    catch (err) {
        res.status(err?.code ?? 400).send("isnot found")
    }
})
module.exports = router
