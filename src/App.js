import React, { Component } from 'react';
import Person from './Person/Person'
import './App.css';

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
    
    const personIndex = this.state.person.findIndex( p =>{
       return p.id === id;
     });
     
     const person = [...this.state.person]; 
     const newPerson =person[personIndex];
     newPerson.name=event.target.value;
     this.setState({person})
  }


  render() {
    const style ={
      backgroundColor:'green',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer',
      color:'white'
    }
    
   
      let persons = null;
      if(this.state.showPerson){
       persons = (
        <div>
          {this.state.person.map((person,index) => {

             return <Person 
                      key={person.id}
                      click={() => this.deletePerson(index)}
                      change={(event)=>this.OnChange(event,person.id)}
                      name={person.name} 
                      age ={person.age} />
                  
             })}
            </div> 

         
   
       )
       style.backgroundColor="red"
     }
     


    return (
      <div className="App">
       <h1>Hi I'am React App</h1>
          <button  style ={style}onClick={this.switchNameHandler}> Toggle Person</button>
           {persons}
         </div>
        
    );
  }
}

export default App;
