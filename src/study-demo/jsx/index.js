import React,{ Component } from 'react'

//jsx写法
//class Hello extends React.Component {
//  render() {
//      return <div>Hello world</div>
//  }
//}
//JSX进行开发的时候，其实它最终会转化成React.createElement…去创建元素。 
 class Hello extends React.Component {
    render(){
        return React.createElement('div',null,'Hello World')
    }
}

export default Hello