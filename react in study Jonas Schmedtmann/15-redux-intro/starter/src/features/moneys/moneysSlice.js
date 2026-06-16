import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 0,
  credit: 0,
  purposeCredit: "",
  currency: "USD",
};

const moneySlice = createSlice({
  name: "money",
  initialState: initialState,
  reducers: {
    deposit: {
      prepare(sum) {
        return {
          payload: { sum },
        };
      },
      reducer(state, action) {
        state.balance += action.payload.sum;
      },
    },
    withdraw: {
      prepare(withdrawalAmount) {
        return {
          payload: { withdrawalAmount },
        };
      },
      reducer(state, action) {
        state.balance -= action.payload.withdrawalAmount;
      },
    },
    addCredit: {
      prepare(loanAmount, loanPurpose) {
        return {
          payload: {
            loanAmount,
            loanPurpose,
          },
        };
      },
      reducer(state, action) {
        if (state.credit > 0) return;

        state.credit = action.payload.loanAmount;
        state.purposeCredit = action.payload.loanPurpose;
        state.balance += action.payload.loanAmount;
      },
    },
    payCredit: {
      prepare(payAmount) {
        return {
          payload: { payAmount },
        };
      },
      reducer(state, action) {
        if (state.credit <= 0) return state;
        if (state.credit === action.payload.payAmount) {
          state.credit = 0;
          state.purposeCredit = "";
          state.balance -= state.credit;
        }

        state.credit -= action.payload.payAmount;
        state.balance -= action.payload.payAmount;
      },
    },
  },
});

export const { withdraw, addCredit, payCredit } = moneySlice.actions;

export function deposit(sum, currency) {
  if (currency === "USD") return { type: "money/deposit", payload: { sum: sum } };
  return async function (dispatch) {
    // API
    const response = await fetch(`https://api.frankfurter.dev/v1/latest?amount=${sum}&from=${currency}&to=USD`);
    const data = await response.json();
    const convertAmount = data.rates.USD;

    dispatch({ type: "money/deposit", payload: { sum: convertAmount } });
  };
}

export default moneySlice.reducer;
