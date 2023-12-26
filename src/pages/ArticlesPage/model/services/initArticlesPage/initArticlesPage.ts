import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getArticlesPageState } from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slices/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<
  void,
  URLSearchParams,
  ThunkConfig<string>
>('articlesPage/initArticlesPage', async (searchParams, thunkApi) => {
  const { getState, dispatch } = thunkApi;
  const state = getState();
  const articlesPageState = getArticlesPageState(state)!;

  const queries: Record<string, string> = {};

  searchParams.forEach((value, key) => {
    if (key in articlesPageState) {
      queries[key] = value;
    }
  });
  dispatch(articlesPageActions.partialUpdateState(queries));
  dispatch(articlesPageActions.initState());
  dispatch(fetchArticlesList({}));
});
