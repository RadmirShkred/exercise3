import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={classes.navbar}>
            <NavLink className={classes.item} to="/monday">Monday</NavLink>
            <NavLink className={classes.item} to="/tuesday">Tuesday</NavLink>
        </div>
    );
}

export default Navbar;
