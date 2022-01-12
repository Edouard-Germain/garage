const express = require("express")
const app = express()
const port = 5000
const { dbConnect } = require("./config/db")
dbConnect()
app.use(express.json())


const carsRoutes = require("./routes/cars")

app.use('/cars', carsRoutes)
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
  })

