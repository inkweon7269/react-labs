import { action, computed, makeObservable, observable } from "mobx";

class TodoStore {
    constructor() {
        makeObservable(this, {
            _todo: observable,
            _todos: observable,
            setTodoProps: action,
            addTodo: action,
            selectedTodo: action,
            updateTodo: action,
            deleteTodo: action,
            todo: computed,
        });
    }

    _todo = {}; // id, title, date

    _todos = [];

    get todos() {
        return this._todos;
    }

    get todo() {
        return this._todo;
    }

    setTodoProps(name, value) {
        this._todo = {
            ...this._todo,
            [name]: value,
        };
    }

    addTodo(todo) {
        this._todos.push(todo);
    }

    selectedTodo(todo) {
        this._todo = todo;
    }

    updateTodo(data) {
        const foundTodo = this._todos.find(todo => todo.id === this._todo.id);
        foundTodo.title = data.title;
        foundTodo.date = data.date;

        this._todo = {};
    }

    deleteTodo() {
        const index = this._todos.findIndex(todo => todo.id === this._todo.id);
        if (index > -1) {
            this._todos.splice(index, 1);
        }

        this._todo = {};
    }
}

export default TodoStore;