import { expect } from 'chai';
import { todos } from '../reducers';

describe('The todos reducer', () => {
  it('Add a new todo when CREATE_TODO actions is received', () => {
    //   Fake current state and fake action needs to be passed here
    const fakeTodo = { text: 'Hello', isCompleted: false };
    const fakeAction = { type: 'CREATE_TODO', payload: { todo: fakeTodo } };
    const originalState = { isLoading: false, data: [] };
    const expected = { isLoading: false, data: [fakeTodo] };
    const actual = todos(originalState, fakeAction);
    expect(actual).to.deep.equal(expected);
  });
});
