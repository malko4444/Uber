const express = require("express");
const { createTodo, userTodo, updateTodo, deleteTodo } = require("../controller/todoController");

const todos = express.Router();
todos.post('/create',createTodo)
todos.get('/getAll',userTodo)
todos.put('/update',updateTodo)
todos.delete('/delete',deleteTodo)



module.exports = todos;