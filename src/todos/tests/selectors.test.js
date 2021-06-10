import { expect } from 'chai';
import { getCompletedTodos } from '../selectors';

describe('The getCompletedTodo selector', () => {
  it('Returns only completed todos', () => {
    const fakeTodos = [
      {
        text: 'Hello',
        isCompleted: true,
      },
      {
        text: 'Say goodbye',
        isCompleted: false,
      },
      {
        text: 'Climb mount everest',
        isCompleted: false,
      },
    ];
    const expected = [
      {
        text: 'Hello',
        isCompleted: true,
      },
    ];
    const actual = getCompletedTodos.resultFunc(fakeTodos);
    expect(actual).deep.equal(expected);
  });
});
