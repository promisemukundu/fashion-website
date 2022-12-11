import { configureStore } from "@reduxjs/toolkit";
import productsSlice, { productsSliceName } from './products-slice'

const store = configureStore({
    reducer: { [productsSliceName]: productsSlice.reducer }
})

export default store