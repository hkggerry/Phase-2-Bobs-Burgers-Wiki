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
    <NavLink to="/suggestionbox" exact style={linkStyles} activeStyle={{background:"khaki"}}>My Favorites</NavLink>
    <div><br /></div>
    {["Season1","Season2","Season3","Season4","Season5","Season6","Season7","Season8","Season9","Season10","Season11","Season12"].map((n)=> <NavLink to={n} exact style={linkStyles} activeStyle={{background:"khaki"}}>{n}</NavLink>)}
  </div>
  )}

export default NavBar;