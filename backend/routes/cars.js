const express = require("express")
const Car = require("../models/car")
const app = express()

app.post('/', async(req,res)=>{
    console.log(req.body)
    const car = new Car({
        ...req.body
    })
    car.save((err, car)=>{
        if (err){
            res.status(500).json({error : err})
            console.log(err)
            return
        }
        res.json(car)
    })
})

app.get('/', async(req,res)=>{
    try {
        const cars = await Car.find({}).exec()
        res.json(cars)
    } catch (err){
        res.status(500).json({error : err})
    }
})
module.exports = app