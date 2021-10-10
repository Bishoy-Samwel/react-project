import { expect } from 'chai';
import { selectCompletedTodos } from '../todos/selectors';

describe('The getCompletedTodos selectors', ()=> {
  it('Returns only Completed todos', ()=> {
    const fakeTodos = [
      {
        test: 'Task1',
        isCompleted: true,
      },
      {
        test: 'Task2',
        isCompleted: true,
      }, 
      {
        test: 'Task3',
        isCompleted: false,
      },
    ];
    const expected = [{
      test: 'Task1',
      isCompleted: true,
    },
    {
      test: 'Task2',
      isCompleted: true,
    }];
    const actual = selectCompletedTodos.resultFunc(fakeTodos);
    expect(actual).to.deep.equal(expected)
  })
})