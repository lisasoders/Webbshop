import React from 'react'
import { useState, useEffect } from 'react'




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
          <img src={product.url} alt="cars"></img>
          <p>{product.title}</p>
          <p>{product.price} Kr</p>
          <button onClick={() => handleClick(product)}>Add to cart</button>
        </div>
      ))}
    </div>
   
  )
}


export default Products