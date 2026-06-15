const USERS_CREATED_USER = "users/createUser";
const USERS_UPDATE_NAME = "users/updateName";
const USERS_DELETE_USER = "users/deleteUser";

const initialStateUser = {
  id: "",
  fullName: "",
  createdAt: "",
  work: false,
};

export function reducerUser(state = initialStateUser, action) {
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

export function createUser(id, fullName) {
  return {
    type: USERS_CREATED_USER,
    payload: { id: id, fullName: fullName, createdAt: new Date().toISOString(), work: true },
  };
}

export function updateUser(fullName) {
  return { type: USERS_UPDATE_NAME, payload: { fullName: fullName } };
}

export function deleteUser() {
  return { type: USERS_DELETE_USER };
}

/*
store.dispatch(createUser("1", "TEST"));
store.dispatch(updateUser("TEST2"));
store.dispatch(deleteUser());
*/
