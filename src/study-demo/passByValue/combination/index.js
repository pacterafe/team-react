import React from 'react'
//组合combination 案例
//这使得别的组件可以通过 JSX 嵌套，将任意组件作为子组件传给他们。
////.....提交测试
//案例一
// function FancyBorder(props) {
//     return (
//       <div className={'FancyBorder FancyBorder-' + props.color}>
//         {props.children}
//       </div>
//     );
//   }
//   function WelcomeDialog() {
//     return (
//       <FancyBorder color="blue">
//         <h1 className="Dialog-title">
//           Welcome
//         </h1>
//         <p className="Dialog-message">
//           Thank you for visiting our spacecraft!
//         </p>
//       </FancyBorder>
//     );
//   }
// export default WelcomeDialog
//合并总结：我确定某个组件内部有什么，可以先写出组件的box里面用{props.children}占内部元素的位置，当谁需要使用这个box
//的时候调用<box>这里面可以写需要在box组件里展示的东西</box>；也可以咋这个box里预留多个位置；如下面的SplitPane组件
//预留了leift位置和right位置，父组件调用他的时候要通过props来将left和right传递给你SplitPane组件；
//-----------------------------------------------------------------------------------------------------
//案例二
// function SplitPane(props){
//   return (
//     <div>
//       <div>
//         {props.left}
//       </div>
//       <div>
//         {props.right}
//       </div>
//     </div>
//   )
// }
// function App(){
//   return (
//     <div>
//       <p>我是app组件里的p标签下面是splitpane组件</p>
//         <SplitPane
//         left={
//           <LeftComp />
//         }
//         right= {
//           <RightComp />
//         }
//       />
//     </div>
    
//   )
// }
// function LeftComp(){
//   return (
//     <span>我是LeftComp</span>
//   )
// }
// function RightComp(){
//   return (
//     <span>我是RightComp</span>
//   )
// }
// export default App
//-----------------------------------------------------------------------------------------------
//案例三
// function FancyBorder(props) {
//     return (
//       <div className={'FancyBorder FancyBorder-' + props.color}>
//         {props.children}
//       </div>
//     );
// }
// function Dialog(props){
//   return(
//     <div>
//       <FancyBorder>
//         <h3>{props.title}</h3>
//         <span>{props.message}</span>
//         {props.children}
//       </FancyBorder>
      
//     </div>
//   )
// }
// class SignUpDialog extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={login:''}
//     }
//     render(){
//         return(
//             <Dialog 
//                 title='火星探测计划！'
//                 message='我们怎么称呼您！' 
//             >
//             <input type='text' onChange={this.handleChange}/>
//             <button onClick={this.handleClick}>签名</button>
//             </Dialog>
//         )
//     }
//     handleChange = (e) =>{
//         this.setState({login:e.target.value})
//     }
//     handleClick = () => {
//         alert('欢迎'+this.state.login)
//     }
// }

// export default SignUpDialog
//遇到的问题：如果父组件和子组件存在相同的名称的事件，或者子组件绑定了时间但是没有时间函数，而父组件有同名的函数、
//总结：如果以合并的形式在父组件中以子组件标签名称内包裹的数据传递给子组件内容是，子组件标签内的内容一切都视为父组件内容。
class Parent extends React.Component{
    constructor(props){
      super(props)
    }
    handleClick =() =>{
        console.log('Parent')
    }
    render(){
        return(
          <div>
            <p>Parent</p>
            <button onClick={this.handleClick}> 按钮</button>
              <Child>
                <p>你说说这里绑定的事件？？？？</p>
                <button onClick={this.handleClick}> PCBTN</button>
              </Child>
          </div>
          
        )
    }
}
function Child(props){
  function handleClick(){
      console.log('xxxxx')
  }
    return (
      <div>
        {props.children}
      </div>
    )
}
export default Parent