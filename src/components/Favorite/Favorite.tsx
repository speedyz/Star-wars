import React, {useEffect, useState} from 'react';
import bookmark from '../../static/Icons/bookmark.svg'
import styles from './Favorite.module.css'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const Favorite = () => {
    const [count, setCount] = useState(0);

    // @ts-ignore
    const storeData = useSelector(state => state.favoriteReducer);

    useEffect(() => {
        const length = Object.keys(storeData).length;
        // @ts-ignore
        length.toString().length > 2 ? setCount('...') : setCount(length);
    });

    return (
        <div className={styles.container}>
            <Link to="/favorites">
                <span className={styles.counter}>{count}</span>
                <img className={styles.bookmark} src={bookmark} alt="Favorites"/>
            </Link>
        </div>
    )
}

export default Favorite;
