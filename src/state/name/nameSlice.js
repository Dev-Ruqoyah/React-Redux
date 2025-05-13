import { createSlice } from "@reduxjs/toolkit";

const initialState = {sname : "Taye"}
const nameSlice = createSlice({
    name: "name",
    initialState,
    reducers:{
        toKenny : (state) =>{
            state.sname = "Kenny"
        }
    }

})
 export const {toKenny} = nameSlice.actions
export default nameSlice.reducer