import React from "react";
import Chapter from "./components/chapter";
import Header from "./components/header";
class App extends React.Component
{
  // eslint-disable-next-line no-useless-constructor
  constructor()
  {
    super();
  }
  render(){
    return (<>
    <h1>
      {this.props.titre}
      
    </h1>
    <br></br>
    <Header></Header>
    <Chapter></Chapter>
    
    </>)
  
  }
}
export default App;
