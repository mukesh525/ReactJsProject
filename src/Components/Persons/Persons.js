import React from 'react';
import Person from './Person/Person';


const persons =(props)=> {
     // debugger
     return  props.persons.map((person,index) => {
        
        return  <Person 
                     key={person.id}
                     name={person.name} 
                     clicked={props.clicked}
                     changed={(event)=>props.changed(event,person.id)}
                     age ={person.age} />
               
        
      });
    }
      export default persons;