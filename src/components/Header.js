import React from "react";
import Features from "./Features";
import { NavLink as Routerlink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <a
        className='navbar-brand mx-2'
        href='#'
      >
        Entity Formatting Portal
      </a>
    </nav>
  );
};

export default Header;
