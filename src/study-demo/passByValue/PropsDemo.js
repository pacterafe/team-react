import React from 'react';
import ReactDOM from 'react-dom';
import { directive } from '@babel/types';

	class PropsDemo extends React.Component {
		render (){
			return (
				<div>
					<h1>我是父组件</h1>
					<Child value='123456' />
					<Parent />
				</div>
			)	
		}
	};

	class Child extends React.Component {
		render (){
			return (
				<div>
					<h2>我是子组件</h2>
					<span>父组件传过来的“{this.props.value}”</span>
					<Grandson />
				</div>
			)	
		}	
	};
	function Grandson (props){
		function handleClick(e){
			e.preventDefault();
			console.log('点击了a连接')
		}
		return (
			<div>
				<h3>我是孙子组件</h3>
				<a href="#" onClick={handleClick}>click me！！！！</a>
				<Clock />
			</div>
		)
	};
	class Grandsong extends React.Component{
		handleClick(e){
			e.preventDefault();
			console.log('点击了a连接')
		}
		render(){
			return(
				<div>性别：
					<select onChange={this.props.handleSelect}>
						<option value="男">男</option>
						<option value="女">女</option>
					</select>
					<a href="#" onClick={this.handleClick}>click me</a>
				</div>
			)
		}
	};
	//当组件第一次被渲染到 DOM 中的时候,这在 React 中被称为“挂载（mount）”。
	//当DOM 中组件被删除的时候,这在 React 中被称为“卸载（umount）”。
	//我们可以为 class 组件声明一些特殊的方法，当组件挂载或卸载时就会去执行这些方法：componentDidMount;componentWillUnmount
	//这些方法叫做生命周期法
	//
	class Clock extends React.Component {
		constructor (props){
			super(props);
			this.state = {date :new Date()};
		};
		componentDidMount (){
			this.timerID = setInterval(() => {
				this.tick();
			}, 1000);
			console.log('组件插入DOM')
		};
		componentWillUnmount (){
			clearInterval(this.timerID);
			console.log('组件卸载')
		};
		tick (){
			this.setState({date :new Date()})
		};
		render (){
			return (
				<div>
					<p>我是一个时钟的组件</p>
					<span>现在的时间是{this.state.date.toLocaleTimeString()}</span>
				</div>
			)
			
		};
	}

class Childd extends React.Component{
	render(){
		return (
			<div>
				请输入Email：<input type="text" value={this.props.email} onChange={this.props.handleElement}/>
				<Grandsong handleSelect={this.props.handleSelect}/>
			</div>
		)
	}
};
class Parent extends React.Component{
	constructor(props){
		super(props)
		this.state = {email:'',gender:''};
		this.handleElement = this.handleElement.bind(this)
		this.handleSelect = this.handleSelect.bind(this)
	}
	handleElement(event){
		this.setState({email:event.target.value});
	}
	handleSelect(event){
		this.setState({gender:event.target.value});
	}
	render(){
		return (
			<div>
				<Childd handleElement={this.handleElement} handleSelect={this.handleSelect}/>
				<span>父组件要获取子组件里的数据“{this.state.email}”</span><span>性别XXX：{this.state.gender}</span>
				<div>开关组件<Toggle/></div>
			</div>
		)
	}
}
class Toggle extends React.Component{
	constructor(props){
		super(props)
		this.state = {isToggleOn:true}
		
		//为了绑定this ;推荐写法
		this.handleClick = this.handleClick.bind(this)
	}
	handleClick(){
		this.setState(state => ({
			isToggleOn:!state.isToggleOn
		}));
	}

	//箭头函数写法实验阶段；推荐；在组件中传入<button onClick= {this.handleClick.bind(this)}>也影响性能
	// handleClick =()=>{
	// 	this.setState(state => ({
	// 		isToggleOn:!state.isToggleOn
	// 	}));
	// }
	render (){
		return (
			<button onClick= {this.handleClick}>
				{this.state.isToggleOn?'NO':'OFF'}
			</button>
		)
	}
}




//子组件
// class Childd extends React.Component{
//     render(){
//         return (
//             <div>
//                 请输入邮箱：<input onChange={this.props.handleEmail}/>
//             </div>
//         )
//     }
// };
//父组件，此处通过event.target.value获取子组件的值
// class Parent extends React.Component{
// 	constructor (props){
// 		super(props);
// 		this.state = {email :''};
// 	};
//     handleEmail(event){
//         this.setState({email: event.target.value});
//     }
//     render(){
//         return (
//             <div>
//                 <div>用户邮箱：{this.state.email}</div>
//                 <Childd name="email" handleEmail={this.handleEmail.bind(this)}/>
//             </div>
//         )
//     }
// };
	// function tick (){
	// 	// const element =  (<div>//
	// 	// 	<span>当前时间是{new Date().toLocaleTimeString()}</span>//
	// 	// </div>);//
	// 	function Tick (){
	// 		return <div>
	// 			<span>当前时间是{new Date().toLocaleTimeString()}</span>
	// 		</div>;
	// 	};
	// 	ReactDOM.render(
	// 		<Tick />,
	// 		document.getElementsByClassName('tick')[0]
	// 	)
	// }
	
	//setInterval(tick,1000)
	// function PropsDemo (){
	// 	return <div>
	// 		<h1>hello Fu</h1>
	// 		<Child value={'123456'} />
	// 	</div>
	// };
	// function Child (props){
	// 	return <div>
	// 		<h2>我是子组件</h2>
	// 		<span>父组件穿过来的数据“{props.value}”</span>
	// 	</div>
	// };


	//总结
	// class 组件名（首字母大写）extends Vue.component{
	// 	constructor(props){
	// 		//构造函数
	// 		super(props）接受父组件的数据
	// 		this.state = {data:'data',isLoggedIn:true}状态类似于vueX，state中的数据变化会触发组件更新
	// 		this.handleLoginClick = this.handleLoginClick.bind(this)绑定this推荐方式,优点是别的方法影响性能
	// 	}
	// 	componentDidMount (){
	// 		他是状态回调，组件挂在是触发，内部可以写想要做的事情；可以理解为vue的声明周期函数
	// 	}
	// 	componentWillUnmount (){
	// 		同样是状态回调，组件卸载，内部可以写想要做的事情；可以理解为vue的声明周期函数
	// 	}
	// 	function(){
	// 		自定义函数，组件内部使用的；
	// 		也可当做参数传给传入子组件，子组件通过调用此函数实现参数传递；主要操作state
	// 		可以有很多
	// 	}
	// 	handleLoginClick(){
	// 		自定义函数下面的button组件用的
	// 	}
	// 	render(){
	// 		//这里面可以声明一个变量并使用 if 语句进行条件渲染
	// 		const data = this.state.data;
	// 		const unreadMessages = ['React', 'Re: React', 'Re:Re: React'];
    // 		let button;
	// 		if (isLoggedIn) {
	// 			button = <LogoutButton onClick={this.handleLoginClick} />;登出组件
	// 		} else {
	// 			button = <LoginButton onClick={this.handleLoginClick} />;登入组件
	// 		}
	// 		return(
	// 			<html>
	// 				{button}经过了逻辑判断后的 button
	// 				可以写所有js表达式；下面举例
	// 				{unreadMessages.length > 0 &&
	// 					<h2>
	// 					You have {unreadMessages.length} unread messages.
	// 					</h2>
	// 				}
	// 			</html>
	// 		)
	// 	}
	// }
export default PropsDemo;
