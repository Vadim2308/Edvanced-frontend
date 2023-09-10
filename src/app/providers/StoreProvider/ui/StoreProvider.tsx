import type { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider/config/store';
import type { DeepPartial } from '@reduxjs/toolkit';
import type { StateSchema } from '../config/StateSchema';

interface StoreProviderProps {
  children?: ReactNode;
  initialState?: DeepPartial<StateSchema>; // Для тестов
}

export const StoreProvider = (props: StoreProviderProps) => {
  const { children, initialState } = props;
  const store = createReduxStore(initialState as StateSchema);
  return <Provider store={store}>{children}</Provider>;
};
