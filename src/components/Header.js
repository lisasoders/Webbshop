import React from 'react'
import styled from 'styled-components'
import Cart from './Cart'
import { Link } from 'react-router-dom'
import { BiCartAlt } from "react-icons/bi";





function Header() {

  
  return (
    <Style>
      <div>
        <h1>Hemsida</h1>
        <Link  to="/cart/"><BiCartAlt className="cart-icon" /></Link>
      </div>
      
     <Cart />
    </Style>
  )
}


const Style = styled.div`
padding: 1px;
text-align: center;
background: #D3D3D3;
color: black;
`
export default Header