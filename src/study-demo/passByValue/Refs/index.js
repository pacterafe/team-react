import React,{Component} from 'react'
//Refs转发学习、不推荐使用;函数组件不能使用ref，因为函数组件没有实例



class App extends Component{
    constructor(props){
        super(props)
        this.state = {value:'liuzhen'}
    }
    handleChange = () =>{
        this.setState({value:ref.current.value})
    }
    render(){
        return (
            <div>
                <FancyInput ref={ref} handleChange= {this.handleChange} />
                <span>{this.state.value}</span>
            </div>
        )
    }
}
const ref = React.createRef()

const FancyInput = React.forwardRef((props, ref) => (
    <input ref={ref} className="FancyButton" onChange= {props.handleChange} />
));
export default App


// 获取焦点案例；如果input是一个包装组件那么 this.ref,current.focusTextInput();
// class App extends React.Component{
//     constructor(props){
//         super(props)
//         this.ref = React.createRef();
//     }
//     componentDidMount(){
//         this.ref.current.focus();
//     }
//     render(){
//         return (
//                 <input type="text"  ref={this.ref} />
//         )
//     }
// }

// export default App
// 以下是对上述示例发生情况的逐步解释：
    // 我们通过调用 React.createRef 创建了一个 React ref 并将其赋值给 ref 变量。
    // 我们通过指定 ref 为 JSX 属性，将其向下传递给 <FancyInput ref={ref}>。
    // React 传递 ref 给 fowardRef 内函数 (props, ref) => ...，作为其第二个参数。
    // 我们向下转发该 ref 参数到 <button ref={ref}>，将其指定为 JSX 属性。
    // 当 ref 挂载完成，ref.current 将指向 <button> DOM 节点。

// 组件库维护者的注意事项
    // 当你开始在组件库中使用 forwardRef 时，你应当将其视为一个破坏性更改，并发布库的一个新的主版本。 
    // 这是因为你的库可能会有明显不同的行为（例如 refs 被分配给了谁，以及导出了什么类型），并且这样可
    // 能会导致依赖旧行为的应用和其他库崩溃。出于同样的原因，当 React.forwardRef 存在时有条件地使用它也是不推荐的：
    // 它改变了你的库的行为，并在升级 React 自身时破环用户的应用。
  
  
// --------------------------------------------------------------------------------------------------
//高阶组件中转发refs
//高阶组件
// 高阶组件（HOC）是 React 中用于复用组件逻辑的一种高级技巧。HOC 自身不是 React API 的一部分，它是一种基于
//  React 的组合特性而形成的设计模式。 具体而言，高阶组件是参数为组件，返回值为新组件的函数。






