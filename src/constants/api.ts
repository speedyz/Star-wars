// common
export const HTTPS = 'https://'

// swapi
export const SWAPI = 'swapi.dev/api/'
export const PEOPLE = 'people'
export const PARAM_PAGE = '/?page='
export const PARAM_SEARCH = '/?search='
export const API_PEOPLE = HTTPS+SWAPI + PEOPLE+PARAM_PAGE;
export const API_PERSON = HTTPS+SWAPI +PEOPLE;
export const API_SEARCH = HTTPS+SWAPI +PEOPLE+PARAM_SEARCH;

// visual guide
const GUIDE_IMAGE = 'https://starwars-visualguide.com/assets/img/'
const GUIDE_PEOPLE = 'characters'
export const GUIDE_IMG_EXTENSION = '.jpg'

export const URL_IMG_PERSON = GUIDE_IMAGE+GUIDE_PEOPLE

