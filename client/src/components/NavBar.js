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
          to="/myreviews"
          className= {({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
            }
        >
        My Reviews
        </NavLink>
        <NavLink
          to="/meals"
          className= {({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
            }
        >
        Find a Meal
        </NavLink>
        <NavLink
          to="/review"
          className= {({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
            }
        >
        Create Review
        </NavLink>
        <NavLink
          to="/"
          className= {({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "pending" : ""
            }
          onClick={handleClick}>
        Log Out
        </NavLink>
      </nav>
  )
}

export default NavBar