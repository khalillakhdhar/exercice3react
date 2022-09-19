import React from "react";
class Header extends React.Component
{
  // eslint-disable-next-line no-useless-constructor
  constructor()
  {
    super();
    this.state={
        composants:"les composant de base"
    }
  }
  render(){
    return (<>
    
    <h2>{this.state.composants}</h2>
    </>
    );
  
  }
}
export default Header;
