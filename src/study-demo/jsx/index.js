import React, { Component } from 'react';


//const element = <h1>Hello, world!</h1>;

//它被称为 JSX， 一种 JavaScript 的语法扩展。 我们推荐在 React 中使用 JSX 来描述用户界面。
//JSX 就是用来声明 React 当中的元素。

//与浏览器的 DOM 元素不同，React 当中的元素事实上是普通的对象，React DOM 可以确保 浏览器 DOM 的数据内容与 React 元素保持一致。

//要将 React 元素渲染到根 DOM 节点中，我们通过把它们都传递给 ReactDOM.render() 的方法来将其渲染到页面上：
  

export default class jsxDmoe extends Component {
  render() {
    return (
      <div className="buttonBox">
        Hello, world
      </div>
    )
  }
}