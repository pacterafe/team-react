import React from 'react'

export const themes = {
    light:{
        background:'red'
    },
    bark:{
        background:'black'
    }
}
export const ThemeContext = React.createContext(
    themes.bark//初始化
)