import React,{ Component } from 'react'

 class styles extends React.Component {
    render(){
    	const style1 = {    
	      background:'#eee',
	      width:'200px',
	      height:'200px'
	    }
		const style2 = {    
		    color:'red',
		    fontSize:'40px'
		}
        return (
	        <section>
	        	<h1>声明样式其实是行内样式的一种改进写法，在render函数外部创建style对象，然后传递给组件，让css与标签分离，但实际上样式多了的话还是不太美观</h1>
	            <div style={style1}>
			        <p style= {style2}>行内样式</p>
			    </div>
			    <p>注意这里实用的还是驼峰命名法，其次因为已经在外部声明了style对象，所以在JSX中使用的时候只需要一个大括号{//..}</p>
	        </section>
        )
    }
}

export default styles

