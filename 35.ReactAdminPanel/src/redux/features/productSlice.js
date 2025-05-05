import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "http://localhost:3000/products";

const initialState = {
  allproducts: [],
};

export const getProducts = createAsyncThunk("products/getProducts", async () => {
  const { data } = await axios.get(baseUrl);
  return data;
});

export const addProducts = createAsyncThunk("products/addProducts", async (product) => {
  const { data } = await axios.post(baseUrl, product);
  return data;
});

export const deleteProducts = createAsyncThunk("products/deleteProducts", async (id) => {
  await axios.delete(`${baseUrl}/${id}`);
  return id; 
});

export const updateProducts = createAsyncThunk("products/updateProducts", async (product) => {
  const { data } = await axios.put(`${baseUrl}/${product.id}`, product);
  return data;
});

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.fulfilled, (state, action) => {
        state.allproducts = action.payload;
      })
      .addCase(addProducts.fulfilled, (state, action) => {
        state.allproducts.push(action.payload);
      })
      .addCase(deleteProducts.fulfilled, (state, action) => {
        state.allproducts = state.allproducts.filter(product => product.id !== action.payload);
      })
      .addCase(updateProducts.fulfilled, (state, action) => {
        state.allproducts = state.allproducts.map(product =>
          product.id === action.payload.id ? action.payload : product
        );
      });
  },
});

export default productSlice.reducer;
