import './App.css';
import React from 'react';
import Products from './pages/Products';
import Header from './components/Header';
import Product from './pages/Product';
import Footer from './components/Footer';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
        <Route path="/product/:id" exact component={Product} />
        <Route path='/cart' exact component={Cart}/>
        <Products />
        <Cart />
        <Route path='/checkout' exact component={Checkout}/>
        <Checkout />
        </Switch>
        {/* <Footer /> */}

        
      </div>
    </Router>
  );
}

export default App;
