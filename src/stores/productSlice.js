import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
    IDLE: "idle",
    ERROR: "error",
    LOADING: "loading"
})

const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: [],
        status: STATUSES.IDLE 
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.status = STATUSES.LOADING
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.data = action.payload
            state.status = STATUSES.IDLE
        })
        .addCase(fetchProducts.rejected, (state, action) => {
            state.status = STATUSES.ERROR
        });
    }
})

export const fetchProducts = createAsyncThunk('products/fetch', async (category) => {
    let url = "https://fakestoreapi.com/products";
    if (category && category !== "all") {
        url = `${url}/category/${category}`;
    }
    const res = await fetch(url);
    const data = await res.json();
    return data;
});

export default productSlice.reducer;