import React, {useCallback, useEffect, useState} from 'react';
import {getApiResource} from "../../utils/network";
import {API_SEARCH} from "../../constants/api";
import {withErrorApi} from "../../hoc/withErrorApi";
import {getPeopleID, getPeopleImage} from '../../services/getPeopleData';
import SearchPageInfo from "../../components/SearchPageInfo";
import {debounce} from 'lodash'
import UiInput from "../../components/UI/UiInput";
import  styles from './SearchPage.module.css'

type Props = {
    setErrorAPI: any;
    name: string,
    url: string,
}

const SearchPage = ({setErrorAPI}: Props) => {
    const [inputSearchValue, setInputSearchValue] = useState('');
    const [people, setPeople] = useState<any>([])

    const getResponse = async (param: string) => {
        const res = await getApiResource(API_SEARCH + param);
        if (res) {
            const peopleList = res.results.map(({name, url}: Props)=> {
                const id = getPeopleID(url)
                const img = getPeopleImage(id)
                return {
                    id,
                    name,
                    img,
                }
            })
            setPeople(peopleList)
            setErrorAPI(false)
        } else {
            setErrorAPI(true)
        }
    }
    useEffect(() => {
        getResponse('').then( )
    },[]);
    const debounceGetResponse = useCallback(
        debounce((value: any) => getResponse(value), 300), []
    );


    const handleInputChange = (value: any) => {
        setInputSearchValue(value);
        debounceGetResponse(value)
    }

    return (
        <div>
            <h1 className="header__text">Search</h1>
            <UiInput
                value={inputSearchValue}
                handleInputChange={handleInputChange}
                placeholder="Input characters name"
                classes={styles.input__search}
            />
            <SearchPageInfo people={people} id="" img="" name=""/>
        </div>
    );
};

export default withErrorApi(SearchPage);