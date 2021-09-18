import React, { useState } from 'react';
import './NewTodoForm.css';
import { useDispatch } from 'react-redux';
import { createTodo } from './actions'

const NewTodoForm = () => {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();
    return (
        <div className="new-todo-form">
            <input
                className="new-todo-input"
                type="text"
                placeholder="Type your new todo here"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)} />
            <button
                onClick={
                    () => {
                        dispatch(createTodo(inputValue));
                        setInputValue('');
                    }}
                className="new-todo-button">
                Create Todo
            </button>
        </div >
    );
};

export default NewTodoForm;