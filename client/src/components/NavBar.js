import React from 'react'
import { NavLink } from 'react-router-dom'
import { logOut } from '../features/sessionsSlice'
import { useDispatch, useSelector } from 'react-redux'

const NavBar = () => {
  const dispatch = useDispatch()
  const loggedIn = useSelector(state => state.sessions.loggedIn)

  const handleClick = () => {
    fetch('/api/logout', {
      method: "DELETE"
    })
    dispatch(logOut())
  }

  if (!loggedIn) {
    return (
      <div>
      <nav id="navbar">
        <NavLink
          to="/login"
          className= {({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
            }
        >
        Log In
        </NavLink>
        <NavLink
          to="/signup"
          className= {({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
            }
        >
        Sign Up
        </NavLink>
      </nav>
    </div>
    )
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
      <button onClick={handleClick}>Log Out</button>
      </nav>
    </div>
  )
}

export default NavBar