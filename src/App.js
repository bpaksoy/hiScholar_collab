import React, { Component } from 'react';
import './App.css';
import Footer from "./components/Footer";
import Main from  "./components/Main";

class App extends Component {
 //  constructor(props){
 //    super(props);
 //    this.state={
 //      users:[],
 //      userInfo: []
 //    }
 //  }
 //
 //
 //  async  componentDidMount(){
 //     const urlUsers = 'http://localhost:5050/users';
 //     const requestMessages = await fetch(urlUsers)
 //     const users =  await requestMessages.json()
 //
 //     this.setState({users: users})
 //
 // }
 //
 //
 // getUser = (username) => {
 //   console.log("HAHAHH username is ", username);
 //  const users = this.state.users;
 //  let id;
 //  for(var i= 0; i < users.length; i++){
 //    if(users[i].username === username){
 //      id = users[i].id;
 //    }
 //  }
 //    fetch("http://localhost:5050/users/" + id + "/profile")
 //    .then(response => response.json())
 //       .then(user => {console.log(user)
 //        this.setState({userInfo: user})
 //        console.log("this.state.userInfo", this.state.userInfo);
 //     })
 //
 //  }


  render() {
    // console.log("this.state.userInfo", this.state.userInfo);
    // if(this.state.userInfo.length){
    //   return(
    //     <div className="App Site">
    //         <div className="Site-content">
    //           <div className="App-header">
    //             <Header/>
    //           </div>
    //             <div className="main">
    //               <Main />
    //             </div>
    //              <Profile user={this.state.userInfo}/>
    //         </div>
    //       <Footer/>
    //     </div>
    //   );
    // }
    return (
      <div className="App Site">
          <div className="Site-content">
            <div className="App-header">
             </div>
             <div className="main">
               <Main />
             </div>
          </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
