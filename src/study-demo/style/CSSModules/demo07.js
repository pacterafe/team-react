import React,{ Component } from 'react'
import style from './demo07.module.css';

 class styles extends React.Component {
    render(){
        return (
	        <section>
	        	 <h1 className={style.title}>
			      	在 CSS Modules 中，一个选择器可以继承另一个选择器的规则，这称为"组合"（"composition"）。
			    </h1>
	        </section>
        )
    }
}

export default styles

