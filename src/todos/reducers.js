import { CREATE_TODO, REMOVE_TODO, CHECK_STATUS } from './actions'
import { v4 as uuidv4 } from 'uuid';
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

    default:
      return state;
  }
}