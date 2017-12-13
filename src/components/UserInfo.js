import React from "react";
// import {Navbar} from "react-materialize";

class UserInfo extends React.Component{
  constructor(props){
   super(props);
    this.state ={
      formFilled: false
    }
  }

  handleChange = (e) =>{
    e.preventDefault();
    let name = e.target.name;
    let value= e.target.value;
    let text= e.target.value;
    this.setState({
     [name]:value
    })
    console.log("this.state is ", this.state);
  }

  handleSubmit = (e)=>{
    e.preventDefault();
    const user = Object.keys(this.state);
    const newUser ={};
    if(user.includes("name") && user.includes("last_name") && user.includes("country") &&  user.includes("city") && user.includes("state")){
      this.state.formFilled = true;
      const postUrl = 'http://localhost:5050/users/11';
       fetch(postUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
      body: JSON.stringify(newUser),
    })
    .then(response => {
      response.json()
      console.log("OLA Response", response)
    })
    }
  }

 render(){

   return(
    <div>
    <form onSubmit={this.handleSubmit}>
       <div className="col s6">
           <input type="text" placeholder="Name" name="name" onChange={this.handleChange}/>
           <input type="text" placeholder="Last Name" name="last_name" onChange={this.handleChange}/>
           <input type="text" placeholder="Country" name="country" onChange={this.handleChange}/>
           <input type="text" placeholder="City" name="city" onChange={this.handleChange}/>
           <input type="text" placeholder="State if applicable" name="state" onChange={this.handleChange}/>
       </div>
         <div className="col s6">
           <input name="alma_mater" type="text" placeholder="alma mater here" onChange={this.handleChange}/>
           <input name="gpa" type="number" placeholder="GPA" onChange={this.handleChange}/>
           <input name="toefl" type="number" placeholder="TOEFL" onChange={this.handleChange}/>
           <input name="ielts" type="number"placeholder="IELTS" onChange={this.handleChange}/>
           <input name="sat" type="number" placeholder="SAT" onChange={this.handleChange}/>
         </div>
         <div className="col s12">
           <input type="submit" value="Submit"/>
         </div>
      </form>
    </div>
   );
 }



}



export default UserInfo;
