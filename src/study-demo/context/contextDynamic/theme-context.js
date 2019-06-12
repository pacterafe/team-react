import React from 'react';
export const themes = {
    light:{
        foreground: '#000000',
        background: 'red',
    },
    dark: {
        foreground: '#ffffff',
        background: 'black',
    },
}
export const ThemeContext = React.createContext({
    theme:themes.dark,
    ToogleTheme:() =>{ console.log('contextfn')}
})