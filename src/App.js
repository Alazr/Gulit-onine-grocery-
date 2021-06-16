import React from "react";
import Home from "./components/home";
import GlobalStyles from './shared/globalStyles'
import {Switch,Route} from 'react-router-dom'
import ProductDetail from "./components/productDetail";
import Cart from "./components/cart";
import Register from './components/register'
import Login from './components/login'

function App() {

  return (
    <div className="App">
      <GlobalStyles/>
      <Switch>
        <Route path="/product/:id">
          <ProductDetail/>
        </Route>
        <Route path="/cart">
            <Cart/>
        </Route>
        <Route path="/register">
            <Register/>
        </Route>
        <Route path="/login">
            <Login/>
        </Route>
        <Route path="/" exact>
          <Home/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
