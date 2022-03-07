import React from 'react'
import {useCart} from "../components/Cart";

const CheckoutItem = (product) => {
  return (
    <img className="product-img" src={product.url} alt="cars"></img>
)} 

export default function Checkout() {
  const product = useCart();
   return (
   <main>
     <p>
     {product.map((product) =>(
      <CheckoutItem 
      // handleRemove={handleRemove}
      product={product}
        />    
      ))}
    </p>
   </main>
   
  )

}

 