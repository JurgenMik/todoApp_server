const Todo = require('../models/todo');

exports.getTodo = (req, res) => {
    const todos = Todo.find()
        .then(todos => {
            res.json({todos});
        })
        .catch(err => console.log(err));
};

exports.createTodo = (req, res) => {
    const todo = new Todo(req.body);
    todo.save().then(result => {
        res.json({
            todo: result
        });
    });
};

exports.deleteTodo = (req, res) => {
    Todo.findByIdAndRemove({_id: req.params.id}, function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Deleted document");
        }
    });
}

exports.editTodo = (req, res) => {
    Todo.findByIdAndUpdate({_id: req.params.id},
        {completed: req.body.completed},
        {new: true})
        .exec()
        .then((response) => {
            res.json({
                editedTodo: response
            });
        });
}