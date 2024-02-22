const mongoose = require('mongoose')

const URL_MONGO = "mongodb+srv://Ysrael:3505@cluster0.x3wvc1i.mongodb.net/";

async function connect() {

    try {
        mongoose.connect(URL_MONGO)
            .then(() => console.log("DB is connect"))
    }
    catch (err) {
        console.log("DB Error :", err);
    }

}

module.exports = { connect }