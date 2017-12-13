import React from "react";
import Home from "./Home";
import Signin from "./Signin";
import {Navbar} from "react-materialize";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Signup extends React.Component{

  constructor(props){
   super(props);
    this.state={
      users:[],
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

 postUser = () => {

 }


 handleSubmit=(e)=>{
   e.preventDefault();
   console.log("get User", this.state.getUser)
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
              <li><Link to="/sign_in">Signin</Link></li>
            </ul>
           <hr/>
             <Route exact path="/" component={Home}/>
             <Route path="/sign_in" component={Signin}/>
          </div>
        </Navbar>

     <h2>This is Signup</h2>
     <form onSubmit={this.handleSubmit}>
      <input value={this.state.text} type="text"  name="username" onChange={this.handleChange} placeholder="username"/>
      <input value={this.state.text} type="email"  name="email" onChange={this.handleChange} placeholder="email"/>
      <input value={this.state.text} type="number" name="password" onChange={this.handleChange} placeholder="password"/>
      <input value={this.state.text} type="number" name="repeat-password" onChange={this.handleChange} placeholder="repeat-password"/>
      <button type="submit">Submit</button>
     </form>
    </div>
   </Router>
   );
 }
}


export default Signup;
