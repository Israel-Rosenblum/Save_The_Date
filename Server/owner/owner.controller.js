//CRUD
const ownerModel = require('./owner.model')

async function create(data) {
    const result = await ownerModel.create(data)
    return result;
}

async function readOne(filter = {}) {
    return await ownerModel.findOne(filter)
}

async function read(filter = {}) {
    return await ownerModel.find(filter)
}


module.exports = { create, readOne, read }