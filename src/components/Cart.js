import React, {useReducer, useContext, createContext} from 'react';
import Checkout from './Checkout';
import {Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import { BsTrash } from "react-icons/bs"; 




// const CartStateContext = createContext()
// const CartDispatchContext = createContext()

// const reducer = (state, action) => {
//     switch(action.type) {
//         case "ADD":
//             return [...state, action.product];
//             case "REMOVE":
//       const newArr = [...state];
//       newArr.splice(action.index, 1);
//       return newArr;
//         default: 
//         throw new Error(`unknown action ${action.type}`)
//     }
// }

// export const CartProvider = ({children}) => {
//     const [state, dispatch] = useReducer(reducer, []);
//     return (
//         <CartDispatchContext.Provider value={dispatch}>
//             <CartStateContext.Provider value={state}>
//                 {children}
//                 </CartStateContext.Provider>
//         </CartDispatchContext.Provider>
//     )


function Cart({ items, setItems}) {

  // const deleteAllItems = (items) => {

  // }

  const deleteItem = (item) => {
    
   let deletedItems = items.filter(a => a.id !== item.id)
   setItems(deletedItems)
    console.log(item.id)

  }


  const totalPrice = items.reduce((total, b) => total + b.price, 0); 

   
  if (items.length === 0) {
    return (
      <main>
        <p> Varukorg är tom </p>
      </main>
    );
  }

  return (
    <div className='checkout-container'>
    <div className='.checkout-item'>
    <div className='itemCart'>
    <Link className="addCheckout"to="/checkout/">Kassa</Link>
           <p className='TotalPris'>
       totalpris: {" "}
      {totalPrice.toLocaleString("en")} kr
      </p>
      {items.map(item =>(
        <div key={item.id}>
          <p>{item.title}</p>
          <img className="product-img" src={item.url} alt="car"></img>
          <p>{item.price} kr</p>
          <div className='trashButton' onClick={() => deleteItem(item)}><BsTrash /></div>
          {/* <button onClick={() => deleteAllItems(items)}>Ta bort allt</button> */}
        </div>
      ))}
      </div>
      </div>  
      </div>
    
    
  )
  
  
}

// export const useCart = () => useContext(CartStateContext)
// export const useDispatchCart = () => useContext(CartDispatchContext)
export default Cart