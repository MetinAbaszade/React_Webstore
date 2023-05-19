import { createSlice } from "@reduxjs/toolkit"

const initialState = []

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add(state, action) {
            const productIndex = state.findIndex(product => product.id === action.payload.id);
            if (productIndex !== -1) {
                // If product is already in cart, increment quantity
                state[productIndex].quantity += 1;
            } else {
                // If product is not in cart, add it with quantity 1
                state.push({ ...action.payload, quantity: 1 });
            }
        },
        decreaseCount(state, action) {
            const productIndex = state.findIndex(product => product.id === action.payload.id);
            if (productIndex !== -1 && state[productIndex].quantity > 1) {
                state[productIndex].quantity -= 1;
            }
        },
        remove(state, action) {
            const productIndex = state.findIndex(product => product.id === action.payload.id);
            if (productIndex !== -1) {
                state.splice(productIndex, 1); 
            }
        }
    }
})

export const { add, decreaseCount, remove } = cartSlice.actions;
export default cartSlice.reducer
