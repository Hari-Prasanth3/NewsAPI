import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from 'axios';

export const fetch = createAsyncThunk('get', async () => {
    const response = await Axios.get('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=97e7732536a74e37bc3966fe6440a858');
    return response.data;
})

const newsApiSlice = createSlice({
    name: "news",
    initialState : {
        news : [],
        loading : false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetch.pending, (state,action) => {
                state.loading = true;
            })
            .addCase(fetch.fulfilled, (state,action) => {
                state.loading = false;
                state.news =action.payload;
            })
            .addCase(fetch.rejected, (state,action) => {
                state.loading = false;
            });
    }
})

export default newsApiSlice.reducer;