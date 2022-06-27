import React, {useEffect, useState} from 'react';
import loader_white from '../../../static/images/loader_white.svg'
import loader_black from '../../../static/images/loader_black.svg'
import loader_blue from '../../../static/images/loader_blue.svg'

import styles from './UiLoading.module.css'

type Props ={
    theme: string;
}

const UiLoading = ({theme="white"}: Props) => {

    const [loaderIcon, setLoaderIcon] = useState<any>(null);

    useEffect( () => {
        switch(theme){
            case 'black': setLoaderIcon(loader_black); break;
            case 'white': setLoaderIcon(loader_white); break;
            case 'blue': setLoaderIcon(loader_blue); break
            default: setLoaderIcon(loader_white)
        }
    }, [])

    return (
        <img className={styles.loader}
             src={loaderIcon}
             alt="loader"
             />
    );
};

export default UiLoading;