import React from 'react'
import { ThemeContext } from './theme-context'
//import Button from './Button'
function ThemedButton(){
    // Theme Toggler 按钮不仅仅只获取 theme 值，它也从 context 中获取到一个 toggleTheme 函数
        return (
            <ThemeContext.Consumer>
                {({theme,ToogleTheme}) =>(
                    <button
                    onClick={ToogleTheme}
                    style={{backgroundColor:theme.background}}>
                    Toggle Theme
                    </button>
                )}
            </ThemeContext.Consumer>
        )
}
//ThemedButton.contextType = ThemeContext
export default ThemedButton