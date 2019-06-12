import React from 'react';
import { Link} from 'react-router-dom';

class A extends React.Component{
    goBack = () =>{
        this.props.history.go(-1)
    }
    componentDidMount(){
        console.log(this.props)
        const query =  this.props.location.search
        const arr = query.split('&') 
        console.log(arr)
    }
    render() {
        return (
            <div>
                <span onClick={this.goBack}>我是A页面</span>
                <B/>
            </div>
        )
    }
}

class B extends React.Component{
    render() {
        return (
            <div>
                <ul>
                    <Link to="/A/home">1111111111111</Link><br/>
                    <Link to="/A/about">2222222222222</Link><br/>
                    {/* replace为true时，点击链接后返回至跳转之前的页面 */}
                    <Link replace to="/A/contact">33333333333</Link><br/>
                    <Link to="/A/nested">4444444444444</Link><br/>
                </ul>
            </div>
        )
    }
}
export default A;