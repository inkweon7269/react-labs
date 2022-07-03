import React from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../../store/Stores";
import TodoItem from "./TodoItem";
import dayjs from "dayjs";

const TodoList = () => {
    const { todo } = useStore();

    const onSelectedTodo = (data) => {
        todo.selectedTodo(data);
    };

    const onUpdateTodo = (data) => {
        const result = {
            title: `${data.title} 업데이트`,
            date: dayjs().format('YYYY-MM-DD')
        }
        todo.updateTodo(result);
    }

    const onDeleteTodo = () => {
        todo.deleteTodo();
    }

    return (
        <>
            <h1>선택된 항목 : {todo.todo.title}</h1>
            <ul>
                {todo.todos.map(item => (
                    <TodoItem
                        key={item.id}
                        item={item}
                        onSelectedTodo={onSelectedTodo}
                        onUpdateTodo={onUpdateTodo}
                        onDeleteTodo={onDeleteTodo}
                    />
                ))}
            </ul>
        </>
    );
};

export default observer(TodoList);