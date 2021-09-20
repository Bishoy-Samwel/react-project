import { loadTodosSuccess, loadTodosFailure, loadTodosInProgress, createTodo, removeTodo } from './actions';

export const loadTodos = () => (
  async (dispatch) => {
    try {
      dispatch(loadTodosInProgress());
      const response = await fetch('http://localhost:8080/todos');
      const todos = await response.json();

      dispatch(loadTodosSuccess(todos));
    } catch (e) {
      dispatch(loadTodosFailure());
      dispatch(displayAlert(e));
    }
  }
)

export const addTodoRequest = text => (
  async (dispatch) => {
    try {
    const body = JSON.stringify({ text });
    const response = await fetch('http://localhost:8080/todos', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'post',
      body,
    });
    const todo = await response.json();
    dispatch(createTodo(todo));
    } catch (error) {
      dispatch(displayAlert(error))
    }
  }
)

export const removeTodoRequest = id => (
  async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:8080/todos/${id}`, 
      {
        method: 'delete'
      } );
      const removedTodo = await response.json();
      dispatch(removeTodo(removedTodo));
    } catch (e){
     dispatch(displayAlert(e));
    }
  }
)

export const displayAlert = (text) => () => {
  alert(`${text}`);
}