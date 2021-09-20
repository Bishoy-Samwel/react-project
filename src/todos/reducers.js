import {
  CREATE_TODO,
  REMOVE_TODO,
  CHECK_STATUS,
  LOAD_TODOS_IN_PROGRESS,
  LOAD_TODOS_SUCCESS,
  LOAD_TODOS_FAILURE
} from './actions'
import { v4 as uuidv4 } from 'uuid';


export const isLoading = (state = false, action) => {
  const { type } = action;

  switch (type) {
    case LOAD_TODOS_IN_PROGRESS:
      return true;
    case LOAD_TODOS_SUCCESS:
    case LOAD_TODOS_FAILURE:
      return false;
    default:
      return state;
  }
}

export const todos = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TODO: {
      const { text } = payload;
      const newTodo = {
        id: uuidv4(),
        text,
        isCompleted: false,
      };
      return state.concat(newTodo);
    }

    case REMOVE_TODO: {
      const { id } = payload;
      return state.filter(todo => todo.id !== id);
    }

    case CHECK_STATUS: {
      console.log('hi');
      const { id } = payload;
      return state.map(todo => {
        if (todo.id === id) { return { ...todo, isCompleted: true } }
        return todo
      });

    }
    case LOAD_TODOS_SUCCESS: { 
      console.log(todos); 
      const { todos } = payload;
      return todos;
    }
    case LOAD_TODOS_IN_PROGRESS:
    case LOAD_TODOS_FAILURE:
    default:
      return state;
  }
}