import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import styles from './Header.module.css'
import Favorite from "../Favorite";
import droid from '../../static/Icons/droid.png'
import station from '../../static/Icons/station.svg'
import sword from '../../static/Icons/sword.png'
import {THEME_DARK, THEME_LIGHTS, THEME_NEUTRAL, useTheme} from "../../context/ThemeProvider";

const Header = () => {
    const isTheme = useTheme();
    const [icon, setIcon] = useState(droid);
    useEffect(() => {
        switch (isTheme.theme) {
            case THEME_LIGHTS:
                setIcon(sword);
                break;
            case THEME_DARK:
                setIcon(station);
                break;
            case THEME_NEUTRAL:
                setIcon(droid);
                break;
            default:
                setIcon(droid)
        }
    }, [isTheme]);
    return (
        <div className={styles.container}>
            <img className={styles.logo} src={icon} alt="logo"/>
            <ul className={styles.list__container}>
                <li><NavLink to="/">Home </NavLink></li>
                <li><NavLink to="/people/?page=1">Characters</NavLink></li>
                <li><NavLink to="/search">Search</NavLink></li>
            </ul>
            <Favorite/>
        </div>
    );
};

export default Header;