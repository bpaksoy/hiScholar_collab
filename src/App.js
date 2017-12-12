import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from  "./components/Main";


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



 // getUser = (id) => {
 //    fetch("http://localhost:5050/users/" + id + "/profile", {
 //      method:"GET",
 //      headers: {
 //        'Accept': 'application/json, text/plain, */*',
 //        'Content-Type': 'application/json'
 //      },
 //      body: JSON.stringify(id)
 //    }).then(data =>{
 //      console.log("done!");
 //    })
 //  }


  render() {
    return (
      <div className="App Site">
          <div className="Site-content">
            <div className="App-header">
              <Header />
             </div>
          <div className="main">
              <Main/>
            </div>
          </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
