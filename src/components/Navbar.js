import React from "react";
import logo from "../images/logo.png";

const logo_style = {
  height: '4rem'
}

const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark rounded"
        style={{ maxWidth: "1024px", margin: "auto" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#home">
            <img src={logo} style={{ maxHeight: "28px", margin: "auto" }} className="rounded" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#know_us">
                  Know Us
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link" href="#our_creations">
                  Our Creations
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#performances">
                  Performances
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#initiations">
                  Our Initiations
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact_us">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
