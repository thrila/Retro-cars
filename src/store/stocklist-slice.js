import { createSlice } from "@reduxjs/toolkit";

const initialState = ["GOOGL", "MSFT", "AMZN"]

const stockListSlice = createSlice({
    name : 'stockList',
    initialState,
    reducers :{
        addItem : (state, action)=> {
       return [...state, action.payload]
        },
        deleteItem : (state, action)=> {
            return state  = state.filter((item)=> item !== action.payload)
        }

      
        
    }
})
export default stockListSlice.reducer
export const { addItem , deleteItem } = stockListSlice.actions