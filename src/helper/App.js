import { BrowserRouter, Switch, Route } from "react-router-dom";

import Nav from "../components/Nav";
import Navlinks from "../components/Navlinks";
import Login from "../components/Login";
import Home from "../components/Home";
import Checkout from "../components/Checkout";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import ProductList from "../components/ProductList";
import Men from "../components/Men";
import Jewelry from "../components/Jewelry";
import Electronics from "../components/Electronics";
import Women from "../components/Women";
import Item from "../components/Item";
import About from "../components/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Navlinks />
        <Switch>
          <Route exact path="/">
            <Home />
            <Footer />
          </Route>
          <Route path="/men">
            <Men />
          </Route>
          <Route path="/item/:id">
            <Item />
          </Route>
          <Route path="/electronics">
            <Electronics />
          </Route>
          <Route path="/women">
            <Women />
          </Route>
          <Route path="/jewelry">
            <Jewelry />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/contact">
            <ContactForm />
            <Footer />
          </Route>
          <Route path="/products">
            <ProductList />
            <Footer />
          </Route>
          <Route path="/about">
            <About />
            <Footer />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
