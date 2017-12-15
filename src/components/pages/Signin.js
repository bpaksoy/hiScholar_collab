import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from "./Home";
import UserInfo from "./UserInfo";
import Profile from "./Profile"
import {Navbar, Input} from "react-materialize";

class Signin extends React.Component{

  constructor(props){
   super(props);
    this.state={
      signedIn : false,
      users:[],
      id:"",
      userInfo: []
      //getUser: props.getUser
    }
  }

  async  componentDidMount(){
     const urlUsers = 'http://localhost:5050/users';
     const requestUsers = await fetch(urlUsers);
     const users =  await requestUsers.json();
     const profileInfoLink = "http://localhost:5050/students_info";
     const requestUserInformation = await fetch(profileInfoLink)
     const userInfo = await requestUserInformation.json();
      this.setState({users: users, userInfo: [...this.state.userInfo, userInfo[0]]});
    //  console.log("PLEASE GOD SHOW IT", this.state.userInfo[0])
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
  // console.log("this is state ", this.state);
 }


 getUser = (username) => {
//   console.log("HAHAHH username is ", username);
  const users = this.state.users;
  let id;
  for(var i= 0; i < users.length; i++){
    if(users[i].username === username){
      id = users[i].id;
      this.setState({id:id})
    }
  }
  let usersLink = "http://localhost:5050/users/" + id + "/profile";
    fetch(usersLink)
    .then(response => response.json())
       .then(user => {console.log(user)
        // this.setState({userInfo: [...this.state.userInfo, user],
        // })
     })

  }


 handleSubmit=(e)=>{
   e.preventDefault();
  if(this.state.userInfo.length){
    this.setState({signedIn: true})
  }
 }

  render(){
   console.log("status of signin id", this.state.id)
   const userId = this.state.id
  //  console.log("here is the path", `/${userId}/profile`)
      if(this.state.signedIn){
         // const user_name = this.state.userInfo.profile.name;
         // const userInfo = this.state.userInfo
         const path = `/${userId}/profile`;
          return(
            <Link to={path}>
              <Profile userInfo={this.state.userInfo}/>
            </Link>
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
           </div>
          </Navbar>

         <h2>This is Signin</h2>
           <form onSubmit={this.handleSubmit}>
              <Input s={6} value={this.state.text} type="text" name="username" onChange={this.handleChange}/>
              <Input s={6} value={this.state.text} type="password" name="password" onChange={this.handleChange}/>
              <button type="submit">Submit</button>
           </form>
        </div>
      </Router>
     );
 }
}


export default Signin;
