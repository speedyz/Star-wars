import React from 'react';
import cn from 'classnames'
import styles from './UiInput.module.css'
import cancel from '../../../static/Icons/cancel.png'


type Props = {
    value: string,
    placeholder: string,
    classes: string,
    handleInputChange: any;
}

const UiInput = ({value, placeholder, handleInputChange, classes}: Props) =>
    (
        <div className={cn(styles.wrapper__input, classes)}>
            <input
                type="text"
                value={value}
                onChange={(e) => handleInputChange(e.target.value)}
                placeholder={placeholder}
                className={styles.input}
            />
            <img
                onClick={() => value && handleInputChange('')}
                src={cancel}
                className={cn(styles.clear,!value && styles.clear__disabled)}
                alt="Clear input"
            />
        </div>
    );


export default UiInput;