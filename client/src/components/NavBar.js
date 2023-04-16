import React from 'react'
import { NavLink } from 'react-router-dom'
import { logOut } from '../features/sessionsSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleClick = () => {
    fetch('/api/logout', {
      method: "DELETE"
    })
    dispatch(logOut())
    navigate("/")
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