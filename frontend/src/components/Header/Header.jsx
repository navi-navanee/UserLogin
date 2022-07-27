import React from 'react'
import './header.css'
import Button from '@mui/material/Button';
import { NavLink, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { reset, logout } from '../../../features/auth/authSlice'

const Header = () => {

    const Navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)
  
    const Logout = (e) => {
    //   dispatch(logout())
      Navigate('/')

    }

  return (
    <div>
         <navbar className="UserHeader">
        <div
          className="navbar"
          style={{ zIndex: '9', boxShadow: 'revert-layer' }}
        >
          <NavLink style={{ textDecoration: 'none' }} to="/">
            <span className="LOGO primary-Color">WELCOME</span>
          </NavLink>
            <span onClick={Logout} className="logouticn">
              Logout
            </span>
        </div>
      </navbar>
    </div>
  )
}

export default Header