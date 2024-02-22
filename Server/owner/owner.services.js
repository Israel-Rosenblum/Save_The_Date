const ownerContoller = require('./owner.controller')
const hallContoller = require('../hall/hall.controller')


//validation
async function createOwner(data) {
    let result = await ownerContoller.create(data)
    return result
}


async function readOwner(data) {
    const filter = {
        $and: [{ password: { $eq: data.password } },
        { email: { $eq: data.email } }]
    }
    let result = await ownerContoller.readOne(filter)
    return result
}

async function readById(data) {
    const filter = { userId: data.id }
    let result = await hallContoller.read(filter)
    console.log(result);
    return result;
}

module.exports = { createOwner, readOwner, readById }