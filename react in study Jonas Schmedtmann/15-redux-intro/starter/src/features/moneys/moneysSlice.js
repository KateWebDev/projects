const ACCOUNT_DEPOSIT = "account/deposit";
const ACCOUNT_WITHDRAW = "account/withdraw";
const ACCOUNT_ADD_CREDIT = "account/addCredit";
const ACCOUNT_PAY_CREDIT = "account/payCredit";

const initialStateMoney = {
  balance: 0,
  credit: 0,
  purposeCredit: "",
};

export function reducerMoney(state = initialStateMoney, action) {
  switch (action.type) {
    case ACCOUNT_DEPOSIT:
      return { ...state, balance: state.balance + action.payload.sum };
    case ACCOUNT_WITHDRAW:
      if (state.balance < action.payload.sum) {
        alert("Insufficient funds in the account");
        throw new Error("Insufficient funds in the account");
      }

      return { ...state, balance: state.balance - action.payload.sum };
    case ACCOUNT_ADD_CREDIT:
      if (state.credit > 0) return state;
      return {
        ...state,
        credit: action.payload.sumCredit,
        purposeCredit: action.payload.purpose,
        balance: state.balance + action.payload.sumCredit,
      };
    case ACCOUNT_PAY_CREDIT:
      if (state.credit <= 0) return state;
      if (state.credit === action.payload.sumPayCredit)
        return { ...state, credit: 0, purposeCredit: "", balance: state.balance - state.credit };
      return {
        ...state,
        credit: state.credit - action.payload.sumPayCredit,
        balance: state.balance - action.payload.sumPayCredit,
      };
    default:
      return state;
  }
}

export function deposit(sum) {
  return { type: ACCOUNT_DEPOSIT, payload: { sum: sum } };
}
export function withdraw(sum) {
  return { type: ACCOUNT_WITHDRAW, payload: { sum: sum } };
}
export function addCredit(sumCredit, purpose) {
  return { type: ACCOUNT_ADD_CREDIT, payload: { sumCredit: sumCredit, purpose: purpose } };
}
export function payCredit(sumPayCredit) {
  return { type: ACCOUNT_PAY_CREDIT, payload: { sumPayCredit: sumPayCredit } };
}

/*
store.dispatch(deposit(1000));
store.dispatch(withdraw(500));
store.dispatch(addCredit(5000, "buy a car"));
store.dispatch(payCredit(300));
*/
