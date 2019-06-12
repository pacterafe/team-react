// import React from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// // basic  基本的;基础路由和子路由
// //路由组件return <Router></Router>内部包含<link to="/"></link>连接、和<Route path="/" conponent={组件名称}/>
// //每个组件都可以接受一个{match}参数，在组件内部可以通过他来获取url中的路径和参数；
// //路径是match.path;参数是match.params.
// //子路由不需要<Router>包裹了
// function BasicExample() {
//   return (
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/topics">Topics</Link>
//           </li>
//         </ul>

//         <hr />

//         <Route exact path="/" component={Home} />
//         <Route path="/about" component={About} />
//         <Route path="/topics" component={Topics} />
//       </div>
//     </Router>
//   );
// }

// function Home({match}) {
//   console.log(match.url)
//   return (
//     <div>
//       <h2>Home</h2>
//     </div>
//   );
// }

// function About({match}) {
//   console.log(match.url)
//   return (
//     <div>
//       <h2>About</h2>
//     </div>
//   );
// }

// function Topics({ match }) {
//   console.log(match.url)
//   return (
//     <div>
//       <h2>Topics</h2>
//       <ul>
//         <li>
//           <Link to={`${match.url}/rendering`}>Rendering with React</Link>
//         </li>
//         <li>
//           <Link to={`${match.url}/components`}>Components</Link>
//         </li>
//         <li>
//           <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
//         </li>
//        </ul>

//        <Route path={`${match.path}/:topicId`} component={Topic} />
//        <Route
//         exact
//         path={match.path}
//         render={() => <h3>Please select a topic.</h3>}
//       />
//     </div>
//   );
// }

// function Topic({ match }) {
//   return (
//     <div>
//       <h3>{match.params.topicId}</h3>
//     </div>
//   );
// }

// export default BasicExample;


// import React from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// //URL parameters  ；路由参数传递
// //路由参数传递  Route path="/:id" component={Child} />根后面的就是参数名称是id
// //path="/order/:direction(asc|desc)"参数名称是direction后面加括号是过滤参数写出来的是合法的
// //参数获取在组件中获取，通过组件接受{match}对象；match.params.参数名
// function ParamsExample() {
//   return (
//     <Router>
//       <div>
//         <h2>Accounts</h2>
//         <ul>
//           <li>
//             <Link to="/netflix">Netflix</Link>
//           </li>
//           <li>
//             <Link to="/zillow-group">Zillow Group</Link>
//           </li>
//           <li>
//             <Link to="/yahoo">Yahoo</Link>
//           </li>
//           <li>
//             <Link to="/modus-create">Modus Create</Link>
//           </li>
//         </ul>

//         <Route path="/:id" component={Child} />
        

//         {/*
//            It's possible to use regular expressions to control what param values should be matched.
//               * "/order/asc"  - matched
//               * "/order/desc" - matched
//               * "/order/foo"  - not matched
//         */}
//         <Route
//           path="/order/:direction(asc|desc)"
//           component={ComponentWithRegex}
//         />
//       </div>
//     </Router>
//   );
// }

// function Child({ match }) {
//   return (
//     <div>
//       <h3>ID: {match.params.id}</h3>
//     </div>
//   );
// }

// function ComponentWithRegex({ match }) {
//   return (
//     <div>
//       <h3>Only asc/desc are allowed: {match.params.direction}</h3>
//     </div>
//   );
// }

// export default ParamsExample;



//Redirects (Auth)  从定向（验证）


// import React, { Component } from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Redirect,
//   withRouter
// } from "react-router-dom";

// ////////////////////////////////////////////////////////////
// // 1. Click the public page
// // 2. Click the protected page
// // 3. Log in
// // 4. Click the back button, note the URL each time

// function AuthExample() {
//   return (
//     <Router>
//       <div>
//         <AuthButton />
//         <ul>
//           <li>
//             <Link to="/public">Public Page</Link>
//           </li>
//           <li>
//             <Link to="/protected">Protected Page</Link>
//           </li>
//         </ul>
//         <Route path="/public" component={Public} />
//         <Route path="/login" component={Login} />
//         <PrivateRoute path="/protected" name='zhangsan' age='12' component={Protected} />
//       </div>
//     </Router>
//   );
// }

// const fakeAuth = {
//   isAuthenticated: false,
//   authenticate(cb) {
//     this.isAuthenticated = true;
//     setTimeout(cb, 100); // fake async
//   },
//   signout(cb) {
//     this.isAuthenticated = false;
//     setTimeout(cb, 100);
//   }
// };

// const AuthButton = withRouter(
//   ({ history }) =>
//     fakeAuth.isAuthenticated ? (
//       <p>
//         Welcome!{" "}
//         <button
//           onClick={() => {
//             fakeAuth.signout(() => history.push("/"));
//           }}
//         >
//           注销
//         </button>
//       </p>
//     ) : (
//       <p>您没有登录.</p>
//     )
// );

// function PrivateRoute({ component: Component, ...rest }) {
//   console.log({...rest})//结构赋值
//   return (
//     <Route
//       {...rest}
//       render={props =>
//         fakeAuth.isAuthenticated ? (
//           <Component {...props} />
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/login",
//               state: { from: props.location }
//             }}
//           />
//         )
//       }
//     />
//   );
// }

// function Public() {
//   return <h3>Public</h3>;
// }

// function Protected() {
//   return <h3>Protected</h3>;
// }

// class Login extends Component {
//   state = { redirectToReferrer: false };

//   login = () => {
//     fakeAuth.authenticate(() => {
//       this.setState({ redirectToReferrer: true });
//     });
//   };

//   render() {
//     let { from } = this.props.location.state || { from: { pathname: "/" } };
//     let { redirectToReferrer } = this.state;

//     if (redirectToReferrer) return <Redirect to={from} />;

//     return (
//       <div>
//         <p>您必须登录才能在以下位置查看页面 {from.pathname}</p>
//         <button onClick={this.login}>登陆</button>
//       </div>
//     );
//   }
// }

// export default AuthExample;


// import React, { Component } from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Redirect,
//   withRouter
// } from "react-router-dom";


// class App extends Component{
//   render(){
//     return (
//       <Router>
//         <p><Link to='/'>login</Link></p>
//         <p><Link to='/home'>home</Link></p>
//         <p><Link to='/welcome'>welcome</Link></p>
//         <Route exact path='/' component={Login}/>
//         <Route path='/home' component={Home}/>
//         <Route path='/welcome' component={Welcome}/>
//       </Router>
//     )
//   }
// }

// function PublicHomePage(){
//   return (
//     <h2>loggedIn==false</h2>
//   )
// }
// function Login(){
//   return (
//     <h2>登陆！</h2>
//   )
// }
// function Home(){
//   return(
//     <h2>主页</h2>
//   )
// }
// function Welcome(){
//   return (
//     <h2>欢迎！！</h2>
//   )
// }
// export default App



// import React from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// //Custom Link  自定义链接
// function CustomLinkExample() {
//   return (
//     <Router>
//       <div>
//         <OldSchoolMenuLink activeOnlyWhenExact={true} to="/" label="Home" />
//         <OldSchoolMenuLink to="/about" label="About" />
//         <hr />
//         <Route exact path="/" component={Home} />
//         <Route path="/about" component={About} />
//       </div>
//     </Router>
//   );
// }

// function OldSchoolMenuLink({ label, to, activeOnlyWhenExact }) {
//   return (
//     <Route
//       path={to}
//       exact={activeOnlyWhenExact}
//       children={({ match }) => (
//         <div className={match ? "active" : ""}>
//           {match ? "> " : ""}
//           <Link to={to}>{label}</Link>
//         </div>
//       )}
//     />
//   );
// }

// function Home() {
//   return (
//     <div>
//       <h2>Home</h2>
//     </div>
//   );
// }

// function About() {
//   return (
//     <div>
//       <h2>About</h2>
//     </div>
//   );
// }

// export default CustomLinkExample;


// import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Link, Prompt } from "react-router-dom";
// //PreventingTransitions 防止转换；阻止路由跳转
// //防止转换，阻止路由跳转是通过Prompt组件实现，组件会返回true和false，true标识进入下一个路由，
// //false择停留在当前页面
// function PreventingTransitionsExample() {
//   return (
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="/">Form</Link>
//           </li>
//           <li>
//             <Link to="/one">One</Link>
//           </li>
//           <li>
//             <Link to="/two">Two</Link>
//           </li>
//         </ul>
//         <Route path="/" exact component={Form} />
//         <Route path="/one" render={() => <h3>One</h3>} />
//         <Route path="/two" render={() => <h3>Two</h3>} />
//       </div>
//     </Router>
//   );
// }

// class Form extends Component {
//   state = { isBlocking: false };

//   render() {
//     let { isBlocking } = this.state;

//     return (
//       <form
//         onSubmit={event => {
//           event.preventDefault();
//           event.target.reset();
//           this.setState({
//             isBlocking: false
//           });
//         }}
//       >
//         <Prompt
//           when={isBlocking}
//           message={location =>
//             `Are you sure you want to go to ${location.pathname}`
//           }
//         />

//         <p>
//           Blocking?{" "}
//           {isBlocking ? "Yes, click a link or the back button" : "Nope"}
//         </p>

//         <p>
//           <input
//             size="50"
//             placeholder="type something to block transitions"
//             onChange={event => {
//               this.setState({
//                 isBlocking: event.target.value.length > 0
//               });
//             }}
//           />
//         </p>

//         <p>
//           <button>Submit to stop blocking</button>
//         </p>
//       </form>
//     );
//   }
// }

// export default PreventingTransitionsExample;

// import React from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Switch,
//   Redirect
// } from "react-router-dom";
// //Redirect 重定向的另一种形式  <Redirect from="/old-match" to="/will-match" /> 路由如果是from="/old-match"
// //去向to="/will-match"
// function NoMatchExample() {
//   return (
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/old-match">Old Match, to be redirected</Link>
//           </li>
//           <li>
//             <Link to="/will-match">Will Match</Link>
//           </li>
//           <li>
//             <Link to="/will-not-match">Will Not Match</Link>
//           </li>
//           <li>
//             <Link to="/also/will/not/match">Also Will Not Match</Link>
//           </li>
//         </ul>
//         <Switch>
//           <Route path="/" exact component={Home} />
//           <Redirect from="/old-match" to="/will-match" />
//           <Route path="/will-match" component={WillMatch} />
//           <Route component={NoMatch} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// function Home() {
//   return (
//     <p>
//       A <code>&lt;Switch></code> renders the first child <code>&lt;Route></code>{" "}
//       that matches. A <code>&lt;Route></code> with no <code>path</code> always
//       matches.
//     </p>
//   );
// }

// function WillMatch() {
//   return <h3>Matched!</h3>;
// }

// function NoMatch({ location }) {
//   return (
//     <div>
//       <h3>
//         No match for <code>{location.pathname}</code>
//       </h3>
//     </div>
//   );
// }

// export default NoMatchExample;


// import React from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// //pecursive paths  特殊路径
// const PEEPS = [
//   { id: 0, name: "Michelle", friends: [1, 2, 3] },
//   { id: 1, name: "Sean", friends: [0, 3] },
//   { id: 2, name: "Kim", friends: [0, 1, 3] },
//   { id: 3, name: "David", friends: [1, 2] }
// ];

// function find(id) {
//   return PEEPS.find(p => p.id == id);
// }

// function RecursiveExample() {
//   return (
//     <Router>
//       <Person match={{ params: { id: 0 }, url: "" }} />
//     </Router>
//   );
// }

// function Person({ match }) {
//   let person = find(match.params.id);
//   console.log(person,'1111')
//   return (
//     <div>
//       <h3>
//         {person.name}
//         ’s Friends
//       </h3>
//       <ul>
//         {person.friends.map(id => (
//           <li key={id}>
//             <Link to={`${match.url}/${id}`}>{find(id).name}</Link>
//           </li>
//         ))}
//       </ul>
//       <Route path={`${match.url}/:id`} component={Person} />
//     </div>
//   );
// }

// export default RecursiveExample;

// import React from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// //每个逻辑“路由”有两个组件，一个用于侧边栏，一个用于主区域。
// //当路径与当前URL匹配时，我们希望在不同的位置呈现这两个文件。
// const routes = [
//   {
//     path: "/",
//     exact: true,
//     sidebar: () => <div>home!</div>,
//     main: () => <h2>Home</h2>
//   },
//   {
//     path: "/bubblegum",
//     sidebar: () => <div>bubblegum!</div>,
//     main: () => <h2>Bubblegum</h2>
//   },
//   {
//     path: "/shoelaces",
//     sidebar: () => <div>shoelaces!</div>,
//     main: () => <h2>Shoelaces</h2>
//   }
// ];

// function SidebarExample() {
//   return (
//     <Router>
//       <div style={{ display: "flex" }}>
//         <div
//           style={{
//             padding: "10px",
//             width: "40%",
//             background: "#f0f0f0"
//           }}
//         >
//           <ul style={{ listStyleType: "none", padding: 0 }}>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/bubblegum">Bubblegum</Link>
//             </li>
//             <li>
//               <Link to="/shoelaces">Shoelaces</Link>
//             </li>
//           </ul>

//           {routes.map((route, index) => (
//             // 您可以在应用程序中任意位置呈现<route>。它将与任何其他与该URL匹配的<route>s一起呈现。
//             // 因此，侧边栏或面包屑或任何其他要求您在同一个URL的多个位置呈现多个内容的东西，只不过是多个<route>s。
//             <Route
//               key={index}
//               path={route.path}
//               exact={route.exact}
//               component={route.sidebar}
//             />
//           ))}
//         </div>

//         <div style={{ flex: 1, padding: "10px" }}>
//           {routes.map((route, index) => (
//           //渲染更多路径与以上，但这次组件不同。
//             <Route
//               key={index}
//               path={route.path}
//               exact={route.exact}
//               component={route.main}
//             />
//           ))}
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default SidebarExample;




// import React from "react";
// import { TransitionGroup, CSSTransition } from "react-transition-group";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   Redirect
// } from "react-router-dom";

// import "./website/modules/examples/Animation/styles.css";

// function AnimationExample() {
//   return (
//     <Router>
//       <Route
//         render={({ location }) => (
//           <div style={styles.fill}>
//             <Route
//               exact
//               path="/"
//               render={() => <Redirect to="/hsl/10/90/50" />}
//             />

//             <ul style={styles.nav}>
//               <NavLink to="/hsl/10/90/50">Red</NavLink>
//               <NavLink to="/hsl/120/100/40">Green</NavLink>
//               <NavLink to="/rgb/33/150/243">Blue</NavLink>
//               <NavLink to="/rgb/240/98/146">Pink</NavLink>
//             </ul>

//             <div style={styles.content}>
//               <TransitionGroup>
//                 {/* no different than other usage of
//                 CSSTransition, just make sure to pass
//                 `location` to `Switch` so it can match
//                 the old location as it animates out
//             */}
//                 <CSSTransition
//                   key={location.key}
//                   classNames="fade"
//                   timeout={300}
//                 >
//                   <Switch location={location}>
//                     <Route exact path="/hsl/:h/:s/:l" component={HSL} />
//                     <Route exact path="/rgb/:r/:g/:b" component={RGB} />
//                     {/* Without this `Route`, we would get errors during
//                     the initial transition from `/` to `/hsl/10/90/50`
//                 */}
//                     <Route render={() => <div>Not Found</div>} />
//                   </Switch>
//                 </CSSTransition>
//               </TransitionGroup>
//             </div>
//           </div>
//         )}
//       />
//     </Router>
//   );
// }

// function NavLink(props) {
//   return (
//     <li style={styles.navItem}>
//       <Link {...props} style={{ color: "inherit" }} />
//     </li>
//   );
// }

// function HSL({ match: { params } }) {
//   return (
//     <div
//       style={{
//         ...styles.fill,
//         ...styles.hsl,
//         background: `hsl(${params.h}, ${params.s}%, ${params.l}%)`
//       }}
//     >
//       hsl(
//       {params.h}, {params.s}
//       %, {params.l}
//       %)
//     </div>
//   );
// }

// function RGB({ match: { params } }) {
//   return (
//     <div
//       style={{
//         ...styles.fill,
//         ...styles.rgb,
//         background: `rgb(${params.r}, ${params.g}, ${params.b})`
//       }}
//     >
//       rgb(
//       {params.r}, {params.g}, {params.b})
//     </div>
//   );
// }

// const styles = {};

// styles.fill = {
//   position: "absolute",
//   left: 0,
//   right: 0,
//   top: 0,
//   bottom: 0
// };

// styles.content = {
//   ...styles.fill,
//   top: "40px",
//   textAlign: "center"
// };

// styles.nav = {
//   padding: 0,
//   margin: 0,
//   position: "absolute",
//   top: 0,
//   height: "40px",
//   width: "100%",
//   display: "flex"
// };

// styles.navItem = {
//   textAlign: "center",
//   flex: 1,
//   listStyleType: "none",
//   padding: "10px"
// };

// styles.hsl = {
//   ...styles.fill,
//   color: "white",
//   paddingTop: "20px",
//   fontSize: "30px"
// };

// styles.rgb = {
//   ...styles.fill,
//   color: "white",
//   paddingTop: "20px",
//   fontSize: "30px"
// };

// export default AnimationExample;