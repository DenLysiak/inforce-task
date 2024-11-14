import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductDetails } from "../../types/types";
import { getProducts } from "../../api/getProducts";

const initialState = {
  products: [] as ProductDetails[],
  isLoadingProducts: false,
  isError: false,
}

export const loadProducts = createAsyncThunk('load/products', () => getProducts());

export const productsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    setNewProducts: (state, action: PayloadAction<ProductDetails>) => {
      const newList = [...state.products, action.payload];

      return { ...state, products: newList,};
    },
  },
  extraReducers(builder) {
    builder.addCase(loadProducts.pending, state => ({
      ...state,
      isLoadingProducts: true,
      isError: false,
    }))

    builder.addCase(loadProducts.fulfilled, (state, action) => {
      return { ...state, products: action.payload, isLoadingProducts: false }
    })

    builder.addCase(loadProducts.rejected, state => ({
      ...state,
      isLoadingProducts: false,
      isError: true,
    }))
  }
})

export const { setNewProducts } = productsSlice.actions;