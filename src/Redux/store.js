import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSLice'



export const store = configureStore({
    reducer: {
        cart: cartReducer
    }
})