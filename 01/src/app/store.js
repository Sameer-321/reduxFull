import { configureStore } from "@reduxjs/toolkit";
//import counterSlice from "../features/counter/counterSlice";
import counterReducer from "../features/counter/counterSlice";



export const store =configureStore({
    reducer:{
        counter:counterReducer,
    },
})

