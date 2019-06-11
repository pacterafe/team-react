import React,{ Component } from 'react'
import { Wrapper,Title } from './css03'
 class styles extends React.Component {
    render(){
        return (
	       <div className="header-nav">
				<Wrapper>
					<Title>
						注：样式化组件嵌套时，子组件会继承父组件的样式。
					</Title>
				</Wrapper>
			</div>
        )
    }
}

export default styles

