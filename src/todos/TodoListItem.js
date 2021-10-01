import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { markCompletedRequest, removeTodoRequest } from './thunks';

const TodoItemContainer = styled.div`    background: #fff;
    border-radius: 8px;
    margin-top: 8px;
    padding: 16px;
    position: relative;
    box-shadow: 0 4px 8px grey;
    `
const ButtonsContainer = styled.div`
position: absolute;
right: 12px;
bottom: 12px;`;

const Complete = styled.button`
font-size: 16px;
padding: 8px;
border: none;
border-radius: 8px;
outline: none;
cursor: pointer;
display: inline-block;
background-color: #22ee22;`;

const Remove = styled.button`
font-size: 16px;
padding: 8px;
border: none;
border-radius: 8px;
outline: none;
cursor: pointer;
display: inline-block;
background-color: #ee2222;
margin-left: 8px;`;

const TodoListItem = ({ todo }) => {
    const dispatch = useDispatch();
    return (
        <TodoItemContainer>
            <h3>{todo.text}</h3>
            <ButtonsContainer>
                {todo.isCompleted ? null :
                    <Complete onClick={
                        () => {
                            dispatch(markCompletedRequest(todo.id));
                        }}
                        >Mark As Completed</Complete>}
                <Remove
                    onClick={
                        () => {
                            dispatch(removeTodoRequest(todo.id));
                        }}
                    >Remove</Remove>
            </ButtonsContainer>
        </TodoItemContainer>
    );
}



export default TodoListItem;