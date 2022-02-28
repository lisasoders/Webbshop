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
 
    <div className="product-page">
      <h1>Produkter</h1>
      {products.map((product)=> (
        <div key={product.id} className="product-container">
          <img className="product-img" src={product.url} alt="cars"></img>
          <p>{product.price} Kr</p>
          <Link to={`/product/${product.id}`}><p>{product.title}</p></Link>
          <button onClick={() => handleClick(product)}>Lägg i varukorg</button>
        </div>
      ))}
    </div>
   
   
  )
}



export default Products

// <p><Link to={`/product/${product.title}`}>{product.title}</Link></p>