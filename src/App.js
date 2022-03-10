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
const addProduct= (addItems) =>{
  setItems([
    ...items,
    addItems, 
  ])

}
const addCart = (items) => {
  setItems ([ 
    ...items,
])
}

  return (
    <Router>
      <div className="App">
        <Header items={items} setItems={setItems}/>
        <Switch>
        {/* <Route path='/cart' exact component={Cart}/> */}
        {/* <Cart /> */}
          <Route path="/cart"></Route>
          <Route 
          path="/checkout"
          exact
          render={(props) => <Checkout {...props} items={items} setItems={setItems} />}
          />
          <Route 
            path="/product/:id" 
            exact 
            // component={Product} 
            render={(props) => <Product {...props} addProduct={addProduct} />}
          />
          <Products addProduct={addProduct}/>
        </Switch>

      <Footer/>
      </div>
    </Router>
  );
}

export default App;
