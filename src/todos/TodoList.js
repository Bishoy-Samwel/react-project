import React from 'react';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import './TodoList.css';
import { useSelector, shallowEqual } from 'react-redux';

const TodoList = () => {
    const todos = useSelector((state) => state.todos, shallowEqual);
    return (
        <div className="list-wrapper">
            <NewTodoForm />
            {console.log(todos)}
            {todos.map(todo => <TodoListItem todo={todo} />)}
        </div>
    );
}

export default TodoList;