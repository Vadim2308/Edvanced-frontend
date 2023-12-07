import { FC, ReactElement, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import type {
  ReduxStoreWithManager,
  StateSchema,
} from 'app/providers/StoreProvider';
import type { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import type { Reducer } from '@reduxjs/toolkit';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>;
};

type ReducersListEntry = [StateSchemaKey, Reducer];

interface DynamicModuleLoaderProps {
  reducers: ReducersList;
  children: ReactElement;
  removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
  const { children, reducers, removeAfterUnmount = true } = props;
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useDispatch();
  useEffect(() => {
    (Object.entries(reducers) as ReducersListEntry[]).forEach(
      ([name, reducer]) => {
        store.reducerManager.add(name, reducer);
        dispatch({ type: `@INIT ${name} reducer` });
      },
    );
    return () => {
      if (removeAfterUnmount) {
        (Object.entries(reducers) as ReducersListEntry[]).forEach(([name]) => {
          store.reducerManager.remove(name);
          dispatch({ type: `@DESTROY ${name} reducer` });
        });
      }
    };
    // eslint-disable-next-line
  }, []);
  return children;
};
