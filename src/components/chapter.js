import React from "react";
class Chapter extends React.Component
{
  // eslint-disable-next-line no-useless-constructor
  constructor()
  {
    super();
    this.state=
    {
        ch1:'states',
        ch2:'props',
        ch3:'constructor'
    }
  }
  render(){
    return (<>
    
    <ol>
    <li>    {this.state.ch1}
    </li>
    <li>
        {this.state.ch2}
        </li>
        <li>
    
        {this.state.ch3}</li>
    </ol>
    
    </>)
  
  }
}
export default Chapter;
