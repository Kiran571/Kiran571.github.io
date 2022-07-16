import React, { Component }from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
// import Navbar from "./Navbar";
// import { ScheduleComponent } from '@syncfusion/ej2-react-schedule';
// import Footer from './Footer';
import Home from "./Home";

import MainFrame from "./MainFrame";
import About from "./About";
// import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import './index.css';
import Login from "./login";
import Register from "./register";


class App extends Component {
  
  constructor(props) {
    super(props);
  
    this.state = {
      //1--logged in , 0--not logged in
      
      user: {}
    };
  }
  
  // authHandler = () => {
  //   this.setState({ auth: !this.state.auth });
  // };
  
  render() {
    return (
      <>
        <Router>
         
        <Switch>
            <Route exact path="/" component={Home} />
            
          <Route exact path="/about" component={About} />
          <Route exact path="/mainservice" component={MainFrame} />
             {/* {
              this.state.user && this.state.user._id ? <MainFrame setLoginUser={useState} /> : <Login setLoginUser={useState}/>
            } */}
            
          <Route exact path="/login" component={Login} >
            <Login setLoginUser={this.setState} />
          </Route>
          <Route exact path="/register" component={Register} />
            
          <Redirect to="/" />
         </Switch>
       
        </Router>
    </>
  )
  };
};

  
export default App;


// function App() {

  
//   const [auth, setAuth] = useState(false);
  
//   const [user, setLoginUser] = useState({});
  // constructor(props) {
  //   super(props)
  
  //   this.state = {
  //     //1--logged in , 0--not logged in
  //     auth: false,
  //   };
  // }
  
  // authHandler = () => {
  //   this.setState({ auth: !this.state.auth });
  // };
 
//     authHandler = () => {
//       setAuth(!auth);
//     }
  
//   return (
//     <>
     

//         <Router>
//         <Navbar login={setAuth} status={auth} />   
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route exact path="/about" component={About} />
//           <Route exact path="/contact" component={Contact} />
//             <Route exact path="/mainservice"  >
//               {this.state.auth === false ? <Redirect to="/login" /> :
//                 <>
                
//                 <Redirect to="/mainservice" />
//                 <MainFrame />
//                 </>}
              
//             </ Route>
            
//           <Route exact path="/login" >
//             <Login setLoginUser={setLoginUser}/>
//           </Route>
//           <Route exact path="/register" >
//             <Register />
//           </Route>
//           <Redirect to="/" />
//         </Switch>
//         <Footer />
//         </Router>
//     </>
//   );
// }
// export default App;