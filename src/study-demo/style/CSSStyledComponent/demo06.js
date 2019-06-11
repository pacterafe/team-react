import React,{ Component } from 'react'
import { Logo } from './css06'
 class styles extends React.Component {
    render(){
        return (
	       <div className="header-nav">
	       		<Logo></Logo>
				<div className="box">
					图片引入:需要图片引入，如果像css一样的引入方式，会报错。正确的引入方式是import导入，再以变量的方式引入，如下：
				</div>
			</div>
        )
    }
}

export default styles

