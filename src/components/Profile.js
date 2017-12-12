import React from "react";



const Profile =({user})=>{


  return(
   <div>
      <h1>Hello {user.profile.name}!!</h1>
   </div>
  );
}


export default Profile;
