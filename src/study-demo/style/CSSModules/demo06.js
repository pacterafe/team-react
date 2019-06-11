import React,{ Component } from 'react'
import style from './demo06.module.css';
import { title } from './demo06.module.css'
//import style from './demo05.css';

 class styles extends React.Component {
    render(){
        return (
	        <div>
	        	 <p className={style.title+" "+style.item+" "+style.globalColor}>
			      	构建工具会将类名style.title编译成一个哈希字符串。
			      	这是整体引入的红色文字
			    </p>
			    <p className={style.globalColor}>全局样式</p>
			    <p className={title}>
			      	这是按需引入的红色文字
			    </p>
	        </div>
        )
    }
}

export default styles

