import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counter/counterSlice'
import nameReducer from './name/nameSlice'

 const store = configureStore({
    reducer:{
        counter:counterReducer,
        name:nameReducer,
    }
 })

 export default store