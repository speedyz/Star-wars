import {GUIDE_IMG_EXTENSION, HTTPS, PARAM_PAGE, PEOPLE, SWAPI, URL_IMG_PERSON} from "../constants/api";

const getID = (url: string, category: string) => {
    return url
        .replace(HTTPS + SWAPI + category, '')
        .replace(/\//g, '')
}

export const getPeopleID = (url: string) => getID(url, PEOPLE)

export const getPeopleImage = (id: string | undefined)  => `${URL_IMG_PERSON}/${id+GUIDE_IMG_EXTENSION}`;

export const getPeoplePageID = (url: any) =>{
    const position = url.lastIndexOf(PARAM_PAGE)
    const id = url.slice(position+PARAM_PAGE.length, url.length);
    return Number(id);
}