import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import type { Profile, ProfileSchema } from '../types/profile';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

const initialState: ProfileSchema = {
  readonly: true,
  isLoading: false,
  error: undefined,
  data: undefined,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setReadonly: (state, action: PayloadAction<boolean>) => {
      state.readonly = action.payload;
    },
    cancelEdit: (state) => {
      state.readonly = true;
      state.form = state.data;
    },
    updateProfile: (state, action: PayloadAction<Profile>) => {
      state.form = {
        ...state.form,
        ...action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProfileData.pending, (state) => {
      state.error = undefined;
      state.isLoading = true;
    });
    builder.addCase(fetchProfileData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.form = action.payload;
    });
    builder.addCase(fetchProfileData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(updateProfileData.pending, (state) => {
      state.error = undefined;
      state.isLoading = true;
    });
    builder.addCase(updateProfileData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.form = action.payload;
      state.readonly = true;
    });
    builder.addCase(updateProfileData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
