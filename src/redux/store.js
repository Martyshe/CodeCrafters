import { configureStore } from '@reduxjs/toolkit';
import cartReducer, { cartMiddleware } from './cartSlice';
import productsReducer from './productsSlice'; // Подключение редьюсера продуктов

export default configureStore({
  reducer: {
    products: productsReducer, // Добавление редьюсера продуктов
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cartMiddleware),
});
