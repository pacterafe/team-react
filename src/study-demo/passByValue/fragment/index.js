import React,{Fragment} from 'react'
import { exportDefaultDeclaration } from '@babel/types';

//无障碍
// function ListItem({item}){
//     return (
//         <Fragment key={item.id}>
//             <dt>{item.term}</dt>
//             <dd>{item.description}</dd>
//         </Fragment>
//     )
// }
// function Glossary (props){
//     (function(){
//         console.log(props)
//     })(props)
//     return (
//         <dl>
//             {props.items.map(item => (
//                 <ListItem item={item} key={item.id} />
//             ))}
//         </dl>
//     )
// }
// let data = [
//     {term:'aaaaaa',description:'aaaaaa',id:1},
//     {term:'bbbbbb',description:'bbbbbb',id:2},
//     {term:'cccccc',description:'cccccc',id:3},
//     {term:'dddddd',description:'dddddd',id:4},
//     {term:'eeeeee',description:'eeeeee',id:5},
//     {term:'ffffff',description:'ffffff',id:6},
// ]
// Glossary.defaultProps = {
//     items:data
// }
// export default Glossary

//DOM 元素的 Refs 在 React 中设置焦点
// function CustomTextInput(props){
//     return (
//         <div>
//             <input ref={props.inputRef} />
//         </div>
//     )
// }
// class Parent extends React.Component{
//     constructor(props){
//         super(props)
//         this.inputElement = React.createRef()
//     }
//     componentDidMount(){
//         console.log('声明周期mount')
//         // 现在你就可以在需要时设置焦点了
//         this.inputElement.current.focus()
//     }
//     render(){
//         return(
//             <CustomTextInput inputRef = {this.inputElement}/>
//         )
//     }
// }

// export default Parent
//鼠标和指针事件;外部点击事件案例
// class OuterClickExample extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = { isOpen: false };
//         this.toggleContainer = React.createRef();
//         this.onClickHandler = this.onClickHandler.bind(this);
//         this.onClickOutsideHandler = this.onClickOutsideHandler.bind(this);
//     }
//     componentDidMount() {
//         window.addEventListener('click', this.onClickOutsideHandler);
//       }
    
//       componentWillUnmount() {
//         window.removeEventListener('click', this.onClickOutsideHandler);
//       }
    
//       onClickHandler() {
//         this.setState(currentState => ({
//           isOpen: !currentState.isOpen
//         }));
//       }
    
//       onClickOutsideHandler(event) {
//           console.log(event)
//           console.log(this.toggleContainer.current)
//         if (this.state.isOpen && !this.toggleContainer.current.contains(event.target)) {
//           this.setState({ isOpen: false });
//         }
//       }
    
//       render() {
//         return (
//           <div ref={this.toggleContainer}>
//             <button onClick={this.onClickHandler}>Select an option</button>
//             {this.state.isOpen ? (
//               <ul>
//                 <li>Option 1</li>
//                 <li>Option 2</li>
//                 <li>Option 3</li>
//               </ul>
//             ) : null}
//           </div>
//         );
//       }
// }
// export default OuterClickExample

//使用正确的事件触发器，比如 onBlur 和 onFocus，同样可以达成这项功能：
class BlurExample extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = { isOpen: false };
      this.timeOutId = null;
  
      this.onClickHandler = this.onClickHandler.bind(this);
      this.onBlurHandler = this.onBlurHandler.bind(this);
      this.onFocusHandler = this.onFocusHandler.bind(this);
    }
  
    onClickHandler() {
      this.setState(currentState => ({
        isOpen: !currentState.isOpen
      }));
    }
  
    // 我们在下一个时间点使用 setTimeout 关闭弹窗。
    // 这是必要的，因为失去焦点事件会在新的焦点事件前被触发，
    // 我们需要通过这个步骤确认这个元素的一个子节点
    // 是否得到了焦点。
    onBlurHandler(e) {
        console.log(e,'blur')
      this.timeOutId = setTimeout(() => {
        this.setState({
          isOpen: false
        });
      });
    }
  
    // 如果一个子节点获得了焦点，不要关闭弹窗。
    onFocusHandler(e) {
        console.log(e,'focus')
      clearTimeout(this.timeOutId);
    }
  
    render() {
      // React 通过把失去焦点和获得焦点事件传输给父节点
      // 来帮助我们。
      return (
        <div onBlur={this.onBlurHandler}
             onFocus={this.onFocusHandler}>
          <button onClick={this.onClickHandler}
                  aria-haspopup="true"
                  aria-expanded={this.state.isOpen}>
            Select an option
          </button>
          {this.state.isOpen ? (
            <ul>
              <li>Option 1</li>
              <li>Option 2</li>
              <li>Option 3</li>
            </ul>
          ) : null}
        </div>
      );
    }
  }
  export default BlurExample