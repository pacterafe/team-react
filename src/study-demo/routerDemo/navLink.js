import React from 'react';

import { BrowserRouter, Route, NavLink } from 'react-router-dom';

require('./style.css');


const isActive = (match, location) =>{
    console.log(match,"当前位置")
    console.log(location,"url地址")
    return match

}
export default class Home extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <NavLinks />
                    
                    <Route exact path="/" render={() => <h1>1</h1>} />
                    <Route path="/about" render={() => <h1>2</h1>} />
                    <Route path="/contact" render={() => <h1>3</h1>} />
                    <Route path="/help" render={() => <h1>4</h1>} />
                </div>
            </BrowserRouter>
        )
    }
}
class NavLinks extends React.Component{
    render() {
        return (
           <nav>
               
                <NavLink exact activeClassName="active" to="/">Home</NavLink>
                {/* activeClassName: string */}
                {/* 导航选中激活时候应用的样式名，默认样式名为 active */}

                <NavLink activeStyle={{color: 'green'}} to={{pathname: '/about'}}>About</NavLink>
                {/* activeStyle: object */}
                {/* 如果不想使用样式名就直接写style */}

                <NavLink  exact activeClassName="active" to="/contact">Contact</NavLink>
                {/* exact: bool */}
                {/* 若为 true，只有当访问地址严格匹配时激活样式才会应用 */}

                {/* strict: bool ======*/}
                {/* 若为 true，只有当访问地址后缀斜杠严格匹配（有或无）时激活样式才会应用 */}


                <NavLink  isActive={isActive} to="/help">Help</NavLink>
                {/* isActive: func ========*/}
                {/* 决定导航是否激活，或者在导航激活时候做点别的事情。不管怎样，它不能决定对应页面是否可以渲染。 */}
           </nav>
        )
    }
}