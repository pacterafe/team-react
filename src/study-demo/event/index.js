import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

export default class home extends Component {
  constructor(props) {
    super(props);
    // this.state = {name:"趙丹"}
    this.name = 1
    this.handleClick1 = this.handleClick1.bind(this);
  }
  handleClick1() {
    // 官方推荐的绑定方式,是性能最好的方式
    // 优点：只会生成一个实例，多次调用的到这个方法的时候也不需要在绑定
    // 缺点：即使不用到state也需要添加构造函数来绑定
    console.log( "哈哈哈哈");
  }
  handleClick2(val, event) {//事件对象e要放在最后
    // 会有性能的影响在组件传值的时候会引起重新渲染的问题
    // 优点：写法比较简单，当组件中没有state的时候就不需要添加类构造函数来绑定
    // 缺点：性能不好，因为每一次调用都会生成新的实例
    console.log( val);
  }
  handleClick3(val) {
    console.log(val);
  }
  handleClick4 = () => {
    // 属于一个实验性的的语法，但是是最好的绑定方式，需要bable转译
    // 优点：创建方法就绑定，不需要在构造函数中绑定，调用的时候不需要再作绑定，结合了再构造函数中绑定和在调用的时候绑定
    // 缺点：目前仍然是实验性语法，需要用babel转译
    console.log(this,"方法4");
  }
  render() {
    return (
      <div className="buttonBox">
        <div className="button" onClick={this.handleClick1}>在构造函数中绑定</div>
        {/* 传参1 */}
        <div className="button" onClick={this.handleClick2.bind(this, "哈哈哈哈")}>在调用的时候绑定</div>
        {/* 传参2 */}
        <div className="button" onClick={this.handleClick4}>使用属性初始化器语法</div>
        <div className="button" onClick={() => this.handleClick3(123)}>在调用的时候使用箭头函数</div>
        <span>{this.name}</span>
      </div>
    )
  }
}