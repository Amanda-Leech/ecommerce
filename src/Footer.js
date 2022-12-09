import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footerArea">
      <div className="footerArea-links">
        <div className="footerArea-linkArea">
          <strong>
            <Link to="/privacy">Privacy Policy</Link> | (801) 265-8472 | (800)
            678-7809 | info@gsutah.org
          </strong>
        </div>
      </div>
    </div>
  );
}

export default Footer;
