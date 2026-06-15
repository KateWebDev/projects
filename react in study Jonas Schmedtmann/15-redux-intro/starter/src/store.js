import { combineReducers, createStore } from "redux";
import { reducerMoney } from "./features/moneys/moneysSlice";
import { reducerUser } from "./features/users/usersSlice";

const rootReducer = combineReducers({
  money: reducerMoney,
  user: reducerUser,
});

export const store = createStore(rootReducer);
