import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


function Products({addProduct}) {
  
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
}, [])

const toAddCart = (product) => {
  addProduct(product)
  console.log(product)
  
}

  return (
     
    <div className="product-page">
      <h1>Produkter</h1>
      {products.map(product=> (
        <div key={product.id} className="product-card">
          <h3>{product.title}</h3>
          <img className="product-img" src={product.url} alt="cars"></img>
          <p className="product-price" >{product.price} Kr</p>
          <Link className="showProductBtn" to={`/product/${product.id}`}>Visa produkt</Link>
          <p className="addToCartBtn" to={`/cart/${product.id}`} onClick={() => toAddCart(product)}>Lägg i varukorg</p>
        </div>
      ))}
    </div>
   
  )
}



export default Products

