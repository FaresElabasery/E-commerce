
import { configureStore } from '@reduxjs/toolkit';
import { CartCountReducer } from './slices/CartCountSlice';

export const store = configureStore({
    reducer: {
        cartCount: CartCountReducer,
    }
})