import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {

  return (
    <div>
      <nav id="navbar">
        <NavLink
          to="/"
          className= {({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
            }
        >
        Home
        </NavLink>
        <NavLink
          to="/meals"
          className= {({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
            }
        >
        Meals
        </NavLink>
        <NavLink
          to="/restaurants"
          className= {({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
            }
        >
        Restaurants
        </NavLink>
        <NavLink
          to="/review"
          className= {({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
            }
        >
        Create Review
        </NavLink>
      </nav>
    </div>
  )
}

export default NavBar