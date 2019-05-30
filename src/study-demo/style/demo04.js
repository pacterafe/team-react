import React,{ Component } from 'react'

 class styles extends React.Component {
    render(){
        return (
	        <section>
	        	<h1>CSS Modules 的做法就是通过配置将.css文件进行编译，编译后在每个用到css的组件中的css类名都是独一无二的，从而实现CSS的局部作用域。</h1>
	            <div>
	            	<p>css modules：c-r-a2.0开始css modules也是开箱即用：只需要把 样式文件 命名为：[name].module.css</p>
	            	<p>如果同时使用了sass和css modules，只需要把sass文件命名为[name].module.scss即可</p>
			    </div>
	        </section>
        )
    }
}

export default styles

