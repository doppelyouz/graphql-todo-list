const Todo = require('../models/todo');

module.exports = {
    async getTodos() {
        try {
            return await Todo.findAll();
        } catch(e) {
            throw new Error("Fetch todos is not variable");
        }
    },
    async createTodo({todo}) {
        try {
            return await Todo.create({
                title: todo.title,
                done: false
            })
        } catch(e) {
            throw new Error("Title is required");
        }
    },
    async completeTodo({id}) {
        try {
            const todo = await Todo.findByPk(id);
            todo.done = true;
            await todo.save();
            return todo;
        } catch(e) {
            throw new Error("ID is required");
        }
    },
    async deleteTodo({id}) {
        try {
            const todos = await Todo.findAll({
                where: {id}
            });
            await todos[0].destroy();
            return true;
        } catch(e) {
            throw new Error("ID is required");
            return false;
        }
    }
}