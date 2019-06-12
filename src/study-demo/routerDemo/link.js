import React from 'react';

import { Link} from 'react-router-dom';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                {/* to: string */}
                {/* 作用：跳转到指定路径 */}
                {/* 使用场景：如果只是单纯的跳转就直接用字符串形式的路径。 */}
                <Link to="/A">使用 Link 跳转到A页面（字符串）</Link><br/>{/* <a href="/A" /> */}

                <Link to={{
                    pathname: '/A',
                    search: '?sort=aaa',

                }}>使用 Link 跳转到A页面（对象）</Link><br/>
                {/* to: object */}
                {/* pathname - 要链接到的路径 */}
                {/* search - 查询参数 */}
                {/* hash - URL 中的 hash，例如 #the-hash */}
                {/* state - 存储到 location 中的额外状态数据 */}
                {/* 作用：携带参数跳转到指定路径 */}
                {/* 作用场景：跳转带参数 */}
                
                

            </div>
        )
    }
}
