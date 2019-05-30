import React,{ Component } from 'react'
import style from './demo05.module.css';

 class styles extends React.Component {
    render(){
        return (
	        <div>
	        	 <p className={style.title}>
			      	构建工具会将类名style.title编译成一个哈希字符串。
			    </p>
	        </div>
        )
    }
}

export default styles

