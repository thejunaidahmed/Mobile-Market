import React from 'react'
import './Nav.css'
import { FaMobileScreenButton } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import { BiCart } from "react-icons/bi";
import { NavLink } from 'react-router-dom';
import { FaShoppingBag } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { RiContactsFill } from "react-icons/ri";
import { useSelector } from 'react-redux';

function Nav() {

    const updateCart = useSelector((state)=> state.cart)

  return (
      <div className='nav'>
          
          <div className='upper-nav'>
              <div className='logo'>
                  <span>TheMobileMarket <FaMobileScreenButton/></span>
              </div>
              <div className='input-items'>
              <input type='text' placeholder='Search...' />
              <button><IoMdSearch/></button>
              </div>

              <NavLink to="/cart"><div className='cart'><BiCart /> <span>{updateCart.length}</span></div></NavLink>
              
          </div>

          <div className='lower-nav'>
              <div>
                  <li><NavLink to="/">Home <FaHome/></NavLink></li>
                  <li><NavLink to="shop">Shop <FaShoppingBag/></NavLink></li>
                  <li> <NavLink to="cart">Cart <PiShoppingCartSimpleFill/></NavLink></li>
                  <li><NavLink to="contact">Contact <RiContactsFill/></NavLink></li>
              </div>
          </div>

    </div>
  )
}

export default Nav