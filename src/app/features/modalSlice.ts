import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  isOpened: false,
}

export const modalSlice = createSlice({
  name: 'window',
  initialState,
  reducers: {
    setIsOpened: (state, action: PayloadAction<boolean>) => ({ isOpened: action.payload})
  },
})

export const { setIsOpened } = modalSlice.actions;