import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <nav className="header">
      <img
        className="header-logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="logo"
      />
      <div className="header-search">
        <input type="text" className="header-searchInput" />
        <FontAwesomeIcon icon={faSearch} className="header-searchIcon" />
      </div>
      <div className="header-nav">
        <a href="#">
          <div className="header-option">
            <span className="header-optionLineOne"> Hello, User</span>
            <span className="header-optionLineTwo"> Sign</span>
          </div>
        </a>
        <a href="#">
          <div className="header-option">
            <span className="header-optionLineOne"> Returns</span>
            <span className="header-optionLineTwo"> & orders</span>
          </div>
        </a>
        <a href="#">
          <div className="header-option">
            <span className="header-optionLineOne"> Your</span>
            <span className="header-optionLineTwo"> Prime</span>
          </div>
        </a>
      </div>
      <a href="#">
        <div className="header-optionBasket">
          <FontAwesomeIcon icon={faShoppingBasket} />
          <span className="header-optionLineTwo header-basketCount">2</span>
        </div>
      </a>
    </nav>
  );
}

export default Header;
