import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from './pages/Home';
import Contect from "./pages/Contect";
import AboutUs from './pages/AboutUs';
import Menu from "./pages/Menu";
import Cart from "./Cart/Cart";

import { BrowserRouter ,Route, Routes } from "react-router-dom";
  




function App() {
  return (
   
      <BrowserRouter>
    
         <Navbar/>
        
     
          <Routes>
         
             <Route path="/cart" element= {<Cart />}/>
             <Route path="/menu" element= {<Menu/>}/>
        
             <Route path="/about" element= {<AboutUs />}/>
             <Route path="/contect" element= {<Contect/>}/>
             <Route path="/" element= {<Home/>}/>
           
             </Routes>
             <Footer/>
      </BrowserRouter> 
   
      
 
  );
}

export default App;
