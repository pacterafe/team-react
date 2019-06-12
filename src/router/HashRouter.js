import React from 'react';

import { Route,HashRouter} from 'react-router-dom';

// import HashRoute from '../study-demo/routerDemo/hashRouter';
// import HashRoute from '../study-demo/routerDemo/link';
import HashRoute from '../study-demo/routerDemo/navLink';
import A from '../study-demo/routerDemo/A';

// const getConfirmation = (message, callback) => {
//     const allowTransition = window.confirm(message);
//     callback(allowTransition);
// }

const BasicRoute = () => (
    
    <HashRouter>
        {/* basename={string}：basenam='/team-react'  加上：http://localhost:3000/#/team-react/A   不加：http://localhost:3000/#/A   */}
        {/*作用： 所有位置的基准 URL,basename 的正确格式是前面有一个前导斜杠，但不能有尾部斜杠 */}
        {/*使用场景使用场景：假如你需要把页面部署到服务器的二级目录，你可以使用 basename 设置到此目录。 */}

        {/* hashType={string}: hashType='slash' 默认为 slash*/}
        {/* slash - 后面跟一个斜杠，例如 #/ 和 #/sunshine/lollipops */}
        {/* noslash - 后面没有斜杠，例如 # 和 #sunshine/lollipops */}
        {/* hashbang - Google 风格的 ajax crawlable，例如 #!/ 和 #!/sunshine/lollipops */}

        {/* getUserConfirmation={func}: getUserConfirmation={getConfirmation} */}
        {/* 作用：导航到此页面前执行的函数，默认使用 window.confirm，用户进行确定后才跳转，否则不跳转，需要配合<Promt>使用 */}
        {/* 使用场景：当需要用户进入页面前执行什么操作时可用，不过一般用到的不多。 */}

        {/* children: node */}
        {/* 作用：渲染唯一的子组件   */}
        {/* https://codepen.io/minooo/pen/oZJYjq?editors=0010 */}
        <Route exact path="/" component={HashRoute}/>
        <Route exact path="/A" component={A}/>
    </HashRouter>
    
);


export default BasicRoute;

// 1、react-router-dom是5.0版本
