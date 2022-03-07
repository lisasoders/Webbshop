import React from 'react'


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

export default Cart