import React from "react";
import {Navbar} from "react-materialize";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Signin from "./Signin";
import Signup from "./Signup";

const Home =()=>{
  return(
    <Router>
       <div style={{color:"#1E90FF"}}>
         <Navbar className="navigation">
           <div className="nav-wrapper">
             <a href="/" className="brand-logo">HiScholar</a>
            <hr/>
              <Route exact path="/sign_in" component={Signin}/>
              <Route path="/sign_up" component={Signup}/>
          </div>
         </Navbar>
         <h1>This is Home</h1>
        </div>
      </Router>
  );
}


export default Home;
