import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from '../../Helpers/httpRequest';

const initialState = {
    areas: null,
    filterLocation: null,
    status: null
};

export const getAreas = createAsyncThunk (
    'map/getAreas',
    async ({lat, lng}) => {
        try {
            const response = await fetch(`${baseURL}/v2/public/property/filter/test?lat=${lat}&lng=${lng}`) ;
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
            const resData = await response.json();
            return resData;
        }catch(err) {
            throw err;
        }
    }
)
export const getFilterLocation = createAsyncThunk (
    'map/getFilterLocation',
    async ({lat, lng}) => {
        try {
            const response = await fetch(`${baseURL}/v2/public/property/map?lat=${lat}&lng=${lng}`) ;
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

export const mapSlice = createSlice({
  name: "map",
  initialState,
  extraReducers: {
    [getAreas.pending]: (state, action) => {
        state.status = 'loading'
    },
    [getAreas.fulfilled]: (state, { payload }) => {
        state.areas = payload
        state.status = 'success'
    },
    [getAreas.rejected]: (state, action) => {
        state.status = 'failed'
    },
    //
    [getFilterLocation.pending]: (state, action) => {
        state.status = 'loading'
    },
    [getFilterLocation.fulfilled]: (state, { payload }) => {
        state.filterLocation = payload
        state.status = 'success'
    },
    [getFilterLocation.rejected]: (state, action) => {
        state.filterLocation = null;
        state.status = 'failed'
    },
  },
});

//export const { getAllProperties } = areasSlice.actions;

export default mapSlice.reducer;
