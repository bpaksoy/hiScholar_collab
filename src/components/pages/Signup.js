import React from "react";
import Home from "./Home";
import Signin from "./Signin";
import {Navbar} from "react-materialize";
import UserInfo from './UserInfo';

import { BrowserRouter as Router, Route} from 'react-router-dom';

class Signup extends React.Component{

  constructor(props){
   super(props);
    this.state = {
      users:[],
      signedUp: false
    }
  }

  async componentDidMount(){
     const urlUsers = 'http://localhost:5050/users';
     const requestMessages = await fetch(urlUsers)
     const users =  await requestMessages.json()
     this.setState({users: users, name:""})
  }

 // handleChange = (e) => {
 //   e.preventDefault();
 //   let name = e.target.name;
 //   let value= e.target.value;
 //   let text= e.target.value;
 //   this.setState({
 //     [name]: value,
 //     [text]:value
 //   })
 //   console.log("this is state ", this.state);
 // }

 postUser = (e) => {
   e.preventDefault();
  const postUrl = "http://localhost:5050/sign_up";
  let myHeaders = new Headers({
    Accept: 'application/json',
    'Content-Type': 'application/json'
  })
  let username = document.getElementById('username').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let newUser = {
    username: username,
    email: email,
    hashed_password: password
  }

  fetch(postUrl, {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(newUser)
  })
  .then(response => {
    let contentType = response.headers.get("Content-Type")
    if(contentType && contentType.includes("application/json")) {
      return response.json()
    } else {
      throw new TypeError("Oops, we haven't got JSON!")
    }
  })
  .then(userData => {
   const lastUser= userData[userData.length -1];
    this.setState({ users: [...this.state.users, lastUser], signedUp: true })
    console.log("this is list of users", this.state.users)
  })
  .catch(err => console.log(err));
 }


 // handleSubmit=(e)=>{
 //  e.preventDefault();
 //  console.log("get User", this.state.getUser)
 //  this.setState({text:""})
 // }
 signUpStatus = ()=>{
    console.log("hello signup status", this.state.signedUp)
 }


  render(){
   if(this.state.signedUp){
     return(
        <UserInfo users={this.state.users}/>
     );
   }
   return(

    <Router>
      <div style={{color:"#1E90FF"}}>
        <Navbar className="navigation">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">HiScholar</a>
           <hr/>
             <Route exact path="/" component={Home}/>
             <Route path="/sign_in" component={Signin}/>
          </div>
        </Navbar>

     <h2>This is Signup</h2>
     <form onSubmit={
       // this.handleSubmit
       this.postUser
     }>
      <input id="username" type="text"  name="username" onChange={this.handleChange} placeholder="username"/>
      <input id="email" type="email"  name="email" onChange={this.handleChange} placeholder="email"/>
      <input id="password" type="password" name="password" onChange={this.handleChange} placeholder="password"/>
      <input type="password" name="repeat-password" onChange={this.handleChange} placeholder="repeat-password"/>
      <button type="submit">Submit</button>
     </form>
     <br/>
    </div>
   </Router>
   );
 }
}


export default Signup;
