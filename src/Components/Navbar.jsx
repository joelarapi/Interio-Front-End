import React from 'react'
import classes from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
import notifIcon from '../icons/notifications-bell-icon.png';

const Navbar = () => {
  return (
    <div className={classes.navbar}>
    <p>Interio</p>


    <div className={classes.leftSide}>

      <NavLink>Home</NavLink>
      <NavLink to='/businessprofile'>Profile</NavLink>
      <button>Log Out</button>
      <img src={notifIcon} className={classes.notifIcon}/>

    </div>
    </div>
  )
}

export default Navbar