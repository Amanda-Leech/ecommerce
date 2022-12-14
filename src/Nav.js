import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingBasket,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import "./Nav.scss";

function Nav() {
  const [{ basket, user }, dispatch] = useStateValue();

  const logoutUser = () => {
    if (user) {
      auth.signOut();
    }
  };

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
        <Link to={!user && "/login"} className="nav-link">
          <div onCLick={logoutUser} className="nav-option">
            <span className="nav-optionLineOne"> Hello, {user?.email}</span>
            <span className="nav-optionLineTwo">
              {" "}
              {user ? "Signout" : "sign in"}{" "}
            </span>
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
