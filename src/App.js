import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from  "./components/Main";
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Signin from "./components/Signin";

class App extends Component {
  constructor(props){
    super(props);
    this.state={users:[]}
  }


  async  componentDidMount(){
     const urlUsers = 'http://localhost:5050/users';
     const requestMessages = await fetch(urlUsers)
     const users =  await requestMessages.json()

     this.setState({users: users})
     let users1= this.state.users;
     console.log("App.js users ", users1);

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
       .then(user => console.log(user))

  }


  render() {
    return (
     <Router>
      <div className="App Site">
          <div className="Site-content">
            <div className="App-header">
              <Header />
             </div>
             <Signin getUser={this.getUser}/>
           <div className="main">
              <Main />
            </div>
          </div>
        <Footer/>
      </div>
      </Router>
    );
  }
}

export default App;
