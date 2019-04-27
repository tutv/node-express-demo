const Todo = require('./models/Todo')

exports.list = async (req, res) => {
    const {page, limit} = req.query
    const p = page ? parseInt(page, 10) : 1
    const l = limit ? parseInt(limit, 10) : 10
    const skip = (p - 1) * l

    const todos = await Todo.find({})
        .skip(skip)
        .limit(l)
        .sort({
            created: -1
        })
        .lean()

    res.send(todos)
}

exports.create = async (req, res) => {
    const {title} = req.body

    if (!title) {
        return res.send({
            success: false,
            message: 'Title must be not empty.'
        })
    }

    try {
        const todo = new Todo({
            title: 'Hello'
        })

        const doc = await todo.save()

        return res.send({
            data: doc.toJSON(),
            success: true
        })
    } catch (e) {
        res.send({
            success: false,
            message: e.message,
        })
    }
}

exports.get = async (req, res) => {
    const {id} = req.params

    const todo = await Todo.findOne({_id: id}).lean()
    if (!todo) {
        return res.send({
            success: false,
            message: 'Todo not found.'
        })
    }

    res.send({
        data: todo,
        success: true,
    })

}

exports.delete = async (req, res) => {
    const {id} = req.params

    const todo = await Todo.findOne({_id: id}).lean()
    if (!todo) {
        return res.send({
            success: false,
            message: 'Todo not found.'
        })
    }

    await Todo.deleteOne({_id: id})

    res.send({
        success: true,
        data: true,
    })
}

exports.update = async (req, res) => {
    const {title} = req.body

    if (!title) {
        return res.send({
            success: false,
            message: 'Title must be not empty.'
        })
    }

    const {id} = req.params
    const todo = await Todo.findOne({_id: id}).lean()
    if (!todo) {
        return res.send({
            success: false,
            message: 'Todo not found.'
        })
    }

    try {
        await Todo.updateOne(
            {_id: id},
            {
                $set: {
                    title
                }
            }
        )

        res.send({
            success: true,
            data: true,
        })
    } catch (e) {
        res.send({
            success: false,
            message: e.message,
        })
    }
}

