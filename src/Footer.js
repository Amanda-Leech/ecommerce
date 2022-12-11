import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footerArea">
      <div className="footerArea-links">
        <div className="footerArea-linkArea">
          <strong>
            <Link to="/contact">Contact Us</Link>
          </strong>
        </div>
      </div>
    </div>
  );
}

export default Footer;
