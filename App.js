import './App.css';
import Header from './Components/Header';
import React from 'react';
import Comp from './Components/Comp';

class App extends React.Component{
state={
  name:"Sourav",
  count:0,
  show:true
}
inc=()=>{
  this.setState((previousState)=>({count: previousState.count+1}))
}

componentDidMount(){
  this.setState((previousState)=>({count: 50}))
  console.log("component created")
}
componentDidUpdate(){
  if(this.state.count%2===0){
    console.log("did update")
  }
}


  render(){
let child;
if(this.state.show){
  child= <Comp name={this.name}/>
}

  return(
    <>
    <Header/>
   <h1>class components</h1>
   <h1>state is{this.state.count}</h1>
   <button onClick={this.inc}>click</button>
   {child}
   <button onClick={()=>this.setState({show:false})}>delete child component</button>
   </>
  );
}
}

export default App;
