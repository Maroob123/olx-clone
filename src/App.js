// import logo from './logo.svg';
import './App.css';
import {Component} from 'react';
import ButtonAppBar from "./comps/navbar"
import picture from "./images/olx-bar.png";
import Fouter from "./comps/footer";
import { CardActionArea } from '@material-ui/core';

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
      <div style={{margin: "80px 0px"}}>
        <button>My name</button>
        <button>avaliable</button>
        <CardActionArea />
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
