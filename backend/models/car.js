const mongoose = require("mongoose")

const carsSchema = new mongoose.Schema({
    model : {
        type : String
    },
    type : {
        type : String
    },
    maxSpeed : {
        type : Number
    },
    garage_id : {
        type : String
    },
    serialnumber : {
        type : String,
    },
    owner : {
        type : String
    }
},{
    timestamps : true
})

const Car = mongoose.model('Car', carsSchema)

module.exports = Car