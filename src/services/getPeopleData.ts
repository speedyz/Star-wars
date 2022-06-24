import {HTTPS, PEOPLE, SWAPI, URL_IMG_PERSON, GUIDE_IMG_EXTENSION, PARAM_PAGE} from "../constants/api";

const getID = (url: string, category: string) => {
    const id = url
        .replace(HTTPS+SWAPI+category,'')
        .replace(/\//g,'')

    return id
}

export const getPeopleID = (url: string) => getID(url, PEOPLE)

export const getPeopleImage = (id: number)  => `${URL_IMG_PERSON}/${id+GUIDE_IMG_EXTENSION}`;

export const getPeoplePageID = (url: any) =>{
    const position = url.lastIndexOf(PARAM_PAGE)
    const id = url.slice(position+PARAM_PAGE.length, url.length);
    return Number(id);
}