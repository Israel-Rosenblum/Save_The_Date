//CRUD
const hallModel = require('./hall.modle')

async function create(data) {
    // console.log("🚀 ~ create ~ data", data)
    const result = await hallModel.create(data)
    return result;
}

async function read(filter = {}) {
    const test = await hallModel.find(filter)
    return test
}
async function update(userId, update) {
    const result = await hallModel.findOneAndUpdate(userId, update)
    console.log("🚀 ~ update ~ result", result.dates)
    return result;
}







module.exports = { create, read, update }