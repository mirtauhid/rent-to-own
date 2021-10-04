import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn:false,
  },
  reducers: {
    signIn: (state, action) => {
      state.isLoggedIn = true;
    },
    signOut: (state, action) => {
      state.isLoggedIn = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { signIn,signOut } = authSlice.actions;

export default authSlice.reducer;
