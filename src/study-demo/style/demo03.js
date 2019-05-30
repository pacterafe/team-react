import React,{ Component } from 'react'

import './demo03.css'

 class styles extends React.Component {
    render(){
        return (
	        <section>
	        	<div className='person'>
			        <p>person:Hello world</p>
			    </div> 
			    <h1>
			            因为CSS的规则都是全局的，任何一个组件的样式规则，都对整个页面有效，这可能会导致大量的冲突。
			           也就是说如果我有两个css文件，它们的中的一些样式名是一样的，那么就会被覆盖，简单的解决办法就是将样式的命名变得复杂且不重复，
			            但这样样式多了也很难避免重复，且命名也不会太好看。那么这个时候就推荐使用CSS Modules 了
			    </h1>
	        </section>
        )
    }
}

export default styles

