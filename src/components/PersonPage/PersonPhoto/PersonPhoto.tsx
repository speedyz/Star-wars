import React from 'react';
import styles from './PersonPhoto.module.css'
import {useDispatch} from "react-redux";
import {removePersonToFavorite, setPersonToFavorite} from "../../../store/actions";
import iconFavorite from '../../../static/Icons/favoriteIcon.svg'
import iconFavoriteFill from '../../../static/Icons/favoriteIconFill.svg'

type Props = {
    personPhoto: string,
    personName: string,
    personId: string,
    personFavorite: boolean,
    setPersonFavorite: any
}

const PersonPhoto = ({personPhoto, personName, personId, personFavorite, setPersonFavorite}: Props) => {

    const dispatch = useDispatch();

    const dispatchFavoritePeople = () =>{
        if (personFavorite){
            dispatch(removePersonToFavorite(personId))
            setPersonFavorite(false);
        } else {
            dispatch(setPersonToFavorite({
                [personId]: {
                    name: personName,
                    img: personPhoto
                },
            }));
            setPersonFavorite(true);
        }
    }
    return (
        <div className={styles.container}>
            <img className={styles.photo} src={personPhoto} alt={personName}/>
            <img className={styles.favorites} src={personFavorite ? iconFavorite : iconFavoriteFill} onClick={dispatchFavoritePeople} alt="add to favorites" />
        </div>
    );
};

export default PersonPhoto;