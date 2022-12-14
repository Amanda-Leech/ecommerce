import { Link } from "react-router-dom";
import "./Navlinks.scss";

function Navlinks() {
  return (
    <div className="navlinks">
      <div className="navlinks-outer">
        <div className="navlinks-inner">
          <Link to="/men" className="nav-link">
            men's clothing
          </Link>
          <Link to="/jewelry" className="nav-link">
            jewelery
          </Link>
          <Link to="/electronics" className="nav-link">
            electronics
          </Link>
          <Link to="/women" className="nav-link">
            women's clothing
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navlinks;
