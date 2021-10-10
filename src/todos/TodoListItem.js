import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { markCompletedRequest, removeTodoRequest } from './thunks';

const TodoItemContainer = styled.div` 
    background: #fff;
    border-radius: 8px;
    margin-top: 8px;
    padding: 16px;
    position: relative;
    box-shadow: 0 4px 8px grey;
    `
const getBorderStyleForDate = (start, current) =>
(new Date(start) > new Date(current - 8640000 * 5) ?
    'none' : '2px solid red');

const TododoItemContainerWarning = styled(TodoItemContainer)`
    border-bottom: ${props => getBorderStyleForDate(props.createdAt, Date.now())}; `

const ButtonsContainer = styled.div`
position: absolute;
right: 12px;
bottom: 12px;
`;

const Button = styled.button`
font-size: 16px;
padding: 8px;
border: none;
border-radius: 8px;
outline: none;
cursor: pointer;
display: inline-block;
`

const Complete = styled(Button)`
background-color: #22ee22;
`;

const Remove = styled(Button)`
background-color: #ee2222;
margin-left: 8px;
`;

const TodoListItem = ({ todo }) => {
    const dispatch = useDispatch();
    const Container = todo.isCompleted ? TodoItemContainer : TododoItemContainerWarning
    return (
        <Container createdAt={todo.createdAt}>
            <h3>{todo.text}</h3>
            <p>
                Created at:&nbsp; &nbsp; &nbsp;
                <b>{(new Date(todo.createdAt)).toLocaleDateString()}</b>
            </p>
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
        </Container>
    );
}



export default TodoListItem;