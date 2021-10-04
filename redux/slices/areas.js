import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    allareas: null,
    allcities: [],
    status: null
};

export const getProvience = createAsyncThunk (
    'areas/getProvience',
    async () => {
        try {
            const response = await fetch('https://rent-to-own.zetech.us/api/v2/provinces') ;
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

export const getCities = createAsyncThunk (
    'areas/getCities',
    async () => {
        try {
            const response = await fetch('https://rent-to-own.zetech.us/api/v2/cities') ;
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

export const areasSlice = createSlice({
  name: "areas",
  initialState,
  extraReducers: {
    [getProvience.pending]: (state, action) => {
        state.status = 'loading'
    },
    [getProvience.fulfilled]: (state, { payload }) => {
        state.allareas = payload
        state.status = 'success'
    },
    [getProvience.rejected]: (state, action) => {
        state.status = 'failed'
    },
    [getCities.pending]: (state, action) => {
        state.status = 'loading'
    },
    [getCities.fulfilled]: (state, { payload }) => {
        state.allcities = payload
        state.status = 'success'
    },
    [getCities.rejected]: (state, action) => {
        state.status = 'failed'
    },
  },
});

//export const { getAllProperties } = areasSlice.actions;

export default areasSlice.reducer;
