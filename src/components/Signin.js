import React from "react";

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
  this.getUser(this.state.username)
  this.setState({})
 }

  render(){
   return(
    <div>
     <h2>This is Signin</h2>
     <form onSubmit={this.handleSubmit}>
      <input value={this.state.text} username="text" name="username" onChange={this.handleChange}/>
      <input value={this.state.text} password="number" name="password" onChange={this.handleChange}/>
      <button type="submit">Submit</button>
     </form>
    </div>
   );
 }
}


export default Signin;
