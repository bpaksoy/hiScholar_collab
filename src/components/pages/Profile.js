import React from "react";
import {Icon} from "react-materialize";
import PersonalInfoForm from "../userInfo/PersonalInfoForm";
import InfoCard from "../userInfo/InfoCard";

const Profile =({userInfo})=>{

  const isLoggedIn =()=>{
    if(userInfo.profile){
      return true;
    }
    return false;
  }

  const logInState = isLoggedIn();
//  console.log("this is isLoggedIn OLAAAAAA:", isLoggedIn());
  return(
   <div onClick={(e) => e.preventDefault()}>
      <h1><Icon className="material-icons medium">account_circle</Icon>Welcome to Your Profile !!</h1>
        <div><Icon className="material-icons medium">add_a_photo</Icon></div>
       {(logInState)?<button onClick={(e) => e.preventDefault()}><InfoCard userInfo={userInfo}/></button> : <PersonalInfoForm/>}
       <br/>
   </div>
  );
}


export default Profile;
