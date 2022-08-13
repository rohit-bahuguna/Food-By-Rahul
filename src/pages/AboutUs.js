import React from 'react'
import AboutImg from '../img/gujrati.jpeg';
import Food1 from '../img/bg02.jpg';
import Food2 from '../img/south.jpg';
import Food3 from '../img/food-delivery-5217579_1280.png';
import '../Style/AboutUs.css';

function About() {
  return (
    <>
      <div className="about">
        <div 
        className="aboutTop"
        style={{ backgroundImage: `url(${AboutImg})`}}
        ></div>


      
       <div className="main">
       <h1>Our Services</h1>
             <div className="box-1 box">
                <img src={Food1} alt="img"/>
                <h2 className="center">Food Catering</h2>
                <p className="h-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est accusantium exercitationem necessitatibus ab.
                 
                </p>
            </div>
            <div className="box-2 box">
                <img src={Food2} alt="img"/>
                <h2 className="center">Bulk Ordering</h2>
                <p className="h-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est accusantium exercitationem necessitatibus ab.
              
                </p>
            </div>

            <div className="box-3 box">
                <img src={Food3} alt="img"/>
                <h2 className="center">Food Ordering</h2>
                <p className="h-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est accusantium exercitationem necessitatibus ab.
              
                </p>
                </div>
                </div>
        </div>
       
   
    </>
  )
}

export default About;
