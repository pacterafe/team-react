import React from 'react'

const pubcontext = React.createContext('xzz')
//calass 组件使用方式
class Button extends React.Component{
  static contextType = pubcontext
  render(){
    return <button>{this.context}</button>
  }
}
// class名使用方式
// class Button extends React.Component{
//   render(){
//     return <button>{this.context}</button>
//   }
// }
// Button.contextType = pubcontext


//(无状态组建)函数组建
//k可以<context.Consumer>{value => value }</context.Consume>中间以够咱函数的形式使用
// function Button(){
//   return <button>
//       <pubcontext.Consumer>{value => value }</pubcontext.Consumer>
//   </button>
// }
class Toolbar extends React.Component{
    render(){
      return <pubcontext.Provider value='superman'><Button /></pubcontext.Provider>
    }
}
class App extends React.Component{
    render(){
        return <Toolbar />
    }
}
export default App