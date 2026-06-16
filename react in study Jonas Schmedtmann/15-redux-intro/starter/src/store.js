import { configureStore } from "@reduxjs/toolkit";
import moneySlice from "./features/moneys/moneysSlice";
import userSlice from "./features/users/usersSlice";

export const store = configureStore({
  reducer: {
    money: moneySlice,
    user: userSlice,
  },
});
