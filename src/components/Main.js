import React from "react";
import Signin from "./pages/Signin";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import UserInfo from "./pages/UserInfo";
import { BrowserRouter as Router, Route, Link, IndexRoute } from "react-router-dom";
import createHistory from "history/lib/createHashHistory";
const Main = () => {
  return(
    <Router history={createHistory()}>
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
        <Route path="/user_info" component={UserInfo}/>
     </div>
    </Router>
  );
}

export default Main;
