import React from "react";
import {Row,Icon, Input, Col} from "react-materialize";

const PersonalInfoForm =()=>{
  return(
     <div>
        <Row>
        	<Input s={6} type="text" label="First Name"></Input>
          <Input s={6} type="text" label="Last Name"></Input>
        	<Input s={6}  type="text" label="Country"></Input>
          <Input s={6}  type="text" label="State"></Input>
          <Input s={6}  type="text" label="City"></Input>
          <Input s={6}  type="text" label="Alma Mater"></Input>
          <Input s={6}  type="number" label="GPA"></Input>
        </Row>
    </div>
  );

}



export default PersonalInfoForm;
