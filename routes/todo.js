const express = require('express');
const todoController = require('../controllers/todo');

const router = express.Router();

router.get('/', todoController.getTodo);
router.post('/todo', todoController.createTodo);
router.delete('/todo/:id', todoController.deleteTodo);
router.put('/todo/:id', todoController.editTodo);

module.exports = router;