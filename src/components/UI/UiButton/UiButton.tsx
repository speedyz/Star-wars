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

const UiButton = ({text, onClick, disabled, theme='dark',classes}: Props) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={cn(styles.button, styles[theme], classes)}>
            {text}
            {onClick}
        </button>
    );
};

export default UiButton;