import React, { useState,useEffect } from 'react'
import {add} from '../store/cartSlice'
import { useDispatch ,useSelector} from 'react-redux';
import { fetchProducts ,STATUSES} from '../store/productSlices';
const Product = () => {
    const dispatch=useDispatch();
    //use selector holds the whole state
    const {data:products,status}=useSelector((state)=>state.product);


    // const [products,setProducts]=useState([]);


    useEffect(()=>{
        dispatch(fetchProducts());
// const fetchProducts=async()=>{
//     dispatch
//     // const res=await fetch('https://fakestoreapi.com/products/');
//     // let data=await res.json();
//     // console.log(data)
//     // setProducts(data)
// }




    },[]);
const handleAdd=(product)=>{
 dispatch(add(product))
    //product 
}
if (status===STATUSES.LOADING){
    return <h2>Loading ...</h2>
}
if(status===STATUSES.ERROR){
    return<h2>Error:( </h2>
}
  return (
    <div className='productsWrapper'>
        {

            products.map((product)=>(
                <div className='card' key={product.id} >

                    <img src={product.image} alt="" />
                    <h4>{product.title}</h4>
                    <h5>{product.price}</h5>
                    <button onClick={()=>handleAdd(product)} className='btn'>Add to cart</button>
                </div>
            ))
        }
    </div>
  )
}

export default Product