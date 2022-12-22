import React from "react";
import { faCartShopping, faUtensils } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
library.add(faCartShopping, faUtensils);

function Navbar() {
  const totalItems = useSelector((state) => state.entities.cart.totalItems);
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid text-light">
        <Link className="navbar-brand text-info" to="/">
          <span className="me-1">
            <FontAwesomeIcon icon="fa-solid fa-utensils" />
          </span>
          Hayan's Kitchen
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <span className="navbar-text">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link
                  className="nav-link active text-info"
                  aria-current="page"
                  to="/"
                >
                  Hello Hayan!
                </Link>
              </li>
              <li className="nav-item me-2">
                <Link
                  type="button"
                  className="btn position-relative text-info"
                  to="/cart"
                >
                  <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
                  {totalItems !== 0 && (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {totalItems}
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  )}
                </Link>
              </li>
            </ul>
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
