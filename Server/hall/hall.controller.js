//CRUD
const hallModel = require('./hall.modle')

async function create(data) {
    console.log("🚀 ~ create ~ data", data)
    const result = await hallModel.create(data)
    return result;
}

async function read(filter = {}) {
   const test= await hallModel.find(filter)
//    console.log("🚀 ~ read ~ test", test)
  
    return test
}


module.exports = { create, read }