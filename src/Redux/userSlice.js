import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// When sending request: (3 things)
// 1) Start
// 2) Success
// 3) Error

export const fetchUserTK = createAsyncThunk("users/add", async (user) => {
  // payload byshel l data l returned mn hena
  return await axios
    .post("http://localhost:5000/api/users", user)
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
});

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
    // addUser: (state, action) => {
    //   // state.userData = action.payload
    //   state.userData.name = action.payload.name; // payload is an object that has all state
    //   state.userData.email = action.payload.email;
    // },
    // startUser: (state) => { // pending
    //   state.loading = true;
    // },
    // successUser: (state, action) => { // fulfilled
    //   state.userData = action.payload;
    //   state.loading = null;
    // },
    // handleError: (state) => { // rejected
    //   state.loading = null;
    //   state.error = true;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserTK.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUserTK.fulfilled, (state, action) => {
      console.log(action);
      state.userData = action.payload;
      state.loading = null;
    });
    builder.addCase(fetchUserTK.rejected, (state) => {
      state.loading = null;
      state.error = true;
    });
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;

// [fetchUserTK.pending]: (state) => {
//       state.loading = true;
//     },
//     [fetchUserTK.fulfilled]: (state, action) => {
//       console.log(action);
//       state.userData = action.payload;
//       state.loading = null;
//     },
//     [fetchUserTK.rejected]: (state) => {
//       state.loading = null;
//       state.error = true;
//     },
