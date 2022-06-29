import React, {useContext, useState} from "react";
import {changeCSSVariables} from "../services/chacgeCssVariable";

export const THEME_LIGHTS = 'light'
export const THEME_DARK = 'dark'
export const THEME_NEUTRAL = 'neutral'
// @ts-ignore
const ThemeContext = React.createContext()

export const ThemeProvider = ({children, ...props}) => {

    const [theme, setTheme] = useState(null);
    const change = (name) => {
        setTheme(name)
        changeCSSVariables(name);
    }

    return (
        <ThemeContext.Provider value={{
            theme,
            change
        }}{...props}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;

// @ts-ignore
export const useTheme = () => useContext(ThemeContext);