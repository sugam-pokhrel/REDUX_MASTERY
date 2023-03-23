import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/cartSlice';
const Cart = () => {
  const dispatch=useDispatch();

  const selector=useSelector((state)=>state.cart);
  const handleRemove=(id)=>{
   dispatch(remove(id))
  }

  return (
    <div><h3>
      Cart
      </h3>
      <div className="cartWrapper">

        {
          selector.map(product=>(
            <div className='cartCard' key={product.id} >

                    <img src={product.image} alt="" />
                    <h4>{product.title}</h4>
                    <h5>{product.price}</h5>
                    <button onClick={()=>handleRemove(product.id)}  className='btn'> Remove from cart</button>
                </div>
          ))
        }
      </div>
      </div>
    
  )
}

export default Cart