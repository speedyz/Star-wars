import React, {useEffect, useState} from 'react';
import style from './PageNotFound.module.css'
import {useNavigate} from "react-router";

const PageNotFound = () => {
    const [counter, setCounter] = useState(10);
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
        })
    },[counter])
    useEffect(() => {
        setTimeout(() => {
            navigate('/')
        }, 10000)
    })
    return (
        <div className={style.text}>
            <h1>404 - PAGE NOT FOUND</h1>
            <p>We’ve dispatched a rescue R2-D2 to guide you back to safety.</p>
            <p>The transition will be made in {counter} seconds </p>
        </div>
    );
};

export default PageNotFound;