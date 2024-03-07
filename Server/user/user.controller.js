//CRUD
const userModel = require('./user.model')

async function create(data) {
    const result = await userModel.create(data)
    return result;
}

async function readOne(filter = {}) {
    return await userModel.findOne(filter)
}

async function read(filter = {}) {
    return await userModel.find(filter)
}


module.exports = { create, readOne, read }