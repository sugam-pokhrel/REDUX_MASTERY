//first step is to create a slice //create function in reducers that change the state

const { createSlice } = require("@reduxjs/toolkit");

const initialState=[];

const cartSlice=createSlice({
name:'cart',
initialState,
reducers:{
    add(state,action){
        state.push(action.payload)


    },
    remove(state,action){
        return state.filter((product)=>product.id!==action.payload)


    }

}
})
export const{add,remove}=cartSlice.actions;
//export the functions

export default cartSlice.reducer;

///export the reducer
