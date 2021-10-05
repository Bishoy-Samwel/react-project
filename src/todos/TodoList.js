import React, { useEffect } from 'react';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import { useSelector } from 'react-redux';
import { loadTodos } from './thunks'
import { useDispatch } from 'react-redux';
import { selectCompletedTodos, selectInCompletedTodos, loading } from './selectors';
import styled from 'styled-components';

const ListWrapper= styled.div`
max-width: 700px;
    margin: auto;
    `

const TodoList = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(loading);
    const completedTodos = useSelector(selectCompletedTodos);
    const uncompletedTodos = useSelector(selectInCompletedTodos);

    useEffect( () => { dispatch(loadTodos()) }, []  );

    const loadingMessage = <div> Loading todos...</div>;
    const content = (todos) =>
    (<div>
        {todos.map(todo => <TodoListItem key={todo.id} todo={todo} />)}
    </div>);
    if ((!isLoading)) {

        return <ListWrapper>
            <NewTodoForm />
            <h3>Incomplet:</h3>
            {content(uncompletedTodos)}
            <h3>completed:</h3>
            {content(completedTodos)}
        </ListWrapper>
    }
    else {
        return loadingMessage;
    }
}

export default TodoList;