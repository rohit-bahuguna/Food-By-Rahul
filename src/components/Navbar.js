import React,{useState} from 'react'
import '../Style/Navbar.css';
import Logo from '../img/logo.png'
import {Link} from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';



function Navbar() {
    const [openLinks, setOpenLinks] =useState(false);

    const toggleNavbar=()=>{
          setOpenLinks(!openLinks);
    };
  return (
    <>
     <div className="navbar">
        <div className="leftSide" id={openLinks ? "open" : "close"}>
            <img src={Logo} />
            <div className="hiddenLinks">
                <Link to='/'>Home</Link>
                <Link to='/menu'>Menu</Link>
                <Link to='/about'>About</Link>
                <Link to='/contect'>Contect</Link>
                <Link to='/cart'>Cart</Link>
            </div>
        </div>

        <div className="rightSide">
                <Link to='/'>Home</Link>
                <Link to='/menu'>Menu</Link>
                <Link to='/about'>About</Link>
                <Link to='/contect'>Contect</Link>
                <Link to='/cart'>Cart</Link>
                <button onClick={toggleNavbar}> <ReorderIcon /></button>
            </div> 
  
        </div>
     
   
    </>
  );
}

export default Navbar;
