import { createSlice } from "@reduxjs/toolkit";

// When sending request: (3 things)
// 1) Start
// 2) Success
// 3) Error

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: {
      name: "",
      email: "",
    },
    loading: null,
    error: false,
  },
  reducers: {
    addUser: (state, action) => {
      // state.userData = action.payload
      state.userData.name = action.payload.name; // payload is an object that has all state
      state.userData.email = action.payload.email;
    },
    startUser: (state) => {
      state.loading = true;
    },
    successUser: (state, action) => {
      state.userData = action.payload;
      state.loading = null;
    },
    handleError: (state) => {
      state.loading = null;
      state.error = true;
    },
  },
});

export const { addUser, startUser, successUser, handleError } =
  userSlice.actions;

export default userSlice.reducer;
