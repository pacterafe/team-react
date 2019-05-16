import React from 'react';
import { functionExpression } from '@babel/types';


class Parent extends React.Component{
    render(){
        return(
            <div style={{border: '1px solid red'}}>
                <span>Parent</span>
                <div>
                    <App />
                </div>
            </div>
        )
    }
}
// Context 可以让我们无须明确地传遍每一个组件，就能将值深入传递进组件树。
// 为当前的 theme 创建一个 context（“light”为默认值）。
const ThemeContext = React.createContext('light')
class App extends React.Component{
    render(){
    // 使用一个 Provider 来将当前的 theme 传递给以下的组件树。
    // 无论多深，任何组件都能读取这个值。
    // 在这个例子中，我们将 “dark” 作为当前的值传递下去。
        return <ThemeContext.Provider value='dark'>
            <Toolbar />
        </ThemeContext.Provider>
    }
}
// 中间的组件再也不必指明往下传递 theme 了。
function Toolbar(props) {
    return (
      <div>
          <ThemeContext.Provider value='bba'>
                <ThemedButton />
          </ThemeContext.Provider>
        
      </div>
    );
  }
class ThemedButton extends React.Component {
// 指定 contextType 读取当前的 theme context。
// React 会往上找到最近的 theme Provider，然后使用它的值。
// 在这个例子中，当前的 theme 值为 “dark”。
    static contextType = ThemeContext;
    render() {
        return <div>
            {this.context}
            <Button />
        </div>
        
    }
}
class Button extends React.Component{
    static contextType = ThemeContext;
    render(){
        return <button>
            {this.context}
        </button>
    }
    
}
export default Parent;