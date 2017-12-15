import React from "react";

class AddSchools extends React.Component{
 constructor(props){
   super(props);
   this.state={mySchools:[]}
 }

handleChange=(e)=>{
  e.preventDefault();
  const chosenSchool = e.target.value;
  console.log("this is the chosen school", chosenSchool)
}


render(){
  return(
    <div onClick={(e) => e.preventDefault()}>
      <form>
        <input s={6} name="school_name" list="schools" placeholder="Schools of Interest" list="tags"/>
          <datalist id="schools">
            <select name="school_name" size="3" multiple>
             <option value="Baruch College" onChange={this.handleChange}>Baruch College</option>
             <option value="Columbia University" onChange={this.handleChange}>Columbia University</option>
             <option value="Fashion Institute of Technology"onChange={this.handleChange}>Fashion Institute of Technology - FIT</option>
             <option value="Fordham University" onChange={this.handleChange}>Fordham University</option>
             <option value="Hunter College" onChange={this.handleChange}>Hunter College</option>
             <option value="John Jay College of Criminal Justice" onChange={this.handleChange}>John Jay College of Criminal Justice</option>
             <option value="New School" onChange={this.handleChange}>New School</option>
             <option value="New York University" onChange={this.handleChange}>New York University</option>
             <option value="Pace University" onChange={this.handleChange}>Pace University</option>
             <option value="Yeshiva University" onChange={this.handleChange}>Yeshiva University</option>
            </select>
           </datalist>

         <div id="mainSearch">
           <input type="submit" value="Add"/>
         </div>
       </form>
    </div>
  );
}

}



export default AddSchools;
