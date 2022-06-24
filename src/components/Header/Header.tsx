import React from 'react';
import {NavLink} from "react-router-dom";
import {inspect} from "util";
import styles from './Header.module.css'
const Header = () => {
    return (
        <div className={styles.container}>
            <ul className={styles.list__container}>
                <li><NavLink to="/">Home </NavLink></li>
                <li><NavLink to="/people/?page=1">People</NavLink></li>
            </ul>

        </div>
    );
};

export default Header;