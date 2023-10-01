import type { LoginSchema } from 'features/AuthByUsername';
import type { CounterSchema } from 'entities/Counter';
import type { UserSchema } from 'entities/User';
import type {
  AnyAction,
  CombinedState,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit';
import type { ProfileSchema } from 'entities/Profile';
import type { AxiosInstance } from 'axios';
import type { NavigateFunction } from 'react-router/dist/lib/hooks';
import type { ArticleDetailsSchema } from 'entities/Article';

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  // Асинхронные редьюсеры
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
  articleDetails?: ArticleDetailsSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReduceManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReduceManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
  navigate?: NavigateFunction;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
