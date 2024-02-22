const hallContoller = require('./hall.controller')

//validation
// hall.services.js

// validation
//יוצר אולם
async function createHall(data) {
    let result = await hallContoller.create(data);
    return result;
}

async function getHalls(data) {
    const arr = Object.values(data);
    const filter = { dates: { $in: data } };
    const results = await hallContoller.read(filter);
    // console.log("🚀 ~ getHalls ~ results", results)
    return results;
}





module.exports = { createHall, getHalls };




