/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { faBell, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-light navbar-8 white">
      <div className="container">
        <a className="navbar-brand custom-logo-navbar" href="#"></a>
        <form>
          <div className="inner-addon right-addon">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="text-muted ml-2 custom-fa"
            />
            <input
              type="text"
              className="form-control ml-2"
              placeholder="Cari di sini ..."
            />
          </div>
        </form>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent15"
          aria-controls="navbarSupportedContent15"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <FontAwesomeIcon icon={faBell} />
        <FontAwesomeIcon icon={faUser} />
      </div>
    </nav>
  );
}