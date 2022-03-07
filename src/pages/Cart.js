import React from 'react';
import {useCart,  useDispatchCart} from "../components/Cart";


const CartItem = ({ product, index, handleRemove}) => {
  return (
    <div href="#0">
      <div>
        <img className="product-img" src={product.url} alt="cars"></img>
      </div>
      <div>
        <h1>{product.title}</h1>
        <dl>
        <dt className="clip">Pris</dt>
        <dd className="nummerM10">
          {product.price.toLocaleString("en")}kr
          </dd>
        </dl>
        {/* <button onClick={() => handleRemove(index)}>Remove from cart</button> */}
      </div>
    </div>
  )
}
  
export default function Cart() {
  const product = useCart();
  const dispatch = useDispatchCart();
  const totalPrice = product.reduce((total, b) => total + b.price, 0);


 /*  const handleRemove = (index) => {
    dispatch({ type: "REMOVE", index });
  }; */


if (product.length === 0) {
  return (
    <main>
      <p> Cart is Empty </p>
    </main>
  );
}
return (
  <main>
    <p>
       total pris: {" "}
      {totalPrice.toLocaleString("en")} kr
    </p>
    {product.map((product, index) =>(
      <CartItem 
      // handleRemove={handleRemove}
      key={index}
      product={product}
      index={index}
        />
    ))}
  </main>
);
}