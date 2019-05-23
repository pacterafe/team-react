import React from 'react'
//组合combination 案例
//这使得别的组件可以通过 JSX 嵌套，将任意组件作为子组件传给他们。
////.....提交测试
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
function SplitPane(props){
  return (
    <div>
      <div>
        {props.left}
      </div>
      <div>
        {props.right}
      </div>
    </div>
  )
}
function App(){
  return (
    <div>
      <p>我是app组件里的p标签下面是splitpane组件</p>
        <SplitPane
        left={
          <LeftComp />
        }
        right= {
          <RightComp />
        }
      />
    </div>
    
  )
}
function LeftComp(){
  return (
    <span>我是LeftComp</span>
  )
}
function RightComp(){
  return (
    <span>我是RightComp</span>
  )
}
export default App