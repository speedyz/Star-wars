import React, {useEffect, useState} from 'react';
import {makeConcurrentRequest} from "../../../utils/network";

import styles from './PersonFilms.module.css'

type Props = {
    personFilms: string;
    title: string;
    episode_id: string;
}

const PersonFilms = ({personFilms}: Props) => {

    const [filmsName, setFilmsName] = useState<any[]>([]);

    useEffect(() => {
        (async () => {
            const response = await makeConcurrentRequest(personFilms)
            setFilmsName(response)
        })();
    }, [])

    return (
        <>
            <div className={styles.wrapper}>
                <ul className={styles.list__container}>
                    {filmsName
                        .sort((a, b) => a.episode_id - b.episode_id)
                        .map(({title, episode_id}: Props) =>
                            <li className={styles.list__item} key={episode_id}>
                                <span className={styles.item__episode}>Episode {episode_id}</span>
                                <span className={styles.item__colon}> : </span>
                                <span className={styles.item__title}>{title}</span>
                            </li>
                        )}
                </ul>
            </div>
        </>
    );
};

export default PersonFilms;