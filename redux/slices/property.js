import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import baseURL from '../../Helpers/httpRequest';

export const getProperty = createAsyncThunk (
    'property/getProperty',
    async () => {
        try {
            const response = await fetch(`${baseURL}/v2/public/property/filter`);
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
            const resData = await response.json();
            console.log(resData);
            return resData.data;
        }catch(err) {
            throw err;
        }
    }
)

export const getListingType = createAsyncThunk (
    'property/getListingType',
    async () => {
        try {
            const response = await fetch(`${baseURL}/v2/listing-types`);
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

export const getFilteredData = createAsyncThunk (
    'property/getFilteredData',
    async ({listingTypeIds, cityIds, minPrice, maxPrice, minSize, maxSize, proviceIds}) => {
        try {
            const response = await fetch(`
                ${baseURL}/v2/public/property/filter?minPrice=${minPrice}&maxPrice=${maxPrice}&minSize=${minSize}&maxSize=${maxSize}&proviceIds=${proviceIds ? proviceIds : ""}&listingTypeIds=${listingTypeIds}&cityIds=${cityIds}
            `) ;
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
            const resData = await response.json();
            console.log(resData);
            return resData;
        }catch(err) {
            throw err;
        }
    }
)

export const getPropertyDetails = createAsyncThunk (
    'property/getPropertyDetails',
    async ({id}) => {
        try {
            const response = await fetch(`${baseURL}/v2/properties/${id}`) ;
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
            const resData = await response.json();
            console.log(resData.data);
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
    listingType: [],
    filteredData: [],
    propertyDetails: null,
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
    //listing type
    [getListingType.pending]: (state, action) => {
        state.status = 'loading'
    },
    [getListingType.fulfilled]: (state, { payload }) => {
        state.listingType = payload
        state.status = 'success'
    },
    [getListingType.rejected]: (state, action) => {
        state.status = 'failed'
    },
    //filtered data
    [getFilteredData.pending]: (state, action) => {
        state.status = 'loading'
    },
    [getFilteredData.fulfilled]: (state, { payload }) => {
        state.filteredData = payload.data
        state.status = 'success'
    },
    [getFilteredData.rejected]: (state, action) => {
        state.status = 'failed'
    },
    //property details
    [getPropertyDetails.pending]: (state, action) => {
        state.status = 'loading'
    },
    [getPropertyDetails.fulfilled]: (state, { payload }) => {
        state.propertyDetails = payload
        state.status = 'success'
    },
    [getPropertyDetails.rejected]: (state, action) => {
        state.status = 'failed'
    },
  },
});

//export const { getAllProperties } = propertySlice.actions;

export default propertySlice.reducer;
