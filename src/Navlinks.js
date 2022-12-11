import React from "react";
import "./Navlinks.css";
import { Link } from "react-router-dom";

function Navlinks() {
  return (
    <div className="navlinks">
      <div className="navlinks-outer">
        <div className="navlinks-inner">
          <Link to="/products" className="nav-link">
            Products
          </Link>
          <Link>Products</Link>
          <Link>Products</Link>
          <Link>Products</Link>
        </div>
      </div>
    </div>
  );
}

export default Navlinks;
