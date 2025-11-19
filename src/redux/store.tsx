
import { configureStore } from '@reduxjs/toolkit';
import { CartCountReducer } from './slices/CartSlice';
import { WishlistReducer } from './slices/WishlistSlice';
import { EmailForgetReducer } from './slices/EmailForgetSlice';

export const store = configureStore({
    reducer: {
        cartCount: CartCountReducer,
        wishlist: WishlistReducer,
        emailForget: EmailForgetReducer,
    }
})
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;