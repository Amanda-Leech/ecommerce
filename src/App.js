import { BrowserRouter, Switch, Route } from "react-router-dom";

import Nav from "./Nav";
import Navlinks from "./Navlinks";
import Login from "./Login";
import Home from "./Home";
import Checkout from "./Checkout";
import Footer from "./Footer";
import ContactForm from "./ContactForm";
import ProductList from "./ProductList";
import Men from "./Men";
import Jewelry from "./Jewelry";
import Electronics from "./Electronics";
import Women from "./Women";
import Item from "./Item";
import About from "./About";

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
