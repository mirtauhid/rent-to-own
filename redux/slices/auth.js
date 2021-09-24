import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: true,
  },
  reducers: {
    signIn: (state,action) =>{
      state.isLoggedIn = true;
    }
  },
});

// Action creators are generated for each case reducer function
export const { signIn } = authSlice.actions;

export default authSlice.reducer;
