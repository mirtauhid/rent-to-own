import { createSlice } from "@reduxjs/toolkit";

export const offerSlice = createSlice({
    name: "offer",
    initialState: {
        offerData: null
    },
    reducers: {
        setOfferData: (state, action) => {
            state.offerData = action.payload;
        }
    },
});

// Action creators are generated for each case reducer function
export const { setOfferData } = offerSlice.actions;

export default offerSlice.reducer;
