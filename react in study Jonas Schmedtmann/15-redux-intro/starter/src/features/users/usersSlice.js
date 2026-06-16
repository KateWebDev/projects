import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  fullName: "",
  createdAt: "",
  work: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    createUser: {
      prepare(id, fullName) {
        return {
          payload: { id, fullName, createdAt: new Date().toISOString(), work: true },
        };
      },
      reducer(state, action) {
        state.id = action.payload.id;
        state.fullName = action.payload.fullName;
        state.createdAt = action.payload.createdAt;
        state.work = action.payload.work;
      },
    },
    updateUser: {
      prepare(fullName) {
        return {
          payload: { fullName },
        };
      },
      reducer(state, action) {
        state.fullName = action.payload.fullName;
      },
    },
    deleteUser(state) {
      state.work = false;
    },
  },
});

export const { createUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
