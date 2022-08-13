import React from 'react'
import {useStateValue} from '../components/StateProvider';
import '../Style/Checkout.css';

function Checkout({id, image, name, price}) {
    const [{basket}, dispatch] = useStateValue();
    
    const  removeFromBasket=()=>{
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        }) 
      }

  return (
    <>
         <div className="order_details">
            <img src={image} alt="" className="checkoutProduct__img" />
               <h1>{name}</h1>
                <p>₹{price}</p>
                <button onClick={removeFromBasket}>Remove from cart</button>
            </div>

    </>
  )
}

export default Checkout;
