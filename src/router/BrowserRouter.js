import React from 'react';

//<BrowserRouter> 使用 HTML5 提供的 history API (pushState, replaceState 和 popstate 事件) 来保持 UI 和 URL 的同步。
// pushState：history.pushState(state, title, url);state：json字符串，title：因为浏览器的问题用null代替，url：任意有效的url；
// replaceState：history.replaceState(state, title,);与pushState参数相同；
// popstate：window.onpopstate(e){console.log(e.state);},调用pushState和replaceState不会触发，浏览器做出操作时会触发；
import { Route,HashRouter} from 'react-router-dom';

import BrowserRoter from '../study-demo/routerDemo/browserRoter';
import A from '../study-demo/routerDemo/A';

// const getConfirmation = (message, callback) => {
//     const allowTransition = window.confirm(message);
//     callback(allowTransition);
// }

const BasicRoute = () => (
    
    <HashRouter>
        {/* <HashRouter>  在这里使用BrowserRouter无效，解决方案是使用HashRouter或者在服务器上进行路由配置*/}
        {/* basename={string}：basenam='/team-react'  加上：http://localhost:3000/#/team-react/A   不加：http://localhost:3000/#/A   */}
        {/*作用： 所有位置的基准 URL,basename 的正确格式是前面有一个前导斜杠，但不能有尾部斜杠 */}
        {/*使用场景使用场景：假如你需要把页面部署到服务器的二级目录，你可以使用 basename 设置到此目录。 */}

        {/* forceRefresh={bool}: forceRefresh={true}*/}
        {/* 作用：在浏览器不支持H5 history API 的时候强刷 */}
        {/* 使用场景：同getUserConfirmation。 */}

        {/* getUserConfirmation={func}: getUserConfirmation={getConfirmation} */}
        {/* 作用：导航到此页面前执行的函数，默认使用 window.confirm，用户进行确定后才跳转，否则不跳转，需要配合<Promt>使用 */}
        {/* 使用场景：当需要用户进入页面前执行什么操作时可用，不过一般用到的不多。 */}

        {/* keyLength={number}： keyLength={10}  */}
        {/* 作用：设置它里面路由的 location.key 的长度。默认是6，但是多少都没有影响. */}
        {/* key的作用：点击同一个链接时，每次该路由下的 location.key都会改变，可以通过 key 的变化来刷新页面。 */}

        {/* children: node */}
        {/* 作用：渲染唯一的子组件   */}
        {/* https://codepen.io/minooo/pen/oZJYjq?editors=0010 */}
        <Route exact path="/" component={BrowserRoter}/>
        <Route exact path="/A" component={A}/>
    </HashRouter>
    
);


export default BasicRoute;

// 1、react-router-dom是5.0版本
