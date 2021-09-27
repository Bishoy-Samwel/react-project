import { createStore, applyMiddleware , combineReducers } from 'redux';
import { todos, isLoading } from './todos/reducers'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  todos,
});

export const configureStore = () => createStore(
  rootReducer, 
  composeWithDevTools(applyMiddleware(thunk)));