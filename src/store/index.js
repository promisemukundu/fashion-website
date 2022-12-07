import { configureStore } from "@reduxjs/toolkit";
import httpSlice from './http-slice'

const store = configureStore({
    reducer: { http: httpSlice.reducer }
})

export default store