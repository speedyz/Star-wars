import React from 'react';
import styles from './PersonLinkBack.module.css'
import { useNavigate} from 'react-router';
import iconBack from '../../../static/Icons/icon_left.svg'

const PersonLinkBack = () => {
    const history =  useNavigate();
    const handleGoBack = (e: any) => {
        e.preventDefault();
      history(-1)
    }
    return (
        <a
            href="#"
            onClick={handleGoBack}
            className={styles.link}>
                <img className={styles.link__img} src={iconBack} alt="Go back" />
                <span>Go back</span>
        </a>
    );
};

export default PersonLinkBack;