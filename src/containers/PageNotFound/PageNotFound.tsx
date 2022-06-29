import React from 'react';
import style from './PageNotFound.module.css'

const PageNotFound = () => {
    return (
        <div className={style.text}>
            <h1>404 - PAGE NOT FOUND</h1>
            <p>We’ve dispatched a rescue R2-D2 to guide you back to safety.</p>
        </div>
    );
};

export default PageNotFound;