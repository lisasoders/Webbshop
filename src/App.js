import './App.css';
import React from 'react';
import Products from './pages/Products';
import Header from './components/Header';
import Product from './pages/Product';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
        
        <Route path="/product/:id" exact component={Product} />
        <Products />
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
