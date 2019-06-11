import React,{ Component } from 'react'
import {StyledButton} from './css07'
 class styles extends React.Component {
    render(){
        return (
			<div>
                <StyledButton>如果我们需要继承样式的时候我们可以通过 styled(继承的组件名称)</StyledButton>
			</div>			
        )
    }
}

export default styles

