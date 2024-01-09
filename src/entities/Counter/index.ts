export type { CounterSchema } from './model/types/counterSchema';
export { Counter } from './ui/Counter';
export {
  counterReducer,
  useCounterActions,
  counterActions,
} from './model/slice/counterSlice';
