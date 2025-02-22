import { createSlice } from '@reduxjs/toolkit';

// Начальное состояние продуктов
const initialState = {
  items: [], // Пустой массив до загрузки данных
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // Экшен для загрузки продуктов
    setProducts: (state, action) => {
      state.items = action.payload; // Сохраняем загруженные данные продуктов
    },
  },
});

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;

