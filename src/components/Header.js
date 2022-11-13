import React from "react";
import Features from "./Features";
import { NavLink as Routerlink } from "react-router-dom";
import LogOut from "./LogOut";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = ({ Authenticated, setAuthenticated }) => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <span class='navbar-brand mb-0 ms-3 h1'>Entity Formatting Portal</span>
      {Authenticated ? (
        <LogOut setAuthenticated={setAuthenticated} />
      ) : (
        <span></span>
      )}
    </nav>
  );
};

export default Header;
