import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingBasket,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Nav() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <nav className="nav">
      <div className="nav-left">
        <Link to="/">
          <div className="nav-logo">
            <FontAwesomeIcon icon={faHouse} className="nav-homeIcon" />
          </div>
        </Link>
      </div>
      <div className="nav-search">
        <input type="text" className="nav-searchInput" />
        <FontAwesomeIcon icon={faSearch} className="nav-searchIcon" />
      </div>
      <div className="nav-nav">
        <Link to="/products" className="nav-link">
          <div className="nav-option">
            <span className="nav-optionLineOne"> View</span>
            <span className="nav-optionLineTwo"> Products</span>
          </div>
        </Link>
        <Link to="/login" className="nav-link">
          <div className="nav-option">
            <span className="nav-optionLineOne"> Hello, User</span>
            <span className="nav-optionLineTwo"> Sign</span>
          </div>
        </Link>
        <Link to="/" className="nav-link">
          <div className="nav-option">
            <span className="nav-optionLineOne"> Returns</span>
            <span className="nav-optionLineTwo"> & orders</span>
          </div>
        </Link>
      </div>
      <NavLink
        className="nav-link"
        activeClassName="is-active"
        to="/checkout"
        exact
      >
        <div className="nav-optionBasket">
          <FontAwesomeIcon icon={faShoppingBasket} />
          <span className="nav-optionLineTwo nav-productCount">
            {basket?.length}
          </span>
        </div>
      </NavLink>
    </nav>
  );
}

export default Nav;
