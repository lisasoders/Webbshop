import React from 'react'
import { useState, useEffect } from 'react'

function Product({match}) {

  useEffect(() => {
    fetchProduct()
    console.log(match)
  }, [])

  const [product, setProduct] = useState({})

  const fetchProduct = async () => {
    const fetchProduct = await fetch(`https://codexplained.se/cars.php?id=${match.params.id}`)
    const product = await fetchProduct.json()
    setProduct(product)
    console.log(product)
  }


return (
    <div className="description-container">
      <div className="description-product">
        <h1>{product.title}</h1>
        <img className="product-img"  src={product.url} alt="car"></img>
        <p>{product.description}</p>
        <p>I lager: {product.storage}</p>
        <button>Lägg till i varukorg</button>
      </div>
    </div>
  )
}

export default Product