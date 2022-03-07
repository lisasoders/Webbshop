import React from 'react'
import styled from 'styled-components'
import Cart from './Cart'
import { Link } from 'react-router-dom'
import { BiCartAlt } from "react-icons/bi";
import { Route} from 'react-router-dom'




function Header({items, setItems}) {

  
  return (
    <div>
    <Style>
      <div>
        <h1>Car shop</h1>
        <nav className="nav-menu">
        <Link to="/">Produkter</Link>
        <Link  className="cart-icon" to="/cart/"><BiCartAlt  /></Link>
        </nav>
      </div>
    </Style>
    <div>
     <Route path="/cart"> <Cart items={items} setItems={setItems}/></Route>
     </div>
     </div>
  )
}


const Style = styled.div`
padding: 1px;
text-align: center;
background: black;
color: white
`
export default Header