import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, markAsDone } from '../features/todo/todoSlice';

const Todo = () => {
    const todos = useSelector((state) => state.todos.todos);
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        const task = prompt("Enter a new task:");
        if (task) {
            dispatch(addTodo(task));
        }
    };

    const handleDeleteTodo = (id) => {
        dispatch(deleteTodo(id));
    };

    const handleMarkAsDone = (id) => {
        dispatch(markAsDone(id));
    };

    return (
        <div>
            <h2>Todos</h2>
            <hr/>
            <button onClick={handleAddTodo}>Add Todo</button>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span style={{ textDecoration: todo.isDone ? 'line-through' : 'none' }}>
                            {todo.task}
                        </span>
                        <button onClick={() => handleMarkAsDone(todo.id)}>Mark as Done</button>
                        <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todo;
