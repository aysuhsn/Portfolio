import { configureStore } from '@reduxjs/toolkit';
import productSlice from '../features/productSlice';
import wishlistSlice from '../features/wishlist.Slice';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'wishlist',
  storage,
}

const persistWishlistReducer = persistReducer(persistConfig, wishlistSlice);
const persistProductReducer = persistReducer(persistConfig, productSlice);

export const store = configureStore({
  reducer: {products: persistProductReducer, wishlist: persistWishlistReducer}
})

export let persistor = persistStore(store)
