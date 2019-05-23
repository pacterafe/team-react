import React, { Component } from 'react'
import createReactClass from 'create-react-class'

/**
 *
 *  create-react-class相关知识点
 *      1、create-react-class是低版本React中抽离的一个模块
 *      2、该模块具有两个初始化生命周期
 *          getInitialState: function(){}
 *          getDefaultProps: function(){}
 *      3、该创建组件的方式可以使用 Mixins 可复用某些功能
 *      4、
 */


var SetIntervalMixin = {
    getInitialState: function(){
        return {
            clear:null,
            num:1
        }
    },
    componentWillMount: function() {
        this.clear =  setInterval(()=>{
            console.log(this.state.num++)
        },1000)
    },
    componentWillUnmount: function() {
        clearInterval(this.clear)
    }
};

const Greeting = createReactClass({
    mixins: [SetIntervalMixin],     // 使用 mixin
    getDefaultProps: function(){
        return {
            name: 'Lucy'
        }
    },
    getInitialState: function(){
        return {
            count:1
        }
    },
    render: function(){
        return (
            <section>
                <h1>Hello,{this.props.name}</h1>
                <p>我是create-react-class组件的默认state值：{this.state.count}</p>
            </section>
        )
    }
})


export default class App  extends Component {
    render() {
        return (
            <section>
                <Greeting name="Tom"/>
                <p>我是本组件ES声明的默认值：{this.props.name}</p>
            </section>
        )
    }
}
App.defaultProps = {
    name: 'Mary'
}