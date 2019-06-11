import React,{ Component } from 'react'
import style from './demo08.module.css';

 class styles extends React.Component {
    render(){
        return (
	        <section>
	        	 <h1 className={style.title}>
			      	可以继承another.css里面的规则。
			    </h1>
	        </section>
        )
    }
}

export default styles

