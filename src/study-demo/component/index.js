/**
 *  讨论React组件创建的方式
 *      React是很多组件组成的，就积木一样，很多组件拼装在一起成为一个应用
 *      创建组件的方式有三种：
 *          1.无状态函数式组件、
 *          2.ES5原生方式 React.createClass()、
 *          3.ES6继承方式 extends React.Component{}、
 *
 *      三种创建方式的特点:
 *          1.无状态函数式组件：
 *              1).组件只能访问接受Props参数，渲染DOM结构。无法使用State
 *              2).组件不能访问this对象
 *              3).组件无法访问生命周期的方法
 *              4).组件不会被实例化，整体渲染性能提升，只有一个render方法
 *          2.ES5方式创建组件：
 *              1).创建方式比较陈旧，官方不推荐使用，这只是React初期使用的一种方式
 *              2).React.createClass 会自绑定函数方法，导致不必要的性能开销
 *              3).React.createClass 的mixins不够自然、直观
 *          3.ES6方式继承创建组件：
 *              1).成员函数不会自动绑定this，需要开发者手动绑定，否则this不能获取当前组件实例对象
 *              2).组件属性类型propTypes及其默认props属性defaultProps配置不同
 *              3).组件初始状态state的配置不同
 *              4).Mixins的支持不同
 *
 *  总结：官方推荐优先使用无状态组件，性能会提升，其次是ES6继承的方式创建组件。ES5在React16.版本已经废弃。
 *  参考地址：https://segmentfault.com/a/1190000008078726
 */

import React,{ Component } from 'react'

/**
 *  创建无状态函数式组件
 */
function Button(){
    return (
        <section>
            <button>普通按钮</button>
        </section>
    )
}

const SubmitButton = function(){
    return (
        <section>
            <button>提交按钮</button>
        </section>
    )
}

const ResetButton = () =>
    <section>
        <button>重置按钮</button>
    </section>

const ParamButton = (props) => {
    console.log(props.name);
    return (
        <section>
            <button>参数按钮</button>
            <p>参数为：{props.name}</p>
        </section>
    )
}
// export default Button || SubmitButton || ResetButton || ParamButton
// export default ParamButton

/**
 *  ES5方式 React.createClass 组件
 *  目前React使用的是16.8.6版本已经废弃该创建方式，稍后我们使用引入CDN的方式验证
 *  ./lowVersion.html进行查看演示
 */

/**
 *  ES6方式 extends React.Component 组件
 */

class InfoButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'lily',
            age: 26,
            address: 'Beijing',
            status: false
        }
    }
    handleClick(){
        this.setState({
            status: !this.state.status
        })
    }
    render() {
        const {name,age,address,status} = this.state;
        return (
            <section>
                <button>信息按钮</button>
                <p>姓名：{name}</p>
                <p>年龄：{age}</p>
                <p>地址：{address}</p>
                <button onClick={()=>this.handleClick()}>点击展示隐藏信息</button>
                {status? <p >职位：FE engineer</p> : ''}
                <br/>
                <button>默认静态属性Props：{this.props.title}</button>
            </section>
        )
    }
}

InfoButton.defaultProps = {
    title:'标题'
}

export default InfoButton