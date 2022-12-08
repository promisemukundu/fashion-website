import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const productsSliceName = 'products';

export const getProducts = createAsyncThunk('products/getProducts',

    async () => {
        const response = await fetch("https://fakestoreapi.com/products")
        const formattedData = await response.json()

        return formattedData
    }

)

const productsSlice = createSlice({
    name: productsSliceName,
    initialState: {
        products: [],
        // isLoading: false
    },
    extraReducers: {
        // [getProducts.pending]: (state) => {
        //    state.isLoading = true
        //  },
        [getProducts.fulfilled]: (state, action) => {
            state.products = action.payload
        },
        [getProducts.rejected]: (state) => {

        }
    }
})

export const httpActions = productsSlice.actions

export default productsSlice