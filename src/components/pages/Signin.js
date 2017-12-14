import React from "react";
import { BrowserRouter as Router, Redirect, Route, Link } from 'react-router-dom';
import Home from "./Home";
import Signup from "./Signup";
import Profile from "./Profile"
import {Navbar} from "react-materialize";

class Signin extends React.Component{

  constructor(props){
   super(props);
    this.state={
      signedIn : false,
      users:[],
      userInfo: []
      //getUser: props.getUser
    }
  }

  async  componentDidMount(){
     const urlUsers = 'http://localhost:5050/users';
     const requestMessages = await fetch(urlUsers)
     const users =  await requestMessages.json()
     this.setState({users: users})

     console.log("steph users here", users);

  }

 handleChange = (e) =>{
   e.preventDefault();
   let name = e.target.name;
   let value= e.target.value;
   let text= e.target.value;
   this.setState({
     [name]: value,
     [text]:value
   })
   this.getUser(this.state.username);
   console.log("this is state ", this.state);
 }


 getUser = (username) => {
   console.log("HAHAHH username is ", username);
  const users = this.state.users;
  let id;
  for(var i= 0; i < users.length; i++){
    if(users[i].username === username){
      id = users[i].id;
    }
  }
  let profileLink = "http://localhost:5050/users/" + id + "/profile"
    fetch(profileLink)
    .then(response => response.json())
       .then(user => {console.log(user)
        this.setState({userInfo: user})
        console.log("this.state.userInfo", this.state.userInfo);
     })

  }


 handleSubmit=(e)=>{
   e.preventDefault();
  if(this.state.userInfo){
    this.setState({signedIn: true})
  }
  this.setState({})
 }

  render(){
    console.log("status of signin", this.state.signedIn)
      if(this.state.signedIn){
         // const user_name = this.state.userInfo.profile.name;
         // const userInfo = this.state.userInfo
          return(
            <Link to="/profile">
              <Profile />
            </Link>
          );
    }
     return(
     <Router>
        <div>
          <Navbar className="navigation">
            <div className="nav-wrapper">
              <a href="/" className="brand-logo">HiScholar</a>
             <hr/>
               <Route exact path="/" component={Home}/>
               <Route path="/sign_up" component={Signup}/>
           </div>
          </Navbar>

       <h2>This is Signin</h2>
       <form onSubmit={this.handleSubmit}>
          <input value={this.state.text} type="text" name="username" onChange={this.handleChange}/>
          <input value={this.state.text} type="number" name="password" onChange={this.handleChange}/>
          <button type="submit">Submit</button>
       </form>
        </div>
      </Router>
     );
 }
}


export default Signin;
