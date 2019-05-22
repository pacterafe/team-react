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
                <div>
                    <Myclass />
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
        return (
            <div>
                <button>
                    {this.context}
                </button>
                <ComponentFun />
            </div>
        )
        
        
    }
    
}
//Context.Consumer
//这里，React 组件也可以订阅到 context 变更。这能让你在函数式组件中完成订阅 context。(理解这句话)
//这需要函数作为子元素（function as a child）这种做法。
//这个函数接收当前的 context 值，返回一个 React 节点。
//传递给函数的 value 值等同于往上组件树离这个 context 最近的 Provider 提供的 value 值。
//如果没有对应的 Provider，value 参数等同于传递给 createContext() 的 defaultValue。
function ComponentFun(){
    return (
        <div>ComponentFun++
            <ThemeContext.Consumer>
                {value => value}
            </ThemeContext.Consumer>
        </div>
        
    )
}

// Class.contextType
class Myclass extends React.Component{
    componentDidMount() {
        let value = this.context;
        /* 在组件挂载完成后，使用 MyContext 组件的值来执行一些有副作用的操作 */
    }
    componentDidUpdate() {
    let value = this.context;
    /* ... */
    }
    componentWillUnmount() {
    let value = this.context;
    /* ... */
    }

    render(){
        return <div>
            {this.context}
        </div>
    }
}
Myclass.contextType = ThemeContext


//动态 Context


export default Parent;