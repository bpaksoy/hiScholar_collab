import React from "react";

class User extends React.Component{

  constructor(props){
   super(props);
    this.state={
    }
  }

 handleChange = (e) =>{
   e.preventDefault();
   let name = e.target.name;
   let value= e.target.value;
   let text= e.target.value;
   this.setState({
     [name]: value,
     [text]: value
   })
  console.log("this is state ", this.state);
 }

 handleSubmit=(e)=>{
  this.setState({text:""})
 }

  render(){
   return(
    <div>
     <form onSubmit={this.handleSubmit}>
      <input value={this.state.text} username="text" name="username" onChange={this.handleChange}/>
      <input value={this.state.text} password="number" name="password" onChange={this.handleChange}/>
      <button type="submit">Submit</button>
     </form>
    </div>
   );
 }
}


export default User;
