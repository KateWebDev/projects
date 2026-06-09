import { createContext, useReducer } from "react";

const FakeAuthContext = createContext();

const FAKE_USER = {
  name: "Tom",
  email: "jack@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

const initialState = {
  user: {
    email: "",
    password: "",
  },
  isAuthenticated: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return {
        ...state,
        isAuthenticated: true,
        user: {
          name: action.payload.name,
          email: action.payload.email,
          password: action.payload.password,
          avatar: action.payload.avatar,
        },
      };
    case "logout":
      return {
        ...state,
        isAuthenticated: false,
        user: {
          name: "",
          email: "",
          password: "",
          avatar: "",
        },
      };
    default:
      alert("error authenticated");
  }
}

function FakeAuthProvider({ children }) {
  const [state, dispath] = useReducer(reducer, initialState);
  const { user, isAuthenticated } = state;

  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password) {
      dispath({
        type: "login",
        payload: {
          email: FAKE_USER.email,
          password: FAKE_USER.password,
          name: FAKE_USER.name,
          avatar: FAKE_USER.avatar,
        },
      });
    }
  }

  function logout() {
    dispath({ type: "logout" });
  }

  const value = { user, isAuthenticated, login, logout };
  return <FakeAuthContext.Provider value={value}>{children}</FakeAuthContext.Provider>;
}

export { FakeAuthContext, FakeAuthProvider };
