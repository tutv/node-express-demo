const express = require('express')
const bodyParser = require('body-parser')


const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.send('Hello, world!')
})

const todo = require('./todo')
app.post('/todos', todo.create)
app.get('/todos/:id', todo.get)
app.post('/todos/:id', todo.update)
app.delete('/todos/:id', todo.delete)

app.listen(3000, () => {
    console.log('App is listening on port 3000...')
})
