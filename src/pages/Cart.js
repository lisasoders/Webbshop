import React from 'react';
import {useCart,  useDispatchCart} from "../components/Cart";
import { Link } from 'react-router-dom'


const CartItem = ({ product, index, handleRemove}) => {
  return (
    <div href="#0">
      <div>
        <img className="product-img" src={product.url} alt="cars"></img>
      </div>
      <div>
        <h1>{product.title}</h1>
        <dl>
        <dt className="clip">Price</dt>
        <dd className="nummerM10">
          {product.price.toLocaleString("en", {
            style: "currency",
            currency: "KR"
          })}
          </dd>
        </dl>
        <button onClick={() => handleRemove(index)}>Remove from cart</button>
      </div>
    </div>
  )
}
  
export default function Cart() {
  const items = useCart();
  const dispatch = useDispatchCart();
  const totalPrice = items.reduce((total, b) => total + b.price, 0);


  const handleRemove = (index) => {
    dispatch({ type: "REMOVE", index });
  };


if (items.lenght === 0) {
  return (
    <main>
      <p> Cart is Empty </p>
    </main>
  );
}
return (
  <main>
    <p>
      total price: {" "}
      {totalPrice.toLocaleString("en", 
      {
        style: "currency",
        currency: "kr"
      }
      )}
    </p>
    {items.map((item, index) =>(
      <CartItem 
      handleRemove={handleRemove}
      key={index}
      product={item}
      index={index}
        />
    ))}
  </main>
);
}