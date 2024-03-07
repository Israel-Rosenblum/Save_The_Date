const userContoller = require('./user.controller')
const hallContoller = require('../hall/hall.controller')


//validation
async function createUser(data) {
    let result = await userContoller.create(data)
    return result
}


async function readUser(data) {
    const filter = {
        $and: [{ password: { $eq: data.password } },
        { email: { $eq: data.email } }]
    }
    let result = await userContoller.readOne(filter)
    return result
}

async function readById(data) {
    const filter = { userId: data.id }
    let result = await hallContoller.read(filter)
    console.log(result);
    return result;
}

module.exports = {  createUser,  readUser, readById }