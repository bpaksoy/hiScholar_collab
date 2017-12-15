import React from "react";
import { Collection, CollectionItem } from "react-materialize";

const InfoCard = ({userInfo}) =>{

 const profileInfo = userInfo[0];
 console.log("profile Information here", profileInfo);

  return(
    <div onClick={(e) => e.preventDefault()}>
       <Collection header='Personal Information'>
         <CollectionItem>{`${profileInfo.first_name} ${profileInfo.last_name}`}</CollectionItem>
         <CollectionItem>{`${profileInfo.state}, ${profileInfo.country}`}</CollectionItem>
         <CollectionItem>{profileInfo.alma_mater}</CollectionItem>
          <CollectionItem>{`GPA: ${profileInfo.GPA}`}</CollectionItem>
         <CollectionItem>{`TOEFL: ${profileInfo.toefl}, IELTS: ${profileInfo.ielts}, SAT: ${profileInfo.sat}`}</CollectionItem>
       </Collection>
    </div>
  );
}

export default InfoCard;
