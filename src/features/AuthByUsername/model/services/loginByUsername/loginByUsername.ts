import { createAsyncThunk } from '@reduxjs/toolkit';
import i18n from 'shared/config/i18n/i18n';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import type { User } from 'entities/User';
import { userActions } from 'entities/User';
import type { ThunkConfig } from 'app/providers/StoreProvider';

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  ThunkConfig<string>
>('login/loginByUsername', async (authData, thunkAPI) => {
  try {
    const response = await thunkAPI.extra.api.post<User>('/login', authData);
    if (!response.data) {
      throw new Error();
    }
    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
    thunkAPI.dispatch(userActions.setAuthData(response.data));
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(
      i18n.t('Вы ввели неверный логин или пароль'),
    );
  }
});
