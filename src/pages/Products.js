import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import { useDispatchCart } from '../components/Cart';
import {motion} from 'framer-motion'

// function Products() {

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

// const dispatch = useDispatchCart();

// const toAddCart = (product) => {
  
//   console.log(product);
//   dispatch({ type: "ADD", product });

const toAddCart = (product) => {
  addProduct(product)
  console.log(product)
}






  return (
    // <div className="product-page">
    //       <h1>Produkter</h1>
    //   {products.map((product)=> (
    //       <div key={product.id} className="product-container">
    //         <img className="product-img" src={product.url} alt="cars"></img>
    //          <p>{product.price}Kr</p>
    //         <Link to={`/product/${product.id}`}><p>{product.title}</p></Link>
    //          <button onClick={() => toAddCart(product)}>Lägg i varukorg</button>
    //        </div>
            
    //      ))}
            
    //      </div>
    
     
    <div className="product-page">
      <div className='productCardcontainer'>
      <motion.h1 animate={{rotate: 360}}>Produkter</motion.h1>
      {products.map(product=> (
        <div key={product.id} className="product-card">
          <h3>{product.title}</h3>
          <img className="product-img" src={product.url} alt="cars"></img>
          <p className="product-price" >{product.price.toLocaleString("en")} Kr</p>
          <div className="cardbuttons">
          <Link className="showProductBtn" to={`/product/${product.id}`} /* style={{height:"25px"}} */>Visa produkt</Link>
          <div>{product.length === 0 && <div>Kassa är tom</div>}</div>
          <p className="addToCartBtn" to={`/cart/${product.id}`} onClick={() => toAddCart(product)}>Lägg i varukorg</p>
        </div>
        </div>
      ))}
      </div>
    </div>   
  )
}
export default Products


// const pageProducts = 'products';
// const pageCart = 'cart'; 


// function Products() {

//   const [products, setProducts] = useState([]);
//   const [cart, setCart,] = useState('products');
//   const [page, setPage] = useState(' cart');


//   const fetchData = async () => {
//     try{
//       const response = await fetch('https://codexplained.se/cars.php')
//       const data = await response.json() 
//       setProducts(data)
//     } catch(error){

//     }
//   }

// useEffect(() => {
//   fetchData();
// })

// const toAddCart = (product) => {
//   console.log('test addTocart')
//   setCart([...cart, product]);
  
// };

// const navigateTo = () => (cart)

//   return (
 
//     <div className="product-page">
//       <h1>Produkter</h1>
//       <button onClick={() => navigateTo(pageCart)}>Till varukorg({cart.length})</button>
//       {products.map((product)=> (
//         <div key={product.id} className="product-container">
//           <img className="product-img" src={product.url} alt="cars"></img>
//           <p>{product.price} Kr</p>
//           <Link to={`/product/${product.id}`}><p>{product.title}</p></Link>
//           <button onClick={() => toAddCart(product)}>Lägg i varukorg</button>
//         </div>
        
//       ))}
        
//     </div>

   
   
//   )
// }
