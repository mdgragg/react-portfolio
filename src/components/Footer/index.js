import React from "react";
import "./style.css";

function Footer() {
  return (
    <React.Fragment>
      <footer className="fixed-bottom justify-content-center">
        <div>
          <p>© Copyright Michael Gragg 2020 | 
          <a href="mailto:contact@michaeldgragg.com" target="new">
          &nbsp; contact@michaeldgragg.com
          </a>
          </p>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Footer;
