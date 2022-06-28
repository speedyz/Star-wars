import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import PeopleList from "../../components/PeoplePage/PeopleList";
import  styles from './FavoritePage.module.css'
const FavoritePage = () => {

    const [people, setPeople] = useState<any>([]);
    // @ts-ignore
    const storeData = useSelector(state => state.favoriteReducer);
    useEffect(() => {
        const arr = Object.entries(storeData)
        if (arr.length) {
            const res = arr.map((item: any) => {
                return {
                    id: item[0],
                    ...item[1]
                }
            })
            setPeople(res)
        }
    }, []);
    return (
        <div>
            <h1 className="header__text">Favorite Page</h1>
            {people.length
                ? <PeopleList people={people} name={''} id={0} img={''}/>
                : <h2 className={styles.comment}>Add to favorites to appear here</h2>
            }
        </div>
    );
};

export default FavoritePage;