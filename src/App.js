import React from "react";
import "./App.css";
import Nav from "./Nav";
import Navlinks from "./Navlinks";
import Login from "./Login";
import Home from "./Home";
import Checkout from "./Checkout";
import Footer from "./Footer";
import ContactForm from "./ContactForm";
import ProductList from "./ProductList";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
            <Footer />
          </Route>
          <Route path="/contact">
            <ContactForm />
            <Footer />
          </Route>
          <Route exact="/products">
            <ProductList />
            <Footer />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
