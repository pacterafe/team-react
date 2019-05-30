import React,{ Component } from 'react'
import style from './demo09.module.css';

 class styles extends React.Component {
    render(){
        return (
	        <section>
	        	 <h1 className={style.title}>
			      	CSS Modules 支持使用变量
			    </h1>
	        </section>
        )
    }
}

export default styles

