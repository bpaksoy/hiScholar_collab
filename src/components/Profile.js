import React from "react";

const Profile =({name, userInfo})=>{
  console.log("this is userInfo kihkihkih: ", userInfo);
  return(
   <div>
      <h1>Welcome to Your Profile {name}!!</h1>
   </div>
  );
}


export default Profile;
