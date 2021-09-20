import React, { useEffect } from 'react';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import './TodoList.css';
import { useSelector, shallowEqual } from 'react-redux';
import { loadTodos, displayAlert } from './thunks'
import { useDispatch } from 'react-redux';


const TodoList = () => {
    const dispatch = useDispatch();
    useEffect(
        () => { dispatch(loadTodos()) }, []);
    const isLoading = useSelector((state) => state.isLoading, shallowEqual);
    const todos = useSelector((state) => state.todos, shallowEqual);

    const loadingMessage = <div> Loading todos...</div>;
    const content = (todos) =>
    (<div className="list-wrapper">
        <NewTodoForm />
        {todos.map(todo => <TodoListItem todo={todo} />)}
    </div>);
    if (Array.isArray(isLoading)) {
        return content(isLoading)
    }
    else {
        return loadingMessage;
    }
}

export default TodoList;