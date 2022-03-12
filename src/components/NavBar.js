import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

  const linkStyles = {
    display: "inline",
    width: "70px",
    padding: "4px",
    margin: "0 6px 6px",
    color: "black",
  };

  return (
  <div>
    <NavLink to="/" exact style={linkStyles} activeStyle={{background:"khaki"}}>Home</NavLink>
    <NavLink to="/characters" exact style={linkStyles} activeStyle={{background:"khaki"}}>Characters</NavLink>
    <NavLink to="/episodes" exact style={linkStyles} activeStyle={{background:"khaki"}}>Episodes</NavLink>
  </div>
  )}

export default NavBar;