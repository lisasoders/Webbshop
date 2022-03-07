import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatchCart } from '../components/Cart';

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
}, [])

const dispatch = useDispatchCart();

const toAddCart = (product) => {
  
  console.log(product);
  dispatch({ type: "ADD", product });
  
}

  return (
    <div className="product-page">
          <h1>Produkter</h1>
      {products.map((product)=> (
          <div key={product.id} className="product-container">
            <img className="product-img" src={product.url} alt="cars"></img>
             <p>{product.price}Kr</p>
            <Link to={`/product/${product.id}`}><p>{product.title}</p></Link>
             <button onClick={() => toAddCart(product)}>Lägg i varukorg</button>
           </div>
            
         ))}
            
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




// <p><Link to={`/product/${product.title}`}>{product.title}</Link></p>