const Todo = require('../models/todo');

exports.getTodo = async (req, res) => {
   const todos = await Todo.find({})
   res.status(200).json({ todos })
};

exports.createTodo = async (req, res) => {
   const todo = await Todo.create(req.body)
    res.status(201).json({ todo })
};

exports.deleteTodo = async (req, res) => {
   const { id: todoID } = req.params
   const todo = await Todo.findOneAndDelete({ _id: todoID })
   if (!todo) {
       console.log(`No todo with id: ${todoID}`)
   }
   res.status(200).json({ todo })
}

exports.deleteCompletedTodo = (req, res) => {
   Todo.deleteMany({completed : req.body.deleteMany[0].completed},
       function(err) {
        if (err) {
            console.log(err);
        }
    });
}

exports.editTodo = async (req, res) => {
    const { id: todoID } = req.params
    const todo = await Todo.findOneAndUpdate({ _id: todoID}, req.body, {
        new : true,
    })
    if (!todo) {
        console.log(`No todo with id : ${todoID}`)
    }
    res.status(200).json({ todo })
}
