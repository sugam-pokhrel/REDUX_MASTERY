import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const selector=useSelector((state)=>
    state.cart

  ); //this is needed as this holds the whole state of the application and when a certain state is changed in this context the cart is increased this will on work when the state of cart is increased or decreased
  return (
    <div style={{display:'flex',alignItems:'space-between'}}>
        <span className='logo'>
            REDUX STORE
        </span>
        <Link className='navLink' to='/'>Home</Link>
        <Link className='navLink' to='/cart'>Cart</Link>
        <span className='cartCount'>
            Cart items:{selector.length}
        </span>
        
     </div>
    


   
  )
}

export default Navbar