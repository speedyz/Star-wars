import {ADD_PERSON_TO_FAVORITE, REMOVE_PERSON_FROM_FAVORITE} from "../constans/actionTypes";

export const setPersonToFavorite = (person: { [x: string]: { name: string; img: string; }; }) => ({
    type: ADD_PERSON_TO_FAVORITE,
    payload: person
});

export const removePersonFromFavorites = (personId: any) => ({
    type: REMOVE_PERSON_FROM_FAVORITE,
    payload: personId
});