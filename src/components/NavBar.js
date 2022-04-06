import React from "react";
import { NavLink } from "react-router-dom";

function NavBar( {episodes} ) {

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
    {episodes.map((season) => <div key={season.id}> 
      <NavLink to= {`/season/${season.season}`} exact style={linkStyles} activeStyle={{background:"khaki"}}>Season {season.season}</NavLink>
      </div>
      )}
    {/* <NavLink to="/season/:id" exact style={linkStyles} activeStyle={{background:"khaki"}}>Season</NavLink> */}
    {/* {["season/1","season/2","season/3","season/4","season/5","season/6","season/7","season/8","season9/","season/10","season/11","season/12"].map((n)=> <NavLink to={n} exact style={linkStyles} activeStyle={{background:"khaki"}}>{n}</NavLink>)} */}
  </div>

  )}

export default NavBar;