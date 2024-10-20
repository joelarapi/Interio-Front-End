import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import notifIcon from '../icons/notifications-bell-icon.png';

const Navbar = () => {
  return (
    <div className={classes.navbar}>
    <p className={classes.webName}>Interio</p>


    <div className={classes.leftSide}>

      <NavLink>Home</NavLink>
      <NavLink>My Requests</NavLink>
      <NavLink>Profile</NavLink>
      <img src={notifIcon} className={classes.notifIcon}/>

    </div>
    </div>
  )
}

export default Navbar