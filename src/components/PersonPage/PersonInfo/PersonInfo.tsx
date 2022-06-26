import React from 'react';

import styles from './PersonInfo.module.css'


type Props = {
    personInfo: any;
    title: string;
    data: string;
}
const PersonInfo = ({personInfo}: Props) => {
    return (
        <div className={styles.wrapper}>
            <ul className={styles.list__container}>
                {personInfo.map(({title, data}: Props) => (
                    data && (
                        <li className={styles.list__item} key={title}>
                                <span className={styles.list__title}>
                                    {title}: {data}
                                </span>
                        </li>
                    )

                ))}
            </ul>
        </div>
    );
};

export default PersonInfo;