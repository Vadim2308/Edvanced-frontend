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
import type { ArticleDetailsSchema } from 'entities/Article';
import type { ArticleDetailsCommentsSchema } from 'pages/ArticleDetailsPage';
import { AddCommentFormSchema } from 'features/addCommentForm';
import { ArticlesPageSchema } from 'pages/ArticlesPage';
import { UISchema } from 'features/UI';

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  ui: UISchema;
  // Асинхронные редьюсеры
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
  articleDetails?: ArticleDetailsSchema;
  articleDetailsComments?: ArticleDetailsCommentsSchema;
  addCommentForm?: AddCommentFormSchema;
  articlesPage?: ArticlesPageSchema;
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
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
