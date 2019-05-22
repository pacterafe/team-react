import React from 'react'
import ThemeButton from './theme-button'
import { themes,ThemeContext} from './theme-context'

function Toolbar(props){
    return <ThemeButton onClick = {props.changeElement}>click</ThemeButton>
}

class App extends React.Component{
    constructor(props){
        super(props)
        this.state= {theme:themes.light}
    }
    toggle = () =>{
      console.log(this)
        this.setState((state) =>({
          theme:
          state.theme === themes.bark
          ? themes.light
          : themes.bark
        }))
    }
    render(){
        return <div>
          <ThemeContext.Provider  value={this.state.theme}>
            <Toolbar changeElement={this.toggle}/>
          </ThemeContext.Provider>
          <div>
            <ThemeButton />
          </div>
        </div>
    }
}
export default App