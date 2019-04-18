const {Schema} = require('mongoose')
const {connection} = require('../mongodb')

const TodoSchema = new Schema({
    title: {
        type: String,
    },

    created: {
        type: String,
        default: Date.now,
    }
})

module.exports = connection.model('Todo', TodoSchema)
