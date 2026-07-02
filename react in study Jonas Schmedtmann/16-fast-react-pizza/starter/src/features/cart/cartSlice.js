import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: {
      prepare(product) {
        return {
          payload: { product },
        };
      },
      reducer(state, action) {
        state.cart.push(action.payload.product);
      },
    },
    delProduct: {
      prepare(id) {
        return {
          payload: { id },
        };
      },
      reducer(state, action) {
        state.cart = state.cart.filter((item) => item.pizzaId !== action.payload.id);
      },
    },
    addCountProduct: {
      prepare(id) {
        return {
          payload: { id },
        };
      },
      reducer(state, action) {
        state.cart = state.cart.map((item) =>
          item.pizzaId === action.payload.id
            ? { ...item, quantity: item.quantity + 1, totalPrice: item.unitPrice * (item.quantity + 1) }
            : item,
        );
      },
    },
    delCountProduct: {
      prepare(id) {
        return {
          payload: { id },
        };
      },
      reducer(state, action) {
        state.cart = state.cart.map((item) =>
          item.pizzaId === action.payload.id
            ? {
                ...item,
                quantity: item.quantity - 1 > 0 ? item.quantity - 1 : 0,
                totalPrice: item.quantity - 1 > 0 ? item.unitPrice * (item.quantity - 1) : 0,
              }
            : item,
        );
      },
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const allCountProducts = (state) => state.cart.cart.reduce((sum, currentVal) => sum + currentVal.quantity, 0);
export const allPriceProducts = (state) => state.cart.cart.reduce((sum, currentVal) => sum + currentVal.totalPrice, 0);
export const getCart = (state) => state.cart.cart;
export const getQuantityProduct = (id) => (state) => state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;

export const { addCountProduct, delCountProduct, addProduct, delProduct, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
