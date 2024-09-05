// index.js
const express = require('express');
const bodyParser = require('body-parser');
const { getTodos, addTodo, updateTodo, deleteTodo, toggleTodo } = require('./todos');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Rute untuk menampilkan semua todo
app.get('/todos', (req, res) => {
    res.json(getTodos());
});

// Rute untuk membuat todo baru
app.post('/todos', (req, res) => {
    const { description, date } = req.body;
    if (!description || !date) {
        return res.status(400).json({ error: 'Description and date are required' });
    }
    const newTodo = addTodo(description, date);
    res.status(201).json(newTodo);
});

// Rute untuk mengupdate todo berdasarkan id
app.put('/todos/:id', (req, res) => {
    const { id } = req.params;
    const { description, date } = req.body;
    if (!description && !date) {
        return res.status(400).json({ error: 'Description or date must be provided' });
    }
    const updatedTodo = updateTodo(id, description, date);
    if (updatedTodo) {
        res.json(updatedTodo);
    } else {
        res.status(404).json({ error: 'Todo not found' });
    }
});

// Rute untuk menghapus todo berdasarkan id
app.delete('/todos/:id', (req, res) => {
    const { id } = req.params;
    const deletedTodo = deleteTodo(id);
    if (deletedTodo) {
        res.json(deletedTodo);
    } else {
        res.status(404).json({ error: 'Todo not found' });
    }
});

// Rute untuk mengubah status is_checked todo
app.patch('/todos/:id/toggle', (req, res) => {
    const { id } = req.params;
    const toggledTodo = toggleTodo(id);
    if (toggledTodo) {
        res.json(toggledTodo);
    } else {
        res.status(404).json({ error: 'Todo not found' });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:3000`);
});
