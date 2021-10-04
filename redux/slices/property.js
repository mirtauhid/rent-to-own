import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getProperty = createAsyncThunk (
    'property/getProperty',
    async () => {
        try {
            const response = await fetch('https://rent-to-own.zetech.us/api/v2/public/property/filter') ;
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
            const resData = await response.json();
            return resData.data;
        }catch(err) {
            throw err;
        }
    }
)

export const propertySlice = createSlice({
  name: "property",
  initialState: {
    allproperties: [],
    status: null
  },
  extraReducers: {
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

//export const { getAllProperties } = propertySlice.actions;

export default propertySlice.reducer;
