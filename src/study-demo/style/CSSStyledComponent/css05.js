import styled from 'styled-components'
// 封装Wrapper组件的同时封装其子选择器.box的样式，如果在Wrapp组件中，某个元素的类名为box，就会自动生效
export const Wrapper = styled.div`
	font-weight: bolder;
	.box {
		background: #eee;
		padding: 20px;
	}
`;
