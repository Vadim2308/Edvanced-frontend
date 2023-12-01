import { StateSchema } from 'app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';

export const getUIScroll = (state: StateSchema) => state.ui.scroll;

export const getUIScrollByPath = createSelector(
  getUIScroll,
  (scroll) => (path: string) => scroll[path] || 0,
);
