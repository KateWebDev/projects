import { combineReducers, createStore } from "redux";

// ACCOUNT
const ACCOUNT_DEPOSIT = "account/deposit";
const ACCOUNT_WITHDRAW = "account/withdraw";
const ACCOUNT_ADD_CREDIT = "account/addCredit";
const ACCOUNT_PAY_CREDIT = "account/payCredit";
// USERS
const USERS_CREATED_USER = "users/createUser";
const USERS_UPDATE_NAME = "users/updateName";
const USERS_DELETE_USER = "users/deleteUser";

const initialStateMoney = {
  balance: 0,
  credit: 0,
  purposeCredit: "",
};

const initialStateUser = {
  id: "",
  fullName: "",
  createdAt: "",
  work: false,
};

function reducerMoney(state = initialStateMoney, action) {
  switch (action.type) {
    case ACCOUNT_DEPOSIT:
      return { ...state, balance: state.balance + action.payload.sum };
    case ACCOUNT_WITHDRAW:
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

function reducerUser(state = initialStateUser, action) {
  switch (action.type) {
    case USERS_CREATED_USER:
      return {
        id: action.payload.id,
        fullName: action.payload.fullName,
        createdAt: action.payload.createdAt,
        work: action.payload.work,
      };
    case USERS_UPDATE_NAME:
      return { ...state, fullName: action.payload.fullName };
    case USERS_DELETE_USER:
      return { ...state, work: false };
    default:
      return state;
  }
}

// ACCOUNT
function deposit(sum) {
  return { type: ACCOUNT_DEPOSIT, payload: { sum: sum } };
}
function withdraw(sum) {
  return { type: ACCOUNT_WITHDRAW, payload: { sum: sum } };
}
function addCredit(sumCredit, purpose) {
  return { type: ACCOUNT_ADD_CREDIT, payload: { sumCredit: sumCredit, purpose: purpose } };
}
function payCredit(sumPayCredit) {
  return { type: ACCOUNT_PAY_CREDIT, payload: { sumPayCredit: sumPayCredit } };
}

// USERS
function createUser(id, fullName) {
  return {
    type: USERS_CREATED_USER,
    payload: { id: id, fullName: fullName, createdAt: new Date().toISOString(), work: true },
  };
}

function updateUser(fullName) {
  return { type: USERS_UPDATE_NAME, payload: { fullName: fullName } };
}

function deleteUser() {
  return { type: USERS_DELETE_USER };
}

const rootReducer = combineReducers({
  money: reducerMoney,
  user: reducerUser,
});

const store = createStore(rootReducer);

// ACCOUNT
store.dispatch(deposit(1000));
store.dispatch(withdraw(500));
store.dispatch(addCredit(5000, "buy a car"));
store.dispatch(payCredit(300));

// USERS
store.dispatch(createUser("1", "TEST"));
store.dispatch(updateUser("TEST2"));
store.dispatch(deleteUser());

console.log(store.getState());
