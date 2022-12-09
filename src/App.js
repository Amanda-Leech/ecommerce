import "./App.css";
import Nav from "./Nav";
import Login from "./Login";
import Home from "./Home";
import Checkout from "./Checkout";
import Footer from "./Footer";
import PrivacyPolicy from "./PrivacyPolicy";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Nav />
            <Checkout />
            <Footer />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Nav />
            <Home />
            <Footer />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/privacy">
            <Nav />
            <PrivacyPolicy />
            <Footer />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
