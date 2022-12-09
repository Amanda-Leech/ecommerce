import "./App.css";
import Nav from "./Nav";
import Login from "./Login";
import Home from "./Home";
import Checkout from "./Checkout";
import Footer from "./Footer";
import PrivacyPolicy from "./PrivacyPolicy";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          s
          <Route
            path="/checkout"
            element={
              <>
                <Nav />
                <Checkout />
                <Footer />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <>
                <Nav />
                <Home />
                <Footer />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/privacy"
            element={
              <>
                <Nav />
                <PrivacyPolicy />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
