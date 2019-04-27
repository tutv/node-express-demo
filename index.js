const express = require('express')
const bodyParser = require('body-parser')
const errorHandler = require('errorhandler')

const app = express()

app.use(errorHandler())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.send('Hello, world!')
})

const todo = require('./todo')
app.get('/todos', todo.list)
app.post('/todos', todo.create)
app.get('/todos/:id', todo.get)
app.post('/todos/:id', todo.update)
app.delete('/todos/:id', todo.delete)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}...`)
})
