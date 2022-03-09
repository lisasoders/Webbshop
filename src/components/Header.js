import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
// import { useCart } from "./Cart";
// import CartPage from '../pages/Cart';
import Cart from './Cart'
import { BiCartAlt } from "react-icons/bi";
import { Route} from 'react-router-dom'

// function Header (){
//   const products = useCart();






function Header({items, setItems}) {
  return (
    <div>
      <div className="headerTop">
        Enkel beställning och snabb leverans
      </div>
    <Style>
      <div>
         {/* <h1>Hemsida</h1>
     <div>
       <Link to="/">Hemsida</Link> | 
       <Link classmName="dropdown" to="/cart"><BiCartAlt className="cart-icon"/>({products.length}{Cart.js})
       </Link>
       </div> */}
        
        <nav className="nav-menu">
        <h1>Car shop</h1>
        <Link to="/">Produkter</Link>
        <Link  className="cart-icon" to="/cart/"><BiCartAlt style={{color: "black", marginRight: "10px"}}  /></Link>
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
background: white;
color: black
`
export default Header 