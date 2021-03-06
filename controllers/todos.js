const Todo = require('../models/Todo');

// @desc Get all todos
// @route GET /api/v1/todo
// @access Public
exports.getTodos = async (req, res, next) => {
    try {
        const todos = await Todo.find();
        return res.status(200).json({
            success: true,
            count: todos.length,
            data: todos
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

// @desc Add todo
// @route POST /api/v1/
// @access Public
exports.addTodo = async (req, res, next) => {
    try {
        console.log('req', req.body);
        const todo = await Todo.create(req.body);

        return res.status(201).json({
            success: true,
            data: todo
        });
    } catch (err) {
        if (err.name === 'ValidationError') {
            const messages = Object.values(err.errors).map(val => val.message);

            return res.status(400).json({
                success: false,
                error: messages
            });
        } else {
            return res.status(500).json({
                success: false,
                error: err
            });
        }
    }
}

// @desc Delete todo
// @route DELETE /api/v1/todos/:id
// @access Public
exports.deleteTodo = async (req, res, next) => {
    try {
        const todo = await Todo.findById(req.params.id);

        if (!todo) {
            return res.status(404).json({
                success: false,
                error: 'No todo found'
            });
        }

        await todo.remove();

        return res.status(200).json({
            success: true,
            data: {}
        });

    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

// @desc Check todo
// @route PUT /api/v1/todos/:id
// @access Public
exports.checkTodo = async (req, res, next) => {
    try {
        const todo = await Todo.findById(req.params.id);
        await todo.updateOne(req.body)
    
        return res.status(201).json({
            success: true,
            data: todo
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}
