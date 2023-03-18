import { createSlice } from "@reduxjs/toolkit";
const items = localStorage.getItem('watchList') !== null ? JSON.parse(localStorage.getItem('watchList')) : ["GOOGL", "MSFT", "AMZN"];

// const initialState = ["GOOGL", "MSFT", "AMZN"]
const initialState = items;

const stockListSlice = createSlice({
    name : 'stockList',
    initialState,
    reducers :{
        addItem : (state, action)=> {
       return [...state, action.payload];
       localStorage.setItem('watchList', JSON.stringify(state.map(item=> item)));
        },
        deleteItem : (state, action)=> {
            return state  = state.filter((item)=> item !== action.payload)
        }

      
        
    }
})
export default stockListSlice.reducer
export const { addItem , deleteItem } = stockListSlice.actions