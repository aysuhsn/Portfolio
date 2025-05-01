import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
const initialState = {
  Allproduct:[]
}
export const getProduct = createAsyncThunk("product",async()=>{
  let {data}=await axios.get("http://localhost:3000/products")
  console.log(data)
  return data
})
export const ProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.Allproduct = action.payload
    })
  },
})


export default ProductSlice.reducer
