import React from "react";
import { Switch, Route } from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Details from "./components/Details";
import Cart from "./components/Cart/Cart";
import Default from "./components/Default";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Modal from "./components/Modal";


function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={ProductList}></Route>
        <Route path="/details" component={Details}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route path="/" component={Default}></Route>
      </Switch>
      {/* <ProductList></ProductList>
      <Details></Details>
      <Cart></Cart> */}
      {/* <Default></Default> */}
      <Modal></Modal>
    </React.Fragment>

  );
}

export default App;
