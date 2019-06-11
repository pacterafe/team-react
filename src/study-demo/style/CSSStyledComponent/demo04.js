import React,{ Component } from 'react'
import { Wrapper,Title ,Button,Input } from './css04'
 class styles extends React.Component {
    render(){
        return (
	       <div className="header-nav">
				<Wrapper>
					<Title type="warning">样式化组件的参数</Title>
					<Title type="success">一个样式化组件被封装，有些样式可能需要在被调用的时候根据代码上下文才能确定，所以styled-components允许在封装样式组建时传参。</Title>
				</Wrapper>
				<div>
			    	<Button>Normal</Button>
			    	<Button primary>Primary</Button>
			    </div>
			    <div>
			    	<Input placeholder="A small text input" size="1em" />
			    	<Input placeholder="A bigger text input" size="2em" />
			    </div>

			</div>
        )
    }
}

export default styles

