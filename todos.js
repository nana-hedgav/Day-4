// todos.js
let todos = [];

const generateId = () => Date.now().toString();

const getTodos = () => todos;

const addTodo = (description, date) => {
    const newTodo = {
        id: generateId(),
        description,
        date,
        is_checked: false
    };
    todos.push(newTodo);
    return newTodo;
};

const updateTodo = (id, description, date) => {
    const todo = todos.find(todo => todo.id === id);
    if (todo) {
        todo.description = description || todo.description;
        todo.date = date || todo.date;
    }
    return todo;
};

const deleteTodo = (id) => {
    const index = todos.findIndex(todo => todo.id === id);
    if (index !== -1) {
        return todos.splice(index, 1)[0];
    }
    return null;
};

const toggleTodo = (id) => {
    const todo = todos.find(todo => todo.id === id);
    if (todo) {
        todo.is_checked = !todo.is_checked;
    }
    return todo;
};

module.exports = {
    getTodos,
    addTodo,
    updateTodo,
    deleteTodo,
    toggleTodo
};
