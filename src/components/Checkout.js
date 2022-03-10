import React from 'react'
import { BsTrash } from "react-icons/bs"; 

// import {useCart} from "../components/Cart";


 function Checkout({items, setItems}) {
  // const product = useCart();

  const deleteItem = (item) => {
    
    let deletedItems = items.filter(a => a.id !== item.id)
    setItems(deletedItems)
     console.log(item.id)
 
   }



// const submitCheck = () => {
//     if(!this.state.firstName || !this.state.lastName){
//     } else if(this.state.phone.length < 10 || !this.state.phone){
//     } else if (!this.state.email.match(/@./g)) {
//       alert("Email is in the wrong format.")
//     } else {
//       this.setState({display: true})
//     }
//  }

 const resetForm = () => {
   if (items.length === 0) {
   } else {
    alert('Tack för köpet våra produkter!')
  }

  } 


  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   }
  
  console.log(items);
    const totalPrice = items.reduce((total, b) => total + b.price, 0);
    
  
  return (
  <div>
    <div class="row">
      <div class="col-75">
        <div class="checkout-container">
          <form onSubmit={resetForm}>
          
            <div class="row">
              <div class="col-50">
                <h3>Din adress</h3>
                <label for="fname">Förnamn</label>
                <input type="text" id="fname" name="firstname" placeholder="Otto"></input>
                <label for="fname">Efternamn</label>
                <input type="text" id="fname" name="firstname" placeholder="Kingstedt"></input>
                <label for="email">E-postadress</label>
                <input type="text" id="email" name="email" placeholder="förnamn@example.com"></input>
                <label for="adr">Gatuadress</label>
                <input type="text" id="adr" name="address" placeholder="Gustavslundsvägen 151 D"></input>
                <label for="city">Ort</label>
                <input type="text" id="city" name="city" placeholder="Bromma"></input>
    
                <div class="row">
                  <div class="col-50">
                    <label for="state">Land för utfärdande</label>
                    <input type="text" id="state" name="state" placeholder="Sverige"></input>
                  </div>
                  <div class="col-50">
                    <label for="zip">Postnummer</label>
                    <input type="text" id="zip" name="zip" placeholder="10000"></input>
                  </div>
                </div>
              </div>
    
              <div class="col-50">
                <h3>Betalning</h3>
                <label for="fname">Betalkort</label>
                <div class="icon-container">
                 
                </div>
                <label for="ccnum">Kortnummer</label>
                <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"></input>
                <div class="row">
                  <div class="col-50">
                    <label for="expyear">Sista giltighetsdag</label>
                    <input type="text" id="expyear" name="expyear" placeholder="MM/YY*"></input>
                  </div>
                  <div class="col-50">
                    <label for="cvv">CVV</label>
                    <input type="text" id="cvv" name="cvv" placeholder="111"></input>
                  </div>
                </div>
              </div>
              
            </div>
            <label>
              <input type="checkbox" checked="checked" name="sameadr"></input> Shipping address same as billing
            </label>
            <input type="submit" value="Köpa" class="buttonCheckout"></input>
          </form>
        </div>
      </div>
    <div className='checkout-25'>
      <div className='checkout-container'>
          {items.map(item =>(
            <div key={item.id}>
              <p>{item.title}</p>
              <img className="product-img" src={item.url} alt="car"></img>
          <div className='trashButton' onClick={() => deleteItem(item)}><BsTrash /></div>
            </div>
            
          ))}
          </div>
          <p className='totalPris'>
           Totalpris: {" "}
          {totalPrice.toLocaleString("en")} kr
          </p>
      </div>
    </div>
    
  </div>
   
  )
  
}
 

export default Checkout
 