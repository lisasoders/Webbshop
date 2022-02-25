import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Products() {

  const [products, setProducts] = useState([])

  const fetchData = async () => {
    try{
      const response = await fetch('https://codexplained.se/cars.php')
      const data = await response.json() 
      setProducts(data)
    } catch(error){

    }
  }

useEffect(() => {
  fetchData();
})

const handleClick = (product) => {
  console.log(product)
  
}

  return (
 
    <div>
      <h1>Products</h1>
      {products.map((product)=> (
        <div>
         <img className="product-img" src={product.url} alt="cars"></img>
          <p><Link to={`/product/${product.title}`}>{product.title}</Link></p>
          <p>{product.price} Kr</p>
          <button onClick={() => handleClick(product)}>Add to cart</button>
        </div>
      ))}
    </div>
   
   
  )
}



export default Products