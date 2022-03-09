import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
  <div>
    <NavLink to="/">HomePage</NavLink>
    <NavLink to="/characters">Characters</NavLink>
    <NavLink to="/episodes">Episodes</NavLink>
  </div>
  )}

export default NavBar;