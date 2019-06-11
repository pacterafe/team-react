import React,{ Component } from 'react'
import {Title} from './css02'
 class styles extends React.Component {
    render(){
        return (
	       <div className="header-nav">
				<div className="box1">你凝视着深渊,深渊也凝视着你。</div>
				<Title>
					<div className="box2">
						样式化组件的调用。<br/>
						在封装样式时，声明了Title组件，是一个div标签（styled.div，如果声明时写了styled.h1，那Title就是h1标签）<br/>
						Title可以被复用（样式化的组件一旦被声明，只要导入，就可在任意位置复用）<br/>
						Title不仅被解析成了div，还自动被添加了一个选择器，这个选择器是styled-components自动添加的，方便代码复用；<br/>
						样式化的组件调用时，样式生效于被调用的局部，非全局。<br/>
					</div>
					<h1>
						styled.components使用模板字面量去给组件添加样式。
						同时，因为它移除了组件和样式之间的映射，所以当你定义样式的时候，
						你实际上是创建了一个React组件，并将样式附给了它：
					</h1>
				</Title>
			</div>
        )
    }
}

export default styles



