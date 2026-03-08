import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./cartSlicer";
import MenuReducer from "./menuSlicer";

export const store = configureStore({
    reducer:{
        cartSlice: CartReducer,
        menuSlice: MenuReducer
    }
})