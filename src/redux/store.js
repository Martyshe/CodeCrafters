// import { configureStore } from '@reduxjs/toolkit';
// import cartReducer, { cartMiddleware } from './cartSlice';
// import productsReducer from './productsSlice'; // Подключение редьюсера продуктов

// export default configureStore({
//   reducer: {
//     products: productsReducer, // Добавление редьюсера продуктов
//     cart: cartReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(cartMiddleware),
// });

import { configureStore } from '@reduxjs/toolkit';
import cartReducer, { cartMiddleware } from './cartSlice';
import productsReducer from './productsSlice';
import favoritesReducer from './favoritesSlice'; // Убедитесь в правильном импорте

export default configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    favorites: favoritesReducer, // Должно совпадать с именем в слайсе
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cartMiddleware),
});