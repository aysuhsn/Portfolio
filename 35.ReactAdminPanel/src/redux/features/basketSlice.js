import {createSlice} from "@reduxjs/toolkit"

const initialState  = {
  products:[],
}

export const basketSlice = createSlice({
  name:"basket",
  initialState,
  reducers:{
    addBasket: (state, action) =>{  
      let existProduct = state.products.find((product) => product.id == action.payload.id)
      if (!existProduct) {
        state.products.push({...action.payload, count:1});
      } else{
        existProduct.count += 1
      }
    },
    removeBasket: (state, action) =>{
      state.products = state.products.filter(item => item.id != action.payload)
    },
    increment: (state, action) =>{
      let findProduct = state.products.find(product => product.id == action.payload);

      if (findProduct) {
        findProduct.count +=1
      }
    },
    
    decrement: (state, action) =>{
      let findProduct = state.products.find(product => product.id == action.payload);

      if (findProduct && findProduct.count > 1) {
        findProduct.count -=1
      }
    }
  }
})

export const { addBasket, removeBasket, increment, decrement} = basketSlice.actions;
export default basketSlice.reducer