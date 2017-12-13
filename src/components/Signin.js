import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from "./Home";
import Signup from "./Signup";
import {Navbar} from "react-materialize";

class Signin extends React.Component{

  constructor(props){
   super(props);
    this.state={
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
    fetch("http://localhost:5050/users/" + id + "/profile")
    .then(response => response.json())
       .then(user => {console.log(user)
        this.setState({userInfo: user})
        console.log("this.state.userInfo", this.state.userInfo);
     })

  }


 handleSubmit=(e)=>{
   e.preventDefault();
   console.log("get User", this.state.getUser)
  this.getUser(this.state.username);
  this.setState({text:""})
 }

  render(){
   return(
   <Router>
      <div>
        <Navbar className="navigation">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">HiScholar</a>
            <ul>
              <li><Link to="/sign_up">Signup</Link></li>
            </ul>
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
