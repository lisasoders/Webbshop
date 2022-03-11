import './App.css';
import React from 'react';
import Products from './pages/Products';
import Header from './components/Header';
import Product from './pages/Product';
import Footer from './components/Footer';
// import Cart from './pages/Cart';
// import Checkout from './pages/Checkout';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { useState } from 'react'



function App(products) {
  
const [items, setItems] = useState([])
const addProduct= (addItems) =>{
  setItems([
    ...items,
    addItems 
  ])
}




  return (
    <Router>
      <div className="App">
        <Header items={items} setItems={setItems}/>
        <Switch>
        {/* <Route path='/cart' exact component={Cart}/> */}
        {/* <Cart /> */}
          {/* <Route path='/checkout' exact component={Checkout}/> */}
          <Route path="/cart"></Route>
          <Route 
            path="/product/:id" 
            exact 
            // component={Product} 
            render={(props) => <Product {...props} addProduct={addProduct} />}
          />
          <Products addProduct={addProduct}/>
        </Switch>
        {/* <Footer /> */}

      </div>
    </Router>
  );
}

export default App;
