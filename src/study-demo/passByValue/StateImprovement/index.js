import React from 'react'

//状态提升案例State improvement

//温度计组件，接受一个celsius的参数
// function BoilingVerdict(props){
//     if (props.celsius >= 100) {
//         return <p>水咕嘟嘟开了</p>;
//       }
//       return <p>水开不了</p>;
// }

//接下来, 我们创建一个名为 Calculator 的组件。
//它渲染一个用于输入温度的 <input>，并将其值保存在 this.state.temperature 中。
// class Calculator extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {temperature:''}
//     }
//     handleChange = (e)=>{
//         this.setState({temperature:e.target.value})
//     }
//     render(){
//         const temperature = this.state.temperature
//         return (
//             <div>
//                 请输入：<input type='text' onChange={this.handleChange} value={temperature}/>
//                 <div>
//                     <p>下面是子组件</p>
//                     <BoilingVerdict celsius={parseFloat(temperature)}/>
//                 </div>
//             </div>
            
//         )
//     }
// }
//----------------------------------------------分割线-----------------------------------
//状态提升案例二 State improvement

//温度计组件，接受一个celsius的参数
function BoilingVerdict(props){
    if (props.celsius >= 100) {
        return <p>水咕嘟嘟开了</p>;
      }
      return <p>水开不了</p>;
}


class Calculator extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            temperature:'',
            scale:'c'
        }
    }
    TemperatureCelsiusChange = (temperature) => {
        console.log(temperature)

        this.setState({temperature:temperature,scale:'c'})
    }
    TemperatureFahrenheitChange = (temperature) => {
        console.log(temperature)
        this.setState({temperature:temperature,scale:'f'})
    }
    render(){
        const temperature = this.state.temperature
        const scale = this.state.scale
        const celsius = scale === 'c' ? temperature : tryConvert(temperature,toCelsius)
        const Fahrenheit = scale === 'f' ? temperature : tryConvert(temperature,toFahrenheit)

        return (
            <div>
                <TemperatureInput
                handleChange={this.TemperatureCelsiusChange}
                temperature= {celsius}
                scale='c'
                />
                <TemperatureInput
                handleChange={this.TemperatureFahrenheitChange}
                temperature={Fahrenheit}
                scale='f'/>
                <BoilingVerdict celsius={parseFloat(celsius)} />
            </div>
        )
    }
}

const scaleNames = {
    c: '摄氏度',
    f: '华氏温度'
  };
class TemperatureInput extends React.Component{
    handelChange = (e) => {
        console.log('xxxxxx')
        this.props.handleChange(e.target.value)
    }
    render(){

        return(
            <div>
                <p>请输温度{scaleNames[this.props.scale]}</p>
                <input type='text' onChange={this.handelChange} value={this.props.temperature}/>
                
            </div>
        )
    }
}
//两个可以在摄氏度与华氏度之间相互转换的函数：
//摄氏度
function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}
//华氏摄氏度
function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}
//转换函数:接受一个数值和转换函数 
function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }
export default Calculator
// 让我们来重新梳理一下当你对输入框内容进行编辑时会发生些什么：

//     React 会调用 DOM 中 <input> 的 onChange 方法。在本实例中，它是 TemperatureInput 组件的 handleChange 方法。
//     TemperatureInput 组件中的 handleChange 方法会调用 this.props.onTemperatureChange()，并传入新输入的值作为参数。
//     其 props 诸如 onTemperatureChange 之类，均由父组件 Calculator 提供。
//     起初渲染时，用于摄氏度输入的子组件 TemperatureInput 中 onTemperatureChange 方法为 Calculator 组件中的 handleCelsiusChange 方法，
//     而，用于华氏度输入的子组件 TemperatureInput 中的 onTemperatureChange 方法为 Calculator 组件中的
//     handleFahrenheitChange 方法。因此，无论哪个输入框被编辑都会调用 Calculator 组件中对应的方法。
//     在这些方法内部，Calculator 组件通过使用新的输入值与当前输入框对应的温度计量单位来调用 this.setState() 进而请求 React 重新渲染自己本身。
//     React 调用 Calculator 组件的 render 方法得到组件的 UI 呈现。温度转换在这时进行，两个输入框中的数值通过当前输入温度和其计量单位来重新计算获得。
//     React 使用 Calculator 组件提供的新 props 分别调用两个 TemperatureInput 子组件的 render 方法来获取子组件的 UI 呈现。
//     React 调用 BoilingVerdict 组件的 render 方法，并将摄氏温度值以组件 props 方式传入。
//     React DOM 根据输入值匹配水是否沸腾，并将结果更新至 DOM。我们刚刚编辑的输入框接收其当前值，另一个输入框内容更新为转换后的温度值。

// 得益于每次的更新都经历相同的步骤，两个输入框的内容才能始终保持同步。