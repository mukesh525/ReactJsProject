import React ,{Component} from 'react';

class ErrorBoundary extends Component{
  state = {
      hassError :false,
    errormessage:''
}   
  componentDidCatch =(error,info) =>{
      this.setState({
        hassError :true,
        errormessage:error
      })
  }

    render(){
         if(this.state.hassError){
          return  <h1>Something went wrong</h1>
        } else{
            return this.props.children
        }
    }
    
}


export default ErrorBoundary;