import React from "react";
import Profile from "./Profile"
// import {Navbar} from "react-materialize";

class UserInfo extends React.Component{
  constructor(props){
   super(props);
    this.state ={
      formFilled: false,
      users: props.users,
      userInfo: []
    }

      //console.log("show this.state.users show meeeeee", this.state.users);
      console.log("this is the users", this.state.users);
  }


  // handleChange = (e) =>{
  //   e.preventDefault();
  //   let name = e.target.name;
  //   let value= e.target.value;
  //   let text= e.target.value;
  //   this.setState({
  //    [name]:value
  //   })
  //   console.log("this.state is ", this.state);
  // }

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   const postUrl = 'http://localhost:5050/profile';
  //   let myHeaders = new Headers({
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json'
  //   })
  //   const user = Object.keys(this.state);
  //   const newUser ={};
  //   if(user.includes("first_name") && user.includes("last_name") && user.includes("country") &&  user.includes("city") && user.includes("state")){
  //     this.state.formFilled = true;
  //
  //      fetch(postUrl, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Accept': 'application/json'
  //       },
  //     body: JSON.stringify(newUser),
  //   })
  //   .then(response => {
  //     response.json()
  //     console.log("OLA Response", response)
  //   })
  //   }
  // }

  postProfile = (e) => {
    e.preventDefault();

    let users = this.state.users;
    let lastUser = users[users.length -1];
    let id = lastUser.id;
    const postUrl = "http://localhost:5050/users/" + id ;

    let myHeaders = new Headers({
      Accept: 'application/json',
      'Content-Type': 'application/json'
    })
    let userProfile = {
      first_name: e.target.first_name.value,
      last_name: e.target.last_name.value,
      country: e.target.country.value,
      city: e.target.city.value,
      state: e.target.state.value,
      alma_mater: e.target.alma_mater.value,
      gpa: e.target.gpa.value,
      toefl: e.target.toefl.value,
      ielts: e.target.ielts.value,
      sat: e.target.sat.value
    }

   this.setState({
     userInfo : [...this.state.userInfo, userProfile]
   })
     console.log("this.state.userInfo", this.state.userInfo);

    fetch(postUrl, {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(userProfile)
    })
    .then(response => {
      let contentType = response.headers.get("Content-Type")
      if(contentType && contentType.includes("application/json")) {
        console.log(response.json());
        return response.json()
      } else {
        throw new TypeError("Oops, we haven't got JSON!")
      }
    })
    .then(userData => {
      this.setState({
        formFilled: true,
       })
     console.log("formfilled", this.state.formFilled)
    })
    .catch(err => console.log(err));
  }

 render(){
   if(this.state.userInfo.length){
     return(
       <Profile userInfo={this.state.userInfo}/>
     )
   }
   return(
    <div>
    <form onSubmit={this.postProfile}>
       <div className="col s6">
           <input type="text" placeholder="Name" name="first_name" onChange={this.handleChange}/>
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
