import React from 'react';
import classes from './Cockpit';
const cockpit = (props) =>{
   const assignedclass=[]
   if(props.persons.length <2){
    assignedclass.push(classes.red)
   }
   if(props.persons.length <1){
    assignedclass.push(classes.bold)
  }
   let btnClass='';
   if(props.showPerson){
     btnClass=classes.Red
   }


  return (
      <div className={classes.Cockpit}>
            <h1>Hi I'am React App</h1>
           <button className ={classes.btnclass} onClick={props.switchNameHandler}> Toggle Person</button>
    </div>
  );
}

export default cockpit;