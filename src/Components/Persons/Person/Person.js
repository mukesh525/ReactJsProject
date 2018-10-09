import React from 'react';
import cssStyles from './Person.css'
const person = (props) =>{
 debugger;
    return (
        <div className={cssStyles.Person} >
         <p onClick={props.clicked}>I'm a {props.name} and I am {props.age} year old</p>
         <p>{props.children}</p>
         <input type ='text'  onChange={props.changed} value ={props.name}/>
    </div>
    );

}

export default person;