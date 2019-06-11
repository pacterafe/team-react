import React,{ Component } from 'react'
import GlobalStyle from './css01'
 class styles extends React.Component {
    render(){
        return (
	        <div className="App">
		        <GlobalStyle />
		        这是全局的样式调用
				注：一般情况下我们都利用createGlobalStyle做整个项目的样式重置（reset）。
		    </div>
        )
    }
}

export default styles

