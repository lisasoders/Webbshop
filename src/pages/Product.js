import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatchCart } from '../components/Cart';


function Product(props) {

  useEffect(() => {
    fetchProduct()
    console.log(props.match)
  }, [])

  const [product, setProduct] = useState({})

  const fetchProduct = async () => {
    const fetchProduct = await fetch(`https://codexplained.se/cars.php?id=${props.match.params.id}`)
    const product = await fetchProduct.json()
    setProduct(product)
    console.log(product)
  }

//   const dispatch = useDispatchCart();

// const toAddCart = (product) => {
  
//   console.log(product);
//   dispatch({ type: "ADD", product });
  
// }

// return (
//     <div className="description">
//       <h1>{product.title}</h1>
//       <p>{product.description}</p>
//       <img className="product-img" src={product.url} alt="car"></img>
//       <p>{product.storage}</p>
//       <button onClick={() => toAddCart(product)}>Lägg till i varukorg</button>


const toAddCart = (product) => {
  props.addProduct(product)
  console.log(product)
  
}
return (
    <div className="description-container">
      <div className="description-product">
        <h1>{product.title}</h1>
        <img className="product-img"  src={product.url} alt="car"></img>
        <p>{product.description}</p>
        <p>I lager: {product.storage}</p>
        <button className="addProductBtn" onClick={() => toAddCart(product)}>Lägg till i varukorg</button>
      </div>
    </div>
  )
}

export default Product


// import React from 'react'
// import { useState, useEffect } from 'react'

// function Product({match}) {

//   useEffect(() => {
//     fetchProduct()
//     console.log(match)
//   }, [])

//   const [product, setProduct] = useState({})

//   const fetchProduct = async () => {
//     const fetchProduct = await fetch(`https://codexplained.se/cars.php?id=${match.params.id}`)
//     const product = await fetchProduct.json()
//     setProduct(product)
//     console.log(product)
//   }
//   return (
//     <div>
//       <h1>{product.title}</h1>
//       <p>{product.description}</p>
//       <img src={product.url} alt="car"></img>
//     </div>
//   )
// }

// export default Product