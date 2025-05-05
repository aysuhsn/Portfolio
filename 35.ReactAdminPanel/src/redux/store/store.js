import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import productSlice from '../features/productSlice';
import wishlistSlice from '../features/wishlist.Slice';
import basketSlice from '../features/basketSlice';

const persistConfig = {
  key: 'storage',
  storage,
};

const persistProductReducer = persistReducer(persistConfig, productSlice);
const persistWishlistReducer = persistReducer(persistConfig, wishlistSlice);
const persistBasketReducer = persistReducer(persistConfig, basketSlice);

export const store = configureStore({
  reducer: {
    products: persistProductReducer,
    wishlist: persistWishlistReducer,
    basket: persistBasketReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export let persistor = persistStore(store);
