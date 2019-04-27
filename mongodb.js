const Mongoose = require('mongoose')

const MONGO_PATH = process.env.MONGO_PATH || '127.0.0.1'
const MONGO_PORT = process.env.MONGO_PORT || 27017

const mongoUri = `mongodb://${MONGO_PATH}:${MONGO_PORT}/hello`
const connection = Mongoose.createConnection(mongoUri, {useNewUrlParser: true}, () => {
    console.log('MongoDB is connected.')
})

exports.connection = connection
