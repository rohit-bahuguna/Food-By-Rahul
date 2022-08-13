import React from 'react';
import FoodImg from '../img/food.jpeg';
import '../Style/Home.css';
import {Link} from 'react-router-dom';
function Home() {
  return (
    <>
    <div className="home" style={{ backgroundImage: `url(${FoodImg})`}}>
      <div className="headerContainer">
      {/* <img src={FoodImg} /> */}
      <h1 style={{ fontWeight: "bold" }}> Food Corner </h1>
        <p>INDIAN FOOD AT A CLICK</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
      </div>  
    
    </>
  )
}

export default Home;
