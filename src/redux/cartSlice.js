import { createSlice } from "@reduxjs/toolkit";

const loadCartFromStorage = () => {
  try {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  } catch (error) {
    console.error("Error loading cart from localStorage:", error);
    return [];
  }
};

const cartMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  if (action.type.startsWith("cart/")) {
    const state = store.getState().cart;
    localStorage.setItem("cart", JSON.stringify(state.items));
  }
  return result;
};

const initialState = {
  items: loadCartFromStorage(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity || 1;
      } else {
        state.items.push({ 
          ...action.payload, 
          quantity: action.payload.quantity || 1 
        });
      }
    },
    increaseQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.items = state.items.filter(
            (item) => item.id !== action.payload
          );
        }
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart, clearCart } =
  cartSlice.actions;
export { cartMiddleware };
export default cartSlice.reducer;