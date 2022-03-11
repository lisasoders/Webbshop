import './App.css';
import React from 'react';
import Products from './pages/Products';
import Header from './components/Header';
import Product from './pages/Product';
import Footer from './components/Footer';
// import Cart from './pages/Cart';
import Checkout from './components/Checkout';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { useState } from 'react'



function App() {

const [items, setItems] = useState([])
const addProduct = (addItems) =>{
  setItems([
    ...items,
    addItems, 
  ])}
  
  // const onChangeProductQuantity = (index, event) => {
  //   const value = event.target.value;
  //   const valueInt = parseInt(value);
  //   const cloneProducts = [...items];
  
  //   // Minimum quantity is 1, maximum quantity is 100, can left blank to input easily
  //   if (value === "") {
  //     cloneProducts[index].quantity = value;
  //   } else if (valueInt > 0 && valueInt < 100) {
  //     cloneProducts[index].quantity = valueInt;
  //   }
  //   console.log(cloneProducts, items);
  //   setItems(cloneProducts);
  // };



  return (
    <Router>
      <div className="App">
        <Header items={items} setItems={setItems}/>
        <Switch>
        {/* <Route path='/cart' exact component={Cart}/> */}
        {/* <Cart /> */}
          <Route path="/cart" ></Route>
          <Route 
          path="/checkout"
          exact
          render={(props) => <Checkout {...props} items={items} setItems={setItems} addProduct={addProduct} />}
          />
          <Route 
            path="/product/:id" 
            exact 
            // component={Product} 
            render={(props) => <Product {...props} addProduct={addProduct}/>}
          />
          <Products addProduct={addProduct}/>
        </Switch>
      <Footer/>
      </div>
    </Router>
  );
}

export default App;
