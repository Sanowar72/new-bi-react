import React from 'react';
import Header from './Header';
import './CartPage.css';
import { useNavigate } from "react-router-dom";

const CartPage = ({ setCartValue, cartValue }) => {
  const navigate = useNavigate();

  const items = cartValue.map((data,i)=>{
    return(
      <div className="cart-container" >
        <img src={data.img} alt='Item 1' className='img-fluid' />
        <div className='cart-body'>
          <h3>{data.title}</h3>
          <h6>{data.desc}</h6>
          <h4>Price: ${data.price}</h4>
          <button onClick={()=>{filteredItems(data)}}>Remove</button>
        </div>
      </div>
    )
  });

  const filteredItems = (data)=>{
    const newData = cartValue.filter((item)=>{
      return item!=data;
    })
    setCartValue(newData);
  }

  if(cartValue.length===0){
    return <div>please add something to cart first</div>
  }else{
  return (
    
    <div className='container'>
      
      {items}

    </div>



  )}
}

export default CartPage;