import React from 'react'


const rightContext = React.createContext('right')

class Parent extends React.Component{
   // static contextType = rightContext
    render(){ 
        return (
            <div style={{border:'1px solid red',marginTop:'10px',padding:'10px'}}>
                <rightContext.Provider value='app'>
                    <p>parent++++++++++++{this.context}</p>
                    <Children />
                </rightContext.Provider>
            </div>
        )
    }
}
Parent.contextType = rightContext
class Children extends React.Component{
    static contextType = rightContext
    render(){
        return(
            <div style={{border:'1px solid black',padding:'10px'}}>
                <p>chileren++++++++{this.context}</p>
                <Grandson />
            </div>
        )
    }
}
class Grandson extends React.Component{
    constructor(props){
        super(props)
        this.state = {context:''}
    }

    static contextType = rightContext
    render(){
        return(
            <div style={{border:'1px solid blue',padding:'10px'}}>
                <p>Grandson+++++++++++{this.context}</p>
                <LittleGrandson />
            </div>
        )
    }
}
function LittleGrandson (){
    return (
        <div>
        <p>LittleGrandson++++++++++
            <rightContext.Consumer>
                {value=>value}
            </rightContext.Consumer>
        </p>  
        </div>
    )
}
export default Parent

// Context
// Context 提供了一个无需为每层组件手动添加 props，就能在组件树间进行数据传递的方法。
// 在一个典型的 React 应用中，数据是通过 props 属性自上而下（由父及子）进行传递的，
// 但这种做法对于某些类型的属性而言是极其繁琐的（例如：地区偏好，UI 主题），这些属
// 性是应用程序中许多组件都需要的。Context 提供了一种在组件之间共享此类值的方式，
// 而不必显式地通过组件树的逐层传递 props。

// React.createContext
// 创建一个 Context 对象。当 React 渲染一个订阅了这个 Context 对象的组件，这个组件
// 会从组件树中离自身最近的那个匹配的 Provider 中读取到当前的 context 值。
// 只有当组件所处的树中没有匹配到 Provider 时，其 defaultValue 参数才会生效。
// 这有助于在不使用 Provider 包装组件的情况下对组件进行测试。注意：将 undefined
//  传递给 Provider 时，消费组件的 defaultValue 不会生效。

// Context.Provider 
// 每个 Context 对象都会返回一个 Provider React 组件，它允许消费组件订阅 context 的变化。
// Provider 接收一个 value 属性，传递给消费组件。一个 Provider 可以和多个消费组件有对应关系。
// 多个 Provider 也可以嵌套使用，里层的会覆盖外层的数据。
// 当 Provider 的 value 值发生变化时，它内部的所有消费组件都会重新渲染。Provider 及其内部
//  consumer 组件都不受制于 shouldComponentUpdate 函数，因此当 consumer 组件在其祖先组件退出更新的情况下也能更新。

// Class.contextType
// 挂载在 class 上的 contextType 属性会被重赋值为一个由 React.createContext() 创建的 Context 对象。
// 这能让你使用 this.context 来消费最近 Context 上的那个值。你可以在任何生命周期中访问到它，包括 render 函数中。

// Context.Consumer [kənˈsjuːmə]
// 这里，React 组件也可以订阅到 context 变更。这能让你在函数式组件中完成订阅 context。
// 这需要函数作为子元素（function as a child）这种做法。这个函数接收当前的 context 值，
// 返回一个 React 节点。传递给函数的 value 值等同于往上组件树离这个 context 最近的 Provider
//  提供的 value 值。如果没有对应的 Provider，value 参数等同于传递给 createContext() 的 defaultValue。