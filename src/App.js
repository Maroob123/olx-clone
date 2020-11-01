// import logo from './logo.svg';
import './App.css';
import {Component} from 'react';
import ButtonAppBar from "./comps/navbar"
import picture from "./images/olx-bar.png";
import Fouter from "./comps/footer"

// import logo from "./images/olx-logo.png"
// import exi from "https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"

class App extends Component{
  render(){
    console.log(Fouter);
    return(
      <>
      <div className="App">
        <ButtonAppBar/>  
      </div>
      <div>
     <center> <img src={picture} alt="olx" className="cover"/></center>
      </div>
      <div>
        <center><button id="loadmore">Load More</button></center>
      </div>
      <div>
      <Fouter/>
      </div>
      </>
    );
  }
}
export default App;
