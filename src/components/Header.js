import React from 'react'
import {Link} from 'react-router-dom'
// import { useCart } from "./Cart";
// import CartPage from '../pages/Cart';
import Cart from './Cart'
import { BiCartAlt } from "react-icons/bi";
import { Route} from 'react-router-dom'
import styled from 'styled-components';

// function Header (){
//   const products = useCart();






function Header({items, setItems, addProduct}) {

  // const itemCount = items.reduce((quantity, items) => {
  //   return quantity + +items.quantity;
  // }, 0);
  // const subTotal = items.reduce((total, product) => {
  //   return total + items.price * +product.quantity;
  // }, 0);
  
  // const onChangeProductQuantity = (index, event) => {
  //   const value = event.target.value;
  //   const valueInt = parseInt(value);
  //   const cloneProducts = [...items];
  
  //   // Minimum quantity is 1, maximum quantity is 100, can left blank to input easily
  //   if (value === "") {
  //     cloneProducts[index].quantity = value;
  //   } else if (valueInt > 0 && valueInt < 100) {
  //     cloneProducts[index].quantity = valueInt;
  //   }
  //   console.log(cloneProducts, items);
  //   setItems(cloneProducts);
  // };

  return (
    <>
        <div className="headerTop">
        Enkel beställning och snabb leverans
      </div>
      <div>
         {/* <h1>Hemsida</h1>
     <div>
       <Link to="/">Hemsida</Link> | 
       <Link classmName="dropdown" to="/cart"><BiCartAlt className="cart-icon"/>({products.length}{Cart.js})
       </Link>
       </div> */}
        <h1 className='carShop'>Car shop</h1>
        <nav className="nav-menu">
        <Link className="productName"to="/">Produkter</Link>
        <div className='dropdown'>
            <Link  className="cart-icon" to="/cart/"><BiCartAlt/> <CartIcon><span>{items.length}</span></CartIcon></Link>
        </div>
        </nav>
      </div>
    <div>
     <Route path="/cart"> <Cart items={items} setItems={setItems} addProduct={addProduct}/>
     </Route>
     </div>
     </>
  )
}

const CartIcon = styled.span 
`
border: 1px solid black;
border-radius: 100px;
padding: 0px 10px 0px 10px;
background-color: black;
color: white;
margin: 5px;
`

export default Header 