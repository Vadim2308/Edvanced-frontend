import { counterActions, counterReducer } from '../slice/counterSlice';
import type { CounterSchema } from '../types/counterSchema';

describe('counterSlice.test', () => {
  test('test decrement action', () => {
    const state: CounterSchema = { value: 10 };
    expect(
      counterReducer(state as CounterSchema, counterActions.decrement()),
    ).toEqual({ value: 9 });
  });
  test('test increment action', () => {
    const state: CounterSchema = { value: 10 };
    expect(
      counterReducer(state as CounterSchema, counterActions.increment()),
    ).toEqual({ value: 11 });
  });
  test('should work with empty state', () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({
      value: 1,
    });
  });
});
