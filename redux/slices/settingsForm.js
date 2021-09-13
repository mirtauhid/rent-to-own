import { createSlice } from "@reduxjs/toolkit";

export const settingsFormSlice = createSlice({
  name: "settingsForm",
  initialState: {
    LOE:null,
    downPayment:null,
    CRA:null,
    email:null,
    phone:null,
    streetAddress:null,
    apartment:null,
    city:null,
    province:null,
    country:null,
    postalCode:null
  },
  reducers: {
    addLOE: ()=>{

    }
  },
});

// Action creators are generated for each case reducer function
export const { addLOE } = settingsFormSlice.actions;

export default settingsFormSlice.reducer;
