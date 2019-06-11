import React,{ Component } from 'react'
import { Link, StyledLink } from './css08'
 class styles extends React.Component {
    render(){
        return (
			<div>
			   <p>如果要为组件设置样式，则需要使用小括号语法，而且需要在组件上设置className和children</p>
			   <Link>普通组件</Link><br/>
                <StyledLink>添加了样式的组件</StyledLink>
			</div>			
        )
    }
}

export default styles

