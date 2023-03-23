//first step is to create a slice //create function in reducers that change the state

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const STATUSES=Object.freeze({
    IDLE: 'idle',
    ERROR:'error',
    LOADING:'loading'

});


const productSlice=createSlice({
name:'product',
initialState:{
data:[],
status:STATUSES.IDLE,
},
reducers:{
    // setProducts(state,action){
    //     state.data=action.payload;


    // },
    // setStatus(state,action){
    //     state.status=action.payload;
    // }


},

extraReducers:(builder)=>{
    builder
    .addCase(fetchProducts.pending,(state,action)=>{
        state.status=STATUSES.LOADING;
    })
    .addCase(fetchProducts.fulfilled,(state,action)=>{
        state.data=action.payload;
        state.status=STATUSES.IDLE;
    }).addCase(fetchProducts.rejected,(state,action)=>{
        state.STATUSES=STATUSES.ERROR;
    });


}
})
export const{setProducts,setStatus}=productSlice.actions;
//export the functions

export default productSlice.reducer;

///export the reducer


//thunks is a middleware prev it used to be registerd in store but in new 
//we can do it here
//thunk is a function that returns a function



// export function fetchProducts(){
//     return async function fetchProductsThunk(dispatch,getState){
        
//         dispatch(setStatus(STATUSES.LOADING))
        
//         try{
//              const res=await fetch('https://fakestoreapi.com/products/');
//             const data=await res.json();
//             dispatch(setProducts(data))
//             dispatch(setStatus(STATUSES.IDLE));

//         }catch(err){
//             console.log(err)
//             setStatus( STATUSES.ERROR)

//         }

//     }

// }

//the method for creating thunk

export const fetchProducts=createAsyncThunk('products/fetch',async()=>{
     const res=await fetch('https://fakestoreapi.com/products/');
     const data=res.json();
     return data;
})