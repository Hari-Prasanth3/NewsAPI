import { configureStore } from "@reduxjs/toolkit";
import newsApiSliceReducer from './slices/newsApiSlice'

const store = configureStore({
    reducer : {
        news : newsApiSliceReducer
    }
}) 

export default store;