import React, {useEffect, useState} from 'react';

import {getApiResource} from "../../utils/network";
import {withErrorApi} from "../../hoc/withErrorApi";
import {getPeopleID, getPeopleImage, getPeoplePageID} from "../../services/getPeopleData";

import {API_PEOPLE} from "../../constants/api";
import {useQueryParams} from "../../hooks/useQueryParams";
import PeopleList from "../../components/PeoplePage/PeopleList";
import PeopleNavigation from "../../components/PeoplePage/PeopleNavigation";


type Props = {
    name: string,
    url: string,
    setErrorAPI: any;
}

const PeoplePage = ({setErrorAPI}: Props) => {

    const [people, setPeople] = useState<any[]>([])
    const [prevPage, setPrevPage] = useState<string>()
    const [nextPage, setNextPage] = useState<string>()
    const [counterPage, setCounterPage] = useState<number>(1)
    const query = useQueryParams();
    const queryPage = query.get('page')

    const getResource = async (url: string) => {
        const body = await getApiResource(url);
        if (body) {
            const peopleList = body.results.map(({name, url}: Props) => {
                const id = getPeopleID(url)
                const img = getPeopleImage(id);
                return {
                    id,
                    img,
                    name,
                }
            })
            setPrevPage(body.previous);
            setNextPage(body.next);
            setCounterPage(getPeoplePageID(url))
            setPeople(peopleList)
            setErrorAPI(false);
        } else {
            setErrorAPI(true)
        }

    }
    useEffect(() => {
        getResource(API_PEOPLE + queryPage).then()
    }, []);
    return (
        <>
            {people && (
                <PeopleList people={people} name={''} id={1} img={''}/>
            )}
            <PeopleNavigation getResource={getResource} prevPage={prevPage} nextPage={nextPage}
                              counterPage={counterPage}/>
        </>
    );
};

export default withErrorApi(PeoplePage);

