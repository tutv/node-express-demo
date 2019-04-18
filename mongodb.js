const Mongoose = require('mongoose')

const MONGO_PATH = process.env.MONGO_PATH || 'localhost'
const MONGO_PORT = process.env.MONGO_PORT || 27017

const mongoUri = `mongodb://${MONGO_PATH}:${MONGO_PORT}/hello`
const connection = Mongoose.createConnection(mongoUri, {useNewUrlParser: true})

exports.connection = connection
