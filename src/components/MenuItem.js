import React from 'react'
import { useStateValue } from "../components/StateProvider";

function MenuItem({ id,image, name, price }) {
  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
        type: "ADD_TO_BASKET",
        item: {
          id:id,
           name:name,
            image: image,
            price: price
           
        },
    })
};
  return (
    <>
      <div className="menuItem">
          <div style={{backgroundImage:  `url(${image})`}}></div>
          <h1>{name}</h1>
          <p>₹{price}</p>
          <button onClick={addToBasket}>Add To Cart</button>
      </div>
   
    </>
  )
}

export default MenuItem;
