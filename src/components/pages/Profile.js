import React from "react";
import {Col, Card} from "react-materialize";

const Profile =({name, userInfo})=>{
  console.log("this is userInfo:", userInfo);
  return(
   <div>
      <h1>Welcome to Your Profile {name}!!</h1>
   </div>
  );
}


export default Profile;
