import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    email: "",
  },
  reducers: {
    addUser: (state, action) => {
      state.name = action.payload.name; // payload is an object that has all state
      state.email = action.payload.email;
    },
  },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
