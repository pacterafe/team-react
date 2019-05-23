import React from 'react'
import {ThemeContext} from './theme-context'

class ThemeButton extends React.Component{
    render(){
        console.log(this.props,'qqqq')
        let props = this.props;
        let theme = this.context;
        return <button {...props} style={{backgroundColor:theme.background}}></button>
    }
}
ThemeButton.contextType = ThemeContext
export default ThemeButton