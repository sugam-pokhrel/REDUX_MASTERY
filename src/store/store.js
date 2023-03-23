import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productSlices from "./productSlices";

const store=configureStore({
    reducer:{
        cart:cartSlice,
//      products:productSlice
        product:productSlices

    }
})
export default store