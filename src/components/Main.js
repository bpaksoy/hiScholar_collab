import React from "react";
import Signin from "./Signin";
import Profile from "./Profile";
import Signup from "./Signup";
import Home from "./Home";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Main = () => {
  return(
    <Router>
     <div>
       <ul>
         <li><Link to="/">Home</Link></li>
         <li><Link to="/sign_in">Signin</Link></li>
         <li><Link to="/sign_up">Signup</Link></li>
       </ul>
      <hr/>
        <Route exact path="/" component={Home}/>
        <Route path="/sign_in" component={Signin}/>
        <Route path="/sign_up" component={Signup}/>
        <Route path="/profile" component={Profile}/>
     </div>
    </Router>
  );
}

export default Main;
