import React from 'react';

import {THEME_DARK, THEME_LIGHTS, THEME_NEUTRAL, useTheme} from "../../../context/ThemeProvider";

import imgLightSide from '../../../static/images/light-side.jpg'
import imgDarkSide from '../../../static/images/dark-side.jpg'
import imgFalcon from '../../../static/images/falcon.jpg'
import cn from 'classnames';

import styles from './ChooseSide.module.css'

type Props = {
    classes: string
    theme: string;
    text: string;
    img: string;
}
const ChooseSideItem = ({classes, theme, text, img}: Props) => {
    const isTheme = useTheme();

    return (
        <div
            className={cn(styles.item, classes)}
            onClick={() => isTheme.change(theme)}
        >
            <div className={styles.item__header}>{text}</div>
            <img className={styles.item__img} src={img} alt={text}/>
        </div>
    )
}

const ChooseSide = () => {
    const elements = [
        {
            theme: THEME_LIGHTS,
            text: "Light Side",
            img: imgLightSide,
            classes: styles.item__light,
        },
        {
            theme: THEME_DARK,
            text: "Dark Side",
            img: imgDarkSide,
            classes: styles.item__dark,
        },
        {
            theme: THEME_NEUTRAL,
            text: "I'm Han Solo",
            img: imgFalcon,
            classes: styles.item__neutral,
        },
    ];

    return (
        <div className={styles.container}>
            {elements.map(({theme, text, img, classes}, index) => (
                <ChooseSideItem
                    key={index}
                    theme={theme}
                    text={text}
                    img={img}
                    classes={classes}
                />
            ))}
        </div>
    )
}

export default ChooseSide;