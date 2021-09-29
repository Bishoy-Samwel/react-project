import React, { useEffect } from 'react';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import './TodoList.css';
import { useSelector, shallowEqual } from 'react-redux';
import { loadTodos } from './thunks'
import { useDispatch } from 'react-redux';
import { selectCompletedTodos, selectInCompletedTodos, loading } from './selectors';

const TodoList = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(loading);
    const completedTodos = useSelector(selectCompletedTodos);
    const uncompletedTodos = useSelector(selectInCompletedTodos);

    useEffect( () => { dispatch(loadTodos()) }, []  );

    const loadingMessage = <div> Loading todos...</div>;
    const content = (todos) =>
    (<div className="list-wrapper">
        <NewTodoForm />
        {todos.map(todo => <TodoListItem key={todo.id} todo={todo} />)}
    </div>);
    if ((!isLoading)) {

        return <div>
            Uncompleted Todos
            {content(uncompletedTodos)}
            Completed todos
            {content(completedTodos)}
        </div>
    }
    else {
        return loadingMessage;
    }
}

export default TodoList;