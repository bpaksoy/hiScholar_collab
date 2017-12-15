import React from "react";
// import {Col, Card} from "react-materialize";
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
      <h1>Welcome to Your Profile {userInfo.user.username}!!</h1>
       {(logInState)? <button onClick={(e) => e.preventDefault()}><InfoCard userInfo={userInfo}/></button> : <button onClick={(e) => e.preventDefault()}><PersonalInfoForm/></button>}
   </div>
  );
}


export default Profile;
