import React from "react";
import {Row, Input} from "react-materialize";

const PersonalInfoForm =()=>{
  return(
     <div>
       <form>
        <div>
          <Row>
          	<Input s={6} type="text" label="First Name"></Input>
            <Input s={6} type="text" label="Last Name"></Input>
          	<Input s={6}  type="text" label="Country"></Input>
            <Input s={6}  type="text" label="State"></Input>
            <Input s={6}  type="text" label="City"></Input>
            <Input s={6}  type="text" label="Alma Mater"></Input>
            <Input s={6}  type="number" label="GPA"></Input>
            <Input s={6}  type="number" label="TOEFL"></Input>
            <Input s={6}  type="number" label="IELTS"></Input>
            <Input s={6}  type="number" label="SAT"></Input>
          </Row>
         </div>
         <Row>
          <Input s={6} type="submit"></Input>
         </Row>
      </form>
    </div>
  );
}



export default PersonalInfoForm;
