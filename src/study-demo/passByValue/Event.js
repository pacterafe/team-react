import React from 'react';
import { functionExpression } from '@babel/types';
class Parent extends React.Component{
    render(){
        return(
            <div style={{border: '1px solid red'}}>
                <span>Parent</span>
                <div>
                    <Click/>
                </div>
                <div>
                    <ClickC/>
                </div>
                <div>
                    <Toggle />
                </div>
                <div>
                    <List />
                </div>
                <div>
                    <h3>条件渲染</h3>
                    <Greeting isLoggedIn={false}/>
                </div>
                <div>
                    <h3>简单的登陆控制按钮</h3>
                    <LoginControl />
                </div>
                <MailBOx msg= {['vue','react','javascript','html','css']}/>
                <div>
                    <SwitchBtn />
                </div>
                <LoginControlS />
                <Page/>
                <div>
                    <NumberList numbers= {[1,2,3,4,5,6,7,8,9]}/>
                </div>
                <NameForm />
            </div>
        )
    }
}
  
    // 简单的事件绑定

function Click(){
    function handleclick(e){
        e.preventDefault();
        console.log('阻止默认事件')
    }
    return (
        <a href="#" onClick={handleclick} >click me !</a>
    )
}
  
    // class

class ClickC extends React.Component{
    handleclick(e){
        e.preventDefault();
        console.log('阻止默认事件了')
        console.log(this)
    }
    render(){
        return(
            <a href="#" onClick={this.handleclick} >click me !!!</a>
        )
    }
}

    //Toggle开关状态按钮 
    // 必须谨慎对待 JSX 回调函数中的 this，在 JavaScript 中，class 的方法默认不会绑定
    // this。如果你忘记绑定 this.handleClick 并把它传入了 onClick，当你调用这个函数的时候
    // this 的值为 undefined。
    // 这并不是 React 特有的行为；这其实与 JavaScript 函数工作原理有关。通常情况下，
    // 如果你没有在方法后面添加 ()，例如 onClick={this.handleClick}，你应该为这个方法绑定 this。

class Toggle extends React.Component{
    constructor(props){
        super(props)
        this.state = {active:true}
        this.handleclick = this.handleclick.bind(this);
    }
    handleclick(){
        console.log(this)
       this.setState(state=>({
        active : ! state.active
       }))
    }

    render(){
        return(
            <button onClick={this.handleclick} >{this.state.active?'开':'关'}</button>
        )
    }
}
class List extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            list:[{id:1,name:'苹果'},{id:2,name:'香蕉'},{id:3,name:'橘子'},{id:4,name:'大梨'}],
            flag:0
        }
        // this.handleclick = this.handleclick.bind(this)
    }   
    deleteRow(id){ 
        let newArr = this.state.list
        newArr.splice(id,1);
        this.setState({list:newArr});
    }
    handleclick(id,e){
        console.log(id)
        this.deleteRow(id)
    }
    componentDidMount(){
        //this.deleteRow()
    }
    render(){
        return(
            <ul>
                {
                    this.state.list.map((v,k)=>{
                        return <li key={k} onClick={(e) => this.handleclick(k,e)}>{v.name}</li>
                    })
                }
            </ul>
        )
        
    }
}

    //条件渲染

function UserGreeting(props){
    return <h1>Welcome back!</h1> 
}
function GuestGreeting(props){
    return <h1>Please sign up.</h1>
}
function Greeting(props){
    const isLoggedIn = props.isLoggedIn
    if(isLoggedIn){
        return <UserGreeting />
    }else{
        return <GuestGreeting />
    }
}
    //登陆控制按钮
function LoginButton(props){
    return <button onClick={props.onClick}>login</button>
}
function LogoutButton(props){
    return <button onClick={props.onClick}>logout</button>
}
class LoginControl extends React.Component{
    constructor(props){
        super(props)
        this.state = {isLoggedIn:true}
    }
    loginClick = () =>{
        this.setState({isLoggedIn:true})
    }
    logoutClick = () =>{
        this.setState({isLoggedIn:false})
    }
    render(){
        const isLoggedIn = this.state.isLoggedIn
        let button;
        if(isLoggedIn){
            button = <LoginButton onClick={this.logoutClick}/>
        }else{
            button = <LogoutButton onClick={this.loginClick}/>
        }
        return <div>
            {button}
        </div>
    }
}

// &&运算
//过花括号包裹代码，你可以在 JSX 中嵌入任何表达式。
//这也包括 JavaScript 中的逻辑与 (&&) 运算符。它可以很方便地进行元素的条件渲染。
//{msg.length > 0 && <h2> 你有{msg.length}条信息! </h2> }

function MailBOx(props){
    const msg = props.msg
    return <div>
        <h1>hello</h1>
        {msg.length > 0 &&
        <h2>
            你有{msg.length}条信息!
        </h2>
        }
    </div>
}
//三元运算符
// <div>The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.</div>
class SwitchBtn extends React.Component{
    constructor(props){
        super(props)
        this.state = {flag:true}
    }
    handleclick = () =>{
        this.setState((state)=>({
            flag:!state.flag
        }))
    }
    render(){
        const isOk = this.state.flag
        return(
            <button onClick = {this.handleclick}>{isOk?'开':'关'}</button>
        )
    }
}
class LoginControlS extends React.Component{
    constructor(props){
        super(props)
        this.state = {isLoggedIn:true}
    }
    loginClick = () =>{
        this.setState({isLoggedIn:true})
    }
    logoutClick = () =>{
        this.setState({isLoggedIn:false})
    }
    render(){
        const isLoggedIn = this.state.isLoggedIn
        return <div>
            {isLoggedIn?(
                <LoginButton onClick={this.logoutClick}/>
            ):(
                <LogoutButton onClick={this.loginClick}/>  
            )
        }
        </div>
    }
}
//小demmo
function WarningBanner (props){
    const flag = props.war
    if(!flag){
        return null
    }
    return <div style={{background:'red',height:'40px',textAlign:'center',lineHeight:'40px'}}>
        waring!
    </div>
}
class Page extends React.Component{
    constructor(props){
        super(props)
        this.state = {war:true}
    }
    handleclick = () => {
        this.setState((state) => ({
            war:!state.war
        }))
    } 
    render(){
        const isshow = this.state.war 
        return <div>
            <WarningBanner war ={isshow}/>
            <button onClick={this.handleclick}>{isshow?'hide':'show'}</button>
        </div>
    }
}
//正确的key绑定
function ListItem(props){
    //这里不绑定key
    return <li>{props.value}哈哈哈哈哈哈哈</li>
}
function NumberList(props){
    const numbers = props.numbers;
    const listItems = numbers.map((number) => {
        //这里绑定key
        return <ListItem key={number.toString()}
                  value={number}/>
    })
    return(
        <ul>
            {listItems}
        </ul>
    )
}
//表单元素
//受控组件
class NameForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {value:''}
    }
    handleChange = (e) =>{
        this.setState({ value:e.target.value })
    }
    onSubmit = (e) => {
        console.log(e)
        e.preventDefault();
        console.log('名字是'+this.state.value)
    }
    render(){
        return <div style={{marginBottom:'20px'}}>
            <form onSubmit={this.onSubmit}>
                <label>
                    Name:
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="提交" />
            </form>
        </div>
    }
}
export default Parent;