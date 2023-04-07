import React from 'react'
import { NavLink } from 'react-router-dom'
import { logOut } from '../features/sessionsSlice'
import { useDispatch } from 'react-redux'

const NavBar = () => {
  const dispatch = useDispatch()
  const handleClick = () => {
    fetch('/api/logout', {
      method: "DELETE"
    })
    dispatch(logOut())
  }

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
      <button onClick={handleClick}>Log Out</button>
      </nav>
    </div>
  )
}

export default NavBar