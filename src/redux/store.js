import { configureStore } from '@reduxjs/toolkit';
import cartReducer, { cartMiddleware } from './cartSlice';

export default configureStore({
  reducer: {
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cartMiddleware),
});