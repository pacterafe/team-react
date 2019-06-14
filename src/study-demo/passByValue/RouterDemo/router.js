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

// import "../Animation/styles.css";
//动画使用案例  import { TransitionGroup, CSSTransition } from "react-transition-group";这个要npm install 
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
//                 {/* 与csstranstation的其他用法没有区别，
//                 只需确保将“location”传递给“switch”，
//                 以便在动画输出时与旧位置相匹配。*/}
//                 <CSSTransition
//                   key={location.key}
//                   classNames="fade"
//                   timeout={300}
//                 >
//                   <Switch location={location}>
//                     <Route exact path="/hsl/:h/:s/:l" component={HSL} />
//                     <Route exact path="/rgb/:r/:g/:b" component={RGB} />
//                     {/* 如果没有这个“路由”，我们将在从`/`到`/hsl/10/90/50的初始转换过程中出错。`*/}
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

// //export default AnimationExample;

// //自己练习写的上边的示例；基本上是抄的
// function RoutenDemo(){
//     return (
//         <Router>
//             <Route render={({location}) => (
//                 <div style={styles.fill}>
//                     <Route 
//                         exact 
//                         path="/" 
//                         render={() => <Redirect to="/hsl/120/100/40"/>}
//                     />
//                     <ul style={styles.nav}>
//                         <NavLink to="/hsl/10/90/50">Red</NavLink>
//                         <NavLink to="/hsl/120/100/40">Green</NavLink>
//                         <NavLink to="/rgb/33/150/243">Blue</NavLink>
//                         <NavLink to="/rgb/240/98/146">Pink</NavLink>
//                     </ul>  
//                     <div style={styles.content}>
//                         <TransitionGroup>
//                             <CSSTransition
//                                 key={location.key}
//                                 classNames="fade"
//                                 timeout={300}
//                             >
//                                 <Switch location={location}>
//                                     <Route exact path="/hsl/:h/:s/:l" component={HSL} />
//                                     <Route exact path="/rgb/:r/:g/:b" component={RGB} />
//                                     <Route render={() => <div>Not Found</div>} />
//                                 </Switch>
                                
//                             </CSSTransition>
//                         </TransitionGroup>
//                     </div>
//                 </div>
//             )} />
//         </Router>
//     )
// }
// export default RoutenDemo

// import React from "react";
// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

// function AmbiguousExample() {
//   return (
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="/about">About Us (static)</Link>
//           </li>
//           <li>
//             <Link to="/company">Company (static)</Link>
//           </li>
//           <li>
//             <Link to="/kim">Kim (dynamic)</Link>
//           </li>
//           <li>
//             <Link to="/chris">Chris (dynamic)</Link>
//           </li>
//         </ul>

//         {/*
//             <Switch>标签

//             有时您希望有静态路径的白名单喜欢“关于”和“公司”，但也允许动态
//             像“/：用户”这样的模式。问题是“关于”不明确，将与“/about”和“/:user”匹配。
//             大多数路由器都有一个算法来决定什么它会匹配的，因为它们只允许你匹配一个
//             “路线”。React路由器让您可以在多个地方进行匹配故意（侧边栏、面包屑等）。所以，当你
//             想要清除任何不明确的匹配，而不是匹配“/about”to“/:user”，只需将您的<route>s包装在
//             <Switch>。它将呈现第一个匹配的
//       */}
//         <Switch>
//           <Route path="/about" component={About} />
//           <Route path="/company" component={Company} />
//           <Route path="/:user" component={User} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Company() {
//   return <h2>Company</h2>;
// }

// function User({ match }) {
//   return (
//     <div>
//       <h2>User: {match.params.user}</h2>
//     </div>
//   );
// }

// export default AmbiguousExample;


// import React from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// //有些人在集中式路由配置中找到值。
// //路由配置只是数据。React擅长绘制地图
// // data into components, and <Route> is a component.

// ////////////////////////////////////////////////////////////
// // 首先我们的路线组成部分
// function Sandwiches() {
//   return <h2>Sandwiches</h2>;
// }

// function Tacos({ routes }) {
//   return (
//     <div>
//       <h2>Tacos</h2>
//       <ul>
//         <li>
//           <Link to="/tacos/bus">Bus</Link>
//         </li>
//         <li>
//           <Link to="/tacos/cart">Cart</Link>
//         </li>
//         <li>
//           <Link to="/tacos/dingld">Dingld</Link>
//         </li>
//       </ul>

//       {routes.map((route, i) => (
//         <RouteWithSubRoutes key={i} {...route} />
//       ))}
//     </div>
//   );
// }

// function Bus() {
//   return <h3>Bus</h3>;
// }

// function Cart() {
//   return <h3>Cart</h3>;
// }
// function Dingld() {
//     return <h3>Dingld</h3>;
// }
// ////////////////////////////////////////////////////////////
// // then our route config
// const routes = [
//   {
//     path: "/sandwiches",
//     component: Sandwiches
//   },
//   {
//     path: "/tacos",
//     component: Tacos,
//     routes: [
//       {
//         path: "/tacos/bus",
//         component: Bus
//       },
//       {
//         path: "/tacos/cart",
//         component: Cart
//       },
//       {
//         path: "/tacos/dingld",
//         component: Dingld
//       }
//     ]
//   }
// ];

// //wrap<route>并在任何地方使用它，然后在
// //子路由被添加到它将工作的任何路由中
// function RouteWithSubRoutes(route) {
//   return (
//     <Route
//       path={route.path}
//       render={props => (
//         // 通过子路线继续筑巢
//         <route.component {...props} routes={route.routes} />
//       )}
//     />
//   );
// }

// function RouteConfigExample() {
//   return (
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="/tacos">Tacos</Link>
//           </li>
//           <li>
//             <Link to="/sandwiches">Sandwiches</Link>
//           </li>
//         </ul>

//         {routes.map((route, i) => (
//           <RouteWithSubRoutes key={i} {...route} />
//         ))}
//       </div>
//     </Router>
//   );
// }

// export default RouteConfigExample;


// import React, { Component } from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//没有深入研究
// //此示例演示如何呈现两个不同的屏幕
// //（或不同上下文中的同一屏幕）在同一URL上，
// //取决于你是如何到达那里的。
// //单击颜色并全屏显示，然后“访问
// //gallery“，然后单击颜色。注意URL和组件
// //和以前一样，但现在我们在模态中看到它们
// //在旧屏幕的顶部。

// class ModalSwitch extends Component {
// //我们可以将一个位置传递给
// //忽略路由器的当前位置并使用该位置
// //改为prop。
// //我们也可以使用“位置状态”来告诉应用程序用户
// //希望在模式中转到“/img/2”，而不是作为
// //主页面，使库在其后面可见。
// //通常，`/img/2`与位于`/`的库不匹配。
// //因此，要使两个屏幕都呈现，我们可以保存旧的
// //定位并将其传递给switch，这样它会认为位置
// //仍然是`/`即使它的`/img/2`。

//   previousLocation = this.props.location;

//   componentWillUpdate(nextProps) {
//     let { location } = this.props;
//     console.log(nextProps,'nextProps')
//     console.log(nextProps.history.action,'nextProps.history.action')
//     console.log(location.state,'location.state')
//     // console.log(location.state.modal,'ocation.state.modal')
//     // 如果props.location不是modal，则设置previousLocation
//     if (
//       nextProps.history.action !== "POP" &&
//       (!location.state || !location.state.modal)
//     ) {
//       this.previousLocation = this.props.location;
//     }
//   }

//   render() {
//     let { location } = this.props;

//     let isModal = !!(
//       location.state &&
//       location.state.modal &&
//       this.previousLocation !== location
//     ); // not initial render

//     return (
//       <div>
//         <Switch location={isModal ? this.previousLocation : location}>
//           <Route exact path="/" component={Home} />
//           <Route path="/gallery" component={Gallery} />
//           <Route path="/img/:id" component={ImageView} />
//         </Switch>
//         {isModal ? <Route path="/img/:id" component={Modal} /> : null}
//       </div>
//     );
//   }
// }

// const IMAGES = [
//   { id: 0, title: "Dark Orchid", color: "DarkOrchid" },
//   { id: 1, title: "Lime Green", color: "LimeGreen" },
//   { id: 2, title: "Tomato", color: "Tomato" },
//   { id: 3, title: "Seven Ate Nine", color: "#789" },
//   { id: 4, title: "Crimson", color: "Crimson" }
// ];

// function Thumbnail({ color }) {
//   return (
//     <div
//       style={{
//         width: 50,
//         height: 50,
//         background: color
//       }}
//     />
//   );
// }

// function Image({ color }) {
//   return (
//     <div
//       style={{
//         width: "100%",
//         height: 400,
//         background: color
//       }}
//     />
//   );
// }

// function Home() {
//   return (
//     <div>
//       <Link to="/gallery">Visit the Gallery</Link>
//       <h2>Featured Images</h2>
//       <ul>
//         <li>
//           <Link to="/img/2">Tomato</Link>
//         </li>
//         <li>
//           <Link to="/img/4">Crimson</Link>
//         </li>
//       </ul>
//     </div>
//   );
// }

// function Gallery() {
//   return (
//     <div>
//       {IMAGES.map(i => (
//         <Link
//           key={i.id}
//           to={{
//             pathname: `/img/${i.id}`,
//             // this is the trick!
//             state: { modal: true }
//           }}
//         >
//           <Thumbnail color={i.color} />
//           <p>{i.title}</p>
//         </Link>
//       ))}
//     </div>
//   );
// }

// function ImageView({ match }) {
//   let image = IMAGES[parseInt(match.params.id, 10)];

//   if (!image) return <div>Image not found</div>;

//   return (
//     <div>
//       <h1>{image.title}</h1>
//       <Image color={image.color} />
//     </div>
//   );
// }

// function Modal({ match, history }) {
//   let image = IMAGES[parseInt(match.params.id, 10)];

//   if (!image) return null;

//   let back = e => {
//     e.stopPropagation();
//     history.goBack();
//   };

//   return (
//     <div
//       onClick={back}
//       style={{
//         position: "absolute",
//         top: 0,
//         left: 0,
//         bottom: 0,
//         right: 0,
//         background: "rgba(0, 0, 0, 0.15)"
//       }}
//     >
//       <div
//         className="modal"
//         style={{
//           position: "absolute",
//           background: "#fff",
//           top: 25,
//           left: "10%",
//           right: "10%",
//           padding: 15,
//           border: "2px solid #444"
//         }}
//       >
//         <h1>{image.title}</h1>
//         <Image color={image.color} />
//         <button type="button" onClick={back}>
//           Close
//         </button>
//       </div>
//     </div>
//   );
// }

// function ModalGallery() {
//   return (
//     <Router>
//       <Route component={ModalSwitch} />
//     </Router>
//   );
// }

// export default ModalGallery;


// import React, { Component } from "react";
// import { StaticRouter, Route } from "react-router-dom";
// //没看
// // This example renders a route within a StaticRouter and populates its
// // staticContext, which it then prints out. In the real world you would
// // use the StaticRouter for server-side rendering:
// //
// // import express from "express";
// // import ReactDOMServer from "react-dom/server";
// //
// // const app = express()
// //
// // app.get('*', (req, res) => {
// //   let staticContext = {}
// //
// //   let html = ReactDOMServer.renderToString(
// //     <StaticRouter location={req.url} context={staticContext}>
// //       <App /> (includes the RouteStatus component below e.g. for 404 errors)
// //     </StaticRouter>
// //   );
// //
// //   res.status(staticContext.statusCode || 200).send(html);
// // });
// //
// // app.listen(process.env.PORT || 3000);

// function RouteStatus(props) {
//   return (
//     <Route
//       render={({ staticContext }) => {
//         // we have to check if staticContext exists
//         // because it will be undefined if rendered through a BrowserRouter
//         if (staticContext) {
//           staticContext.statusCode = props.statusCode;
//         }

//         return <div>{props.children}</div>;
//       }}
//     />
//   );
// }

// function PrintContext(props) {
//   return <p>Static context: {JSON.stringify(props.staticContext)}</p>;
// }

// class StaticRouterExample extends Component {
//   // This is the context object that we pass to the StaticRouter.
//   // It can be modified by routes to provide additional information
//   // for the server-side render
//   staticContext = {};

//   render() {
//     return (
//       <StaticRouter location="/foo" context={this.staticContext}>
//         <div>
//           <RouteStatus statusCode={404}>
//             <p>Route with statusCode 404</p>
//             <PrintContext staticContext={this.staticContext} />
//           </RouteStatus>
//         </div>
//       </StaticRouter>
//     );
//   }
// }

// export default StaticRouterExample;


import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//查询参数，很简单
function ParamsDemo({ location }) {
  let params = new URLSearchParams(location.search);

  return (
    <div>
      <p>
        React Router does not have any opinions about how your parse URL query
        strings. Some applications use simple key=value query strings, but
        others embed arrays and objects in the query string. So it's up to you
        to parse the search string yourself.
      </p>
      <p>
        In modern browsers that support{" "}
        <a href="https://developer.mozilla.org/en-US/docs/Web/API/URL">
          the URL API
        </a>
        , you can instantiate a <code>URLSearchParams</code> object from{" "}
        <code>location.search</code> and use that.
      </p>
      <p>
        In{" "}
        <a href="https://caniuse.com/#feat=url">
          browsers that do not support the URL API (read: IE)
        </a>{" "}
        you can use a 3rd party library such as{" "}
        <a href="https://github.com/sindresorhus/query-string">query-string</a>.
      </p>
      <div>
        <h2>Accounts</h2>
        <ul>
          <li>
            <Link to={{ pathname: "/account", search: "?name=netflix" }}>
              Netflix
            </Link>
          </li>
          <li>
            <Link to={{ pathname: "/account", search: "?name=zillow-group" }}>
              Zillow Group
            </Link>
          </li>
          <li>
            <Link to={{ pathname: "/account", search: "?name=yahoo" }}>
              Yahoo
            </Link>
          </li>
          <li>
            <Link to={{ pathname: "/account", search: "?name=modus-create" }}>
              Modus Create
            </Link>
          </li>
        </ul>

        <Child name={params.get("name")} />
      </div>
    </div>
  );
}

function Child({ name }) {
  return (
    <div>
      {name ? (
        <h3>
          The <code>name</code> in the query string is "{name}"
        </h3>
      ) : (
        <h3>There is no name in the query string</h3>
      )}
    </div>
  );
}

function ParamsExample() {
  return (
    <Router>
      <Route component={ParamsDemo} />
    </Router>
  );
}

export default ParamsExample;
