import React from 'react';
import './TodoListItem.css';
import { useDispatch } from 'react-redux';
import { removeTodo, checkStatus } from './actions'

const TodoListItem = ({ todo }) => {
    const dispatch = useDispatch();
    return (
        <div className="todo-item-container">
            <h3>{todo.text}</h3>
            <div className="buttons-container">
            {todo.isCompleted? null:
                <button onClick={
                    () => {
                        dispatch(checkStatus(todo.id));
                        console.log(todo.isCompleted);
                    }}
                    className="completed-button">Mark As Completed</button>}
                <button
                    onClick={
                        () => {
                            dispatch(removeTodo(todo.id));
                        }}
                    className="remove-button">Remove</button>
            </div>
        </div>
    );
}



export default TodoListItem;