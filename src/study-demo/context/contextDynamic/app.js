import React from 'react'
import { themes,ThemeContext } from './theme-context'
import ThemedButton from './themed-button'
// 在嵌套组件中更新 Context 
function Context() {
    return (
      <div>
          <ThemedButton />
      </div>
        
    );
}
class App extends React.Component {
    constructor(props) {
      super(props);
      
      this.ToogleTheme = () => {
        this.setState(state => ({
          theme:
            state.theme === themes.dark
              ? themes.light
              : themes.dark,
        }));
      };
      this.state = {
        theme: themes.light,
        ToogleTheme:this.ToogleTheme
      };
    }
  
    render() {
      return (
        <div>
          <ThemeContext.Provider value={this.state}>
            <Context />
          </ThemeContext.Provider>
          <div>
            <Context />
          </div>
        </div>
      );
    }
  }
  export default App 