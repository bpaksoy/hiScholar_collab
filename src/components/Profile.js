import React from "react";
import {Col, Card} from "react-materialize";

const Profile =({name, userInfo})=>{
  console.log("this is userInfo:", userInfo);
  return(
   <div>
      <h1>Welcome to Your Profile {name}!!</h1>
         <ul>
           <li>{userInfo.profile.city}</li>
           <li>{userInfo.profile.country}</li>
           <li>Programs:</li>
           {userInfo.programs.map((program, i)=><li key={i}>{program.program_name}</li>)}
         </ul>
   </div>
  );
}


export default Profile;
