import type { PayloadAction } from '@reduxjs/toolkit';
import type { CounterSchema } from '../types/counterSchema';
import { buildSlice } from '@/shared/lib/store';

const initialState: CounterSchema = { value: 0 };

const counterSlice = buildSlice({
  name: 'counter',
  initialState,
  reducers: {
    add(state, { payload }: PayloadAction<number>) {
      state.value += payload;
    },
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    incrementByAmount(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
  },
});

export const {
  reducer: counterReducer,
  useActions: useCounterActions,
  actions: counterActions,
} = counterSlice;
