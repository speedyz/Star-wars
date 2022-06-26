import React from 'react';
import styles from './PersonPhoto.module.css'

type Props ={
    personPhoto: string,
    personName: string,
}

const PersonPhoto = ({personPhoto, personName}: Props) => {
    return (
        <div className={styles.container}>
            <img  className={styles.photo} src={personPhoto} alt={personName}/>

        </div>
    );
};

export default PersonPhoto;