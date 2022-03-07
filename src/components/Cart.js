import React, {useReducer, useContext, createContext} from 'react';

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


function Cart({items, setItems}) {

 

  const deleteItem = (item) => {
    
   let deletedItems = items.filter(a => a.id !== item.id)
   setItems(deletedItems)
    console.log(item.id)
   
  }

  return (
    <div>
      {items.map(item =>(
        <div key={item.id}>
          <p>{item.title}</p>
          <img className="product-img" src={item.url} alt="car"></img>
          <p>{item.price} kr</p>
          <button onClick={() => deleteItem(item)}>Ta bort</button>
        </div>
      ))}
    
    </div>
  )
}

// export const useCart = () => useContext(CartStateContext)
// export const useDispatchCart = () => useContext(CartDispatchContext)
export default Cart