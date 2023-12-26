import type { AsyncThunkAction } from '@reduxjs/toolkit';
import axios, { AxiosStatic } from 'axios';
import type { StateSchema } from '@/app/providers/StoreProvider';

type ActionCreatorType<Return, Arg, Rejected> = (
  arg: Arg,
) => AsyncThunkAction<Return, Arg, { rejectValue: Rejected }>;

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

export class TestAsyncThunk<Return, Arg, Rejected> {
  dispatch: jest.MockedFn<any>;

  getState: () => StateSchema;

  actionCreator: ActionCreatorType<Return, Arg, Rejected>;

  api: jest.MockedFunctionDeep<AxiosStatic>;

  navigate: jest.MockedFn<any>;

  constructor(
    actionCreator: ActionCreatorType<Return, Arg, Rejected>,
    state?: DeepPartial<StateSchema>,
  ) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn(() => state as StateSchema);
    this.api = mockedAxios;
    this.navigate = jest.fn();
  }

  async callThunk(arg: Arg) {
    const action = this.actionCreator(arg);
    return action(this.dispatch, this.getState, {
      api: this.api,
      navigate: this.navigate,
    });
  }
}
