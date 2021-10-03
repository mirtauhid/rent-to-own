import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getProperty = createAsyncThunk (
    //https://rent-to-own.zetech.us/api/v2/public/property/filter
    'property/getProperty',
    async () => {
        return fetch("https://rent-to-own.zetech.us/api/v2/public/property/filter")
            .then(response => response.json())
    }
)

export const propertySlice = createSlice({
  name: "property",
  initialState: {
    allproperties: [],
    status: null
  },
  reducers: {
    [getProperty.pending]: (state, action) => {
        state.status = 'loading'
    },
    [getProperty.fulfilled]: (state, { payload }) => {
        state.allproperties = payload
        state.status = 'success'
    },
    [getProperty.rejected]: (state, action) => {
        state.status = 'failed'
    },
  },
});

export const { getAllProperties } = propertySlice.actions;

export default propertySlice.reducer;
