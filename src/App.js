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
const addProduct = (product) => {
  const exist = items.find(x => x.id === product.id)
  if(exist){
    setItems(setItems.map(x => x.id === product.id ? {...exist, qty: exist.qty +1} : x 
      )
      );
  } else {
    setItems([...items, {...product, qty: 1}]);
  }
}
// const addProduct= (addItems) =>{
//   setItems([
//     ...items,
//     addItems, 
//   ])}


  return (
    <Router>
      <div className="App">
        <Header items={items} setItems={setItems}/>
        <Switch>
        {/* <Route path='/cart' exact component={Cart}/> */}
        {/* <Cart /> */}
          <Route path="/cart" addProduct={addProduct}></Route>
          <Route 
          path="/checkout"
          exact
          render={(props) => <Checkout {...props} items={items} setItems={setItems} addProduct={addProduct} />}
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
