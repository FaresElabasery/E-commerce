
import { configureStore } from '@reduxjs/toolkit';
import { CartCountReducer } from './slices/CartSlice';
import { WishlistReducer } from './slices/WishlistSlice';

export const store = configureStore({
    reducer: {
        cartCount: CartCountReducer,
        wishlist: WishlistReducer,
    }
})
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;