import React from 'react';

import styles from './ErrorMessage.module.css'

const ErrorMessage = () => {
    return (
        <>
            <p className={styles.error__text}>
                Oops! You ran out of oxygen. <br/>
                The page you're looking for is now beyond our reach. <br/>
                Let's get you..
            </p>
        </>
    );
};

export default ErrorMessage;