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
    <NavLink to="/episodes" exact style={linkStyles} activeStyle={{background:"khaki"}}>All Episodes</NavLink>
    <NavLink to="/suggestionbox" exact style={linkStyles} activeStyle={{background:"khaki"}}>Suggestions</NavLink>
    <div><br /></div>
    {[1,2,3].map((n)=> <p>{n}</p>)}
    <NavLink to="/season1" exact style={linkStyles} activeStyle={{background:"khaki"}}>Season 1</NavLink>
    <NavLink to="/season2" exact style={linkStyles} activeStyle={{background:"khaki"}}>Season 2</NavLink>
    <NavLink to="/season3" exact style={linkStyles} activeStyle={{background:"khaki"}}>Season 3</NavLink>
    <NavLink to="/season4" exact style={linkStyles} activeStyle={{background:"khaki"}}>Season 4</NavLink>
    <NavLink to="/season5" exact style={linkStyles} activeStyle={{background:"khaki"}}>Season 5</NavLink>
    <NavLink to="/season6" exact style={linkStyles} activeStyle={{background:"khaki"}}>Season 6</NavLink>
    <NavLink to="/season7" exact style={linkStyles} activeStyle={{background:"khaki"}}>Season 7</NavLink>
    <NavLink to="/season8" exact style={linkStyles} activeStyle={{background:"khaki"}}>Season 8</NavLink>
    <NavLink to="/season9" exact style={linkStyles} activeStyle={{background:"khaki"}}>Season 9</NavLink>
    <NavLink to="/season10" exact style={linkStyles} activeStyle={{background:"khaki"}}>Season 10</NavLink>
    <NavLink to="/season11" exact style={linkStyles} activeStyle={{background:"khaki"}}>Season 11</NavLink>
    <NavLink to="/season12" exact style={linkStyles} activeStyle={{background:"khaki"}}>Season 12</NavLink>
  </div>
  )}

export default NavBar;