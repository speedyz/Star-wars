import React from 'react';

import styles from './PeopleList.module.css'

type GreetProps = {
    people: Array<any>;
    name: string,
    id: number,
    img: string,
}

const PeopleList = ({people}: GreetProps) => {
    return (
        <ul className={styles.list__container}>
            {people.map(({name, id, img}: GreetProps) =>
                <li className={styles.list__item} key={id}>
                    <a href="#">
                        <img className={styles.person__photo} src={img} alt={name}/>
                        <p>{name}</p>
                    </a>

                </li>
            )}
        </ul>
    );
};

export default PeopleList;