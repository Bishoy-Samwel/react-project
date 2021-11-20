import (node-fetch);
const fetchMock = require('fetch-mock');
import sinon from 'sinon';
import  expect  from 'chai';
import { loadTodos } from '../todos/thunks';

describe('The loadTodos thunk', ()=>{
  it('Dispatches the correct actions in the success scenario', async () =>{
    const fakeDispatch = sinon.spy();

    const fakeTodos = [ {text: '1'}, {text: '2'}]
    fetchMock.get('http://localhost:8080/todos', fakeTodos)
    const expectedFirstAction = { 
      type: 'LOAD_TODOS_IN_PROGRESS'
    };
    const expectedSecondAction = {
      type: 'LOAD_TODOS_SUCCESS',
      payload: {todos: fakeTodos,
      },
    };

    await loadTodos()(fakeDispatch);
    expect(fakeDispatch.getCall(0).get[0]).to.deep.equal(expectedFirstAction);
    expect(fakeDispatch.getCall(1).get[0]).to.deep.equal(expectedSecondAction);
    fetchMock.reset();
  })
})