import React from 'react'

// Theme context，默认的 theme 是 “light” 值
const ThemeContext = React.createContext('light');

// 用户登录 context
const UserContext = React.createContext({
  name: 'Guest',
});

class App extends React.Component{
    render(){
        const {signedInUser, theme} = this.props;
        console.log(signedInUser,theme)
        return (
            <ThemeContext.Provider value={theme}>
                <UserContext.Provider value={signedInUser}>
                    <Layout />
                </UserContext.Provider>
            </ThemeContext.Provider>
        )
    }
}
App.defaultProps = {
    signedInUser:'zhangsan', theme:'lisi'
} 
function Layout(){
    return (
        <div>
            <Sidebar />
            <Content />
        </div>
    )
}
function Sidebar(){
    return <div>我是sidebar</div>
}
function Content(){
    return (<div>
        <ThemeContext.Consumer>
      {theme => (
        <UserContext.Consumer>
          {user => (
            <ProfilePage user={user} theme={theme} />
          )}
        </UserContext.Consumer>
      )}
    </ThemeContext.Consumer>
  
      </div>)
}
function ProfilePage(props){
    return <div>
        <span>{props.user}</span>-------<span>{props.theme}</span>
    </div>
}
export default App