import { configureStore } from "@reduxjs/toolkit";
import stockListReducer from "./stocklist-slice";

const store = configureStore({
    reducer:{
       watchList:   stockListReducer,

            
    }
})
export default store