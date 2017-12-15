import React from "react";
import {Icon} from "react-materialize";
import PersonalInfoForm from "../userInfo/PersonalInfoForm";
import InfoCard from "../userInfo/InfoCard";
import PersonalStatementCard from '../userInfo/PersonalStatementCard';

const Profile =({ userInfo, personalStatements, personalStatementTitle, personalStatementPost })=>{
console.log("WHERE IS THIS", userInfo[0])
  const isLoggedIn =()=>{
    if(userInfo.length){
      return true;
    }
    return false;
  }

  const logInState = isLoggedIn();
 console.log("Am I logged in?:", isLoggedIn());
  return(
   <div onClick={(e) => e.preventDefault()}>
      <h1><Icon className="material-icons medium">account_circle</Icon>Welcome to Your Profile !!</h1>
        <div><Icon className="material-icons medium">add_a_photo</Icon></div>
       {(logInState)?<button onClick={(e) => e.preventDefault()}><InfoCard userInfo={userInfo}/></button> : <PersonalInfoForm/>}
       <br/>

      <PersonalStatementCard personalStatements={personalStatements} personalStatementTitle={personalStatementTitle} personalStatementPost={personalStatementPost} />
   </div>
  );
}


export default Profile;
