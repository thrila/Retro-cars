import { configureStore } from "@reduxjs/toolkit";
import autocompleteSliceReducer from "./autocomplete-slice";

const store = configureStore({
    reducer:{
            autocompleteSliceReducer,
            
    }
})
export default store