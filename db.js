const mongoose = require("mongoose");

function connectDB() {
    mongoose.connect('mongodb+srv://Shubhamdata:shubham45@cluster0.qkno2.mongodb.net/cars', { useUnifiedTopology: true, useNewUrlParser: true })

    const connection = mongoose.connection

    connection.on('connected', () => {
        console.log('Mongo DB Connection Successful')
    })

    connection.on('error', () => {
        console.log('Mongo DB Connection Error')
    })
}


connectDB()

module.exports = mongoose