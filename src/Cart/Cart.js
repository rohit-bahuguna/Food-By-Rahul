import React from 'react'
import {useStateValue} from '../components/StateProvider';
import '../Style/Cart.css';
import SubTotal from './SubTotal';
import Checkout from './Checkout';

function Cart() {
  const [{basket}, dispatch] = useStateValue();
 

  return (
    <>
     <div className="checkout_page">
        {/* left-side part */}
        <div className="checkout_left">
      
         <div className="subtotal">
                       
          <SubTotal />

            </div>
            {/* ---------------------------------------------------------- */}

           <div className="order_details">

           {<h1>Cart is empty</h1> && basket.map(item => (
                        <Checkout 
                            id = {item.id}
                            name = {item.name}
                            image = {item.image}
                            price = {item.price}
                           
                        />
                    ))} 


         </div> 
            {/* --------------------------------------------------------------------- */}
        </div>
   {/* Right Side Part  */}
   <div className="checkout_right">
       <h1 id='checkout_center'>Delivery Address</h1>
          <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input type='text' name="name" placeholder="Enter full name..."  required/>
          <label htmlFor="">Mobile no.</label>
          <input type='number' name="phone" placeholder="Enter Phone no..." required/>
          <label htmlFor="">Complete Address</label>
          <input type='text' name="address" placeholder="Enter your address..." required/>
          <label htmlFor="message">How To Reach</label>
          <textarea
            rows="4"
            placeholder="Enter message..."
            name="message"
          
          ></textarea>
        
        </form>
   </div>
 </div> 
    </>
  )
}

export default Cart
