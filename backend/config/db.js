const mongoose = require("mongoose")

const dbConnect = () =>{ 
    const dbName = 'GARAGE_DB'
    const dbUrl = `mongodb://localhost:27017/${dbName}`

    try {
        mongoose.connect(dbUrl)
        console.log(`connected to ${dbName} database`)
    } catch (err){
        console.log(err)
    }
}

module.exports = {
    dbConnect
}