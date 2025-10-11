import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
}
const CartCountSlice = createSlice({
    name: 'CartCount',
    initialState,
    reducers: {
        update: (state, action: PayloadAction<number>) => {
            state.count = action.payload
        }
    }
})

export const CartCountReducer = CartCountSlice.reducer
export const { update } = CartCountSlice.actions
