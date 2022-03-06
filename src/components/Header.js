import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import { useCart } from "./Cart";


function Header (){
  const items = useCart();

  return (
    <Style>
      <div>
        <h1>Hemsida</h1>
    <div>
      <Link to="/">Hemsida</Link> | 
      <Link classmName="cartStore" to="/Cart"> Varukorg ({items.length})
      </Link>
      </div>
      </div>
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