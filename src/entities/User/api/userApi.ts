import { rtkApi } from '@/shared/api/rtkApi';
import { User } from '../model/types/user';

interface SetJsonSettingsArg {
  userId: string;
  payload: object;
}

const userApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    setJsonSettings: build.mutation<User, SetJsonSettingsArg>({
      query: ({ userId, payload }) => ({
        url: `/users/${userId}`,
        method: 'PATCH',
        body: payload,
      }),
    }),
  }),
});

/**
 * Позволяет вызывать методы RTK без хуков
 * dispatch(setJsonSettingsMutation(payload))
 */
export const setJsonSettingsMutation =
  userApi.endpoints.setJsonSettings.initiate;
