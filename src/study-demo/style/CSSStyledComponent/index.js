import React,{ Component } from 'react'

 class styles extends React.Component {
    render(){
        return (
	        <section>
	        	<h1>行内样式</h1>
	            <ul>
	            	<li>style-components是针对React写的一套css in js框架，<br/>
	            	简单来讲就是在js中写css。相对于与预处理器(sass、less)的好处是，css in js使用的是js语法，<br/>
	            	不用重新再学习新技术，也不会多一道编译步骤。无疑会加快网页速度。如果有sass或less的开发经验，<br/>
	            	几分钟就可以学会style-components。
	                <li>1.npm install --save styled-components</li>
	                <li>2.引入 </li>
	                <li>3.styled-componentsV4之前的版本使用injectGlobal创建全局的样式。V4将injectGlobal移除了，要创建全局的样式需要使用createGlobalStyle，并在组件中以子组件的形式调用。</li>
	            </ul>
	        </section>
        )
    }
}

export default styles