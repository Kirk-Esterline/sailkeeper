// Establish connection to MongoDB Database with Mongoose

const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`MongoDB Connected: ${connect.connection.host}`)
    } catch(err) {
        console.error(err)
        process.exit(1)
    }
}

module.exports = connectDB