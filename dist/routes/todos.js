"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let todos = [];
const router = (0, express_1.Router)();
router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post('/todo', (req, res, next) => {
    const body = req.body;
    const newTodo = {
        id: new Date().toISOString(),
        text: body.text
    };
    todos.push(newTodo);
    res.status(201).json({ message: 'Added todo', todo: newTodo, todos: todos });
});
router.put('/todo/:todoId', (req, res, next) => {
    const params = req.params;
    const tid = params.todoId;
    const body = req.body;
    const todoIndex = todos.findIndex(t => t.id === tid);
    if (todoIndex >= 0) {
        todos[todoIndex] = { id: todos[todoIndex].id, text: body.text };
        return res.status(200).json({ message: 'Updated todo', todos: todos });
    }
    res.status(404).json({ message: 'Could not fine todo for this id.' });
});
router.delete('/todo/:todoId', (req, res, next) => {
    const params = req.params;
    const tid = params.todoId;
    todos = todos.filter(t => t.id !== tid);
    res.status(200).json({ message: 'Todo deleted', todos: todos });
});
exports.default = router;
