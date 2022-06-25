import React from 'react';
import cn from 'classnames';

import '../index.css'
import styles from './UiButton.module.css'

type Props = {
    text: string,
    onClick: any,
    disabled: boolean,
    theme: string,
    classes: string,
}

const UiButton = ({text, onClick, disabled, theme='dark'}: Props) =>  (
        <button
            onClick={onClick}
            disabled={disabled}
            className={cn(styles.button, styles[theme])}>
            {text}
        </button>
    );


export default UiButton;