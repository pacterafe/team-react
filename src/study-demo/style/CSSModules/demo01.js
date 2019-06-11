import React,{ Component } from 'react'

 class styles extends React.Component {
    render(){
        return (
	        <section>
	        	<h1>行内样式是一种最基本的写法，也就是我们最开始学HTML时写的内联样式那样，在项目中可能会比较少用到</h1>
	            <div style={{ background: '#eee', width: '200px', height: '200px'}}>
		        	<p style= {{color:'red', fontSize:'40px'}}>行内样式</p>
		        </div>

	        </section>
        )
    }
}

export default styles

