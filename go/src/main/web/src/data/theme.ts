import {Theme} from "../types/theme";
import {SxProps, SystemStyleObject} from "../types/sx";

export const theme: Theme = {
    palette: {
        common:{
            white: '#fff',
            gray: '#9c9c9b',
            darkGray: '#52565b',
            black: '#000',
            red: '#ff0000',
            pink: '#ff9db5',
            orange: '#ff7200',
            yellow: '#feea00',
            mint: '#00c4ab',
            green: '#00b000',
            darkGreen: '#03431d',
            skyBlue: '#00c3eb',
            blue: '#2508ff',
            violet: '#570070'
        },
        primary: {
            dark: '#000',
            light: '#e6e6e6',
            main: '#e6e6e6'
        },
        error:{
            dark: '#000',
            light: '#e6e6e6',
            main: '#e6e6e6'
        },
        info:{
            dark: '#000',
            light: '#e6e6e6',
            main: '#e6e6e6'
        },
        secondary:{
            dark: '#000',
            light: '#e6e6e6',
            main: '#e6e6e6'
        },
        success:{
            dark: '#000',
            light: '#e6e6e6',
            main: '#e6e6e6'
        },
        warning:{
            dark: '#000',
            light: '#e6e6e6',
            main: '#e6e6e6'
        }
    },
    padding: {
        main: '649px',
        secondary: '150px'
    }
}

export const handleSxProps = (sx?: SxProps<Theme>): SystemStyleObject<Theme> => {
    if(typeof sx === 'function'){
        return sx(theme)
    }
    return Object.fromEntries(Object.entries(sx!).map(([key, value]) => {
        return [key, typeof value === 'function' ? handleSxProps(value) : value]
    }))
}