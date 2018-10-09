import React, { Component } from 'react';
import Person from '../Components/Persons/Person/Person';
import Persons from '../Components/Persons/Persons';
//import './App.css';
import cssStyles from './App.css';

import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Cockpit from '../Components/Cockpit/Cockpit'


class App extends Component {

  state = {

    person:[
      {
        id:"123",
        name:'Mukesh',
        age:'30'
      },
      {
        id:"124",
        name:'Rohit',
        age:'30'
      },
      {
        id:"125",
        name:'Ashwini',
        age:'30'
      },
      
    ], 
    showPerson:false

  }


  switchNameHandler=()=>{
  // console.log("ame was clicked");
   this.setState({showPerson:!this.state.showPerson});
  
  }
  deletePerson=(index)=>{
    // const person = this.state.person.slice(); 
     const person = [...this.state.person]; 
     person.splice(index,1)
     this.setState({person})
  }
  OnChange=(event,id)=>{
    
   //debugger
    const personIndex = this.state.person.findIndex( p =>{
       return p.id === id;
     });
     
     const person = [...this.state.person]; 
     const newPerson =person[personIndex];
     newPerson.name=event.target.value;
     this.setState({person})
  }


  render() {
    let persons = null;
      let btnclass = '';
      if(this.state.showPerson){
       persons = (
           <Persons 
             persons ={this.state.person} 
             clicked={(index) => this.deletePerson(index)}  
             changed={(event,id)=>this.OnChange(event,id)}/>
       
       )
         
      
     }
     


    return (
      <div className={cssStyles.App}>
           <Cockpit
             showPersons={this.state.showPersons}
             persons={this.state.person}
             switchNameHandler={this.switchNameHandler}
           />
           {persons}
      </div>
        
    );
  }
}

export default App;
