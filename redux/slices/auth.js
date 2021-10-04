import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    userData: null
  },
  reducers: {
    signIn: (state, action) => {
      state.isLoggedIn = true;
      state.userData = action.payload;
    },
    signOut: (state, action) => {
      state.isLoggedIn = false;
      state.userData = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { signIn,signOut } = authSlice.actions;

export default authSlice.reducer;
