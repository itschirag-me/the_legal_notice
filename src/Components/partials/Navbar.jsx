import React from "react";
import NavbarItems from "./NavItems";
import Logo from "../assets/image/logo/logo1.png"
import { Link } from "react-router-dom";

const Navbar = ({ onToggle, currentRoute , onLinkToggle }) => {
  return (
    <div className="w-100">
      <nav className="container navbar navbar-expand-lg navbar-secondary bg-white">
        <Link className="navbar-brand" to="">
          <img src={Logo} width="100" height="65" alt="Logo" />
        </Link>
        <button
          onClick={onToggle}
          className="navbar-toggler focus-none"
          type="button"
        >
          <span className="material-icons-outlined h2 text-secondary">
            menu
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <NavbarItems
            currentRoute={currentRoute}
            onLinkToggle={onLinkToggle}
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
