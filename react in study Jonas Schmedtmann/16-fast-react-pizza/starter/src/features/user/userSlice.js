import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAddress } from "../../services/apiGeocoding";

const initialState = {
  userName: "",
  status: "idle",
  position: {},
  address: "",
  error: null,
};

function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

export const fetchAddress = createAsyncThunk("user/fetchAddress", async function () {
  const positionObj = await getPosition();
  const position = {
    latitude: positionObj.coords.latitude,
    longitude: positionObj.coords.longitude,
  };

  const addressObj = await getAddress(position);
  const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;
  return { position, address }; // (result in action.payload)
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUserName: {
      prepare(newUserName) {
        return {
          payload: { newUserName },
        };
      },
      reducer(state, action) {
        state.userName = action.payload.newUserName;
      },
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAddress.pending, (state) => {
        // сработает при pending

        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        // сработает при fulfilled
        state.status = "succeeded";
        state.position = action.payload.position;
        state.address = action.payload.address;
      })
      .addCase(fetchAddress.rejected, (state, action) => {
        // сработает при rejected
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

export const getUserName = (state) => state.user.userName;
export const getUserPosition = (state) => state.user.position;
export const getUserAddress = (state) => state.user.address;

export const { updateUserName } = userSlice.actions;
export default userSlice.reducer;
