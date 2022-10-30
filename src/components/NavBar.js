import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
     <NavLink
     to = "/" exact>
      Home
     </NavLink>

    <NavLink 
    to = "/movies" exact>
      Movies
    </NavLink>

    <NavLink 
    to = "/directors" exact>
      Directors
    </NavLink>
    <NavLink 
    to = "/actors" exact>
      Actors
    </NavLink>
    </div>
  )
}

export default NavBar;

// This component needs to render four NavLink components. They will be for /, /movies, /directors, /actors, in this order (test checks for this).
