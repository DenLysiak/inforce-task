/* eslint-disable @typescript-eslint/indent */
import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { productsSlice } from './features/productsSlice';
import { modalSlice } from './features/modalSlice';

export const store = configureStore({
  reducer: {
    productsReducers: productsSlice.reducer,
    modalReducer: modalSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;