import React from 'react';
import classes from './Navbar.module.scss';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (

        <>
            <input id="burger" type="checkbox"/>

            <label htmlFor="burger">
                <span>
                </span>
                <span>
                </span>
                <span>
                </span>
            </label>

            <nav>
                <ul>
                    <li>
                        <NavLink to="/monday"
                                 className={classes.navLink}
                                 activeClassName={classes.active}>Monday
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/tuesday"
                                 className={classes.navLink}
                                 activeClassName={classes.active}>Tuesday
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;
