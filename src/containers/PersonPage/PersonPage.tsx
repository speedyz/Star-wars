import React, {useEffect, useState} from 'react';
import styles from './PersonPage.module.css'
import {getApiResource} from "../../utils/network";
import {API_PERSON} from "../../constants/api";
import {withErrorApi} from "../../hoc/withErrorApi";
import {useParams} from 'react-router';
import {getPeopleImage} from "../../services/getPeopleData";
import PersonInfo from "../../components/PersonPage/PersonInfo";
import PersonPhoto from "../../components/PersonPage/PersonPhoto";
import PersonLinkBack from "../../components/PersonPage/PersonLinkBack";

type Props = {
    setErrorAPI: any,
    title: string,
    data: string,
}

const PersonPage = ({setErrorAPI}: Props) => {

    const {id} = useParams();

    const [personId, setPersonId] = useState<any>(null);
    const [personInfo, setPersonInfo] = useState<any>(null);
    const [personName, setPersonName] = useState<any>();
    const [personPhoto, setPersonPhoto] = useState<any>(null);
    const [personFilms, setPersonFilms] = useState<any>(null);
    const [personFavorite, setPersonFavorite] = useState<any>(false);

    useEffect(() => {
        (async () => {
            const res = await getApiResource(`${API_PERSON}/${id}/`)
            if (res) {
                setPersonInfo([
                    {title: 'Height', data: res.height},
                    {title: 'Mass', data: res.mass},
                    {title: 'Hair Color', data: res.hair_color},
                    {title: 'Skin Color', data: res.skin_color},
                    {title: 'Eye Color', data: res.eye_color},
                    {title: 'Birth Year', data: res.birth_year},
                    {title: 'Gender', data: res.gender},
                ]);
                setPersonName(res.name)
                setPersonPhoto(getPeopleImage(id))
                res.films.length && setPersonFilms(res.films)

            }
            setErrorAPI(!res);
        })();
    }, []);

    return (
        <>
            <PersonLinkBack/>
            <div className={styles.wrapper}>
                <span className={styles.person__name}>{personName}</span>
                <div className={styles.container}>
                    <PersonPhoto personPhoto={personPhoto} personName={personName}/>
                    {personInfo && (
                        <PersonInfo personInfo={personInfo} data="" title=""/>
                    )}
                </div>
            </div>
        </>
    );
};

export default withErrorApi(PersonPage);

