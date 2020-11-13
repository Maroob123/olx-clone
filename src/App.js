// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import ButtonAppBar from "./comps/navbar"
import picture from "./images/olx-bar.png";
import Fouter from "./comps/footer";
import Cas from "./comps/cards";



class App extends Component {
  render() {
    return (
      <>
        <div className="App">
          <ButtonAppBar />
        </div>
        <div>
          <center> <img src={picture} alt="olx" className="cover" /></center>
        </div>
        <div style={{ margin: "6% 4%" }}>
          <h2>fresh Recommendation  </h2>
          <Cas />
        </div>
        <div>
          <center><button id="loadmore">Load More</button></center>
        </div>
        <div>
          <table>
            <tr>
              <td colSpan="2" style={{ width: "33.3%" }}><img src="https://statics.olx.com.pk/external/base/img/phone-app.png" /></td>
              <td colSpan="2" style={{ width: "33.3%", color: "#002f34", fontFamily: "timesNewRoman", borderRight: "2px solid #ddd" }}>
                <h1>TRY THE OLX APP</h1>
                <h3>Buy, sell and find just about anything using the app on your mobile.</h3>
                {/* <div style={{color: "gray"}}></div> */}
              </td>
              <td colSpan="2" style={{ width: "33.3%" }}>
                <h3 style={{ marginLeft: "50px", fontFamily: "TimesNewRoman", color: "#002f34" }}>GET YOUR APP TODAY</h3>
                <img src="https://statics.olx.com.pk/external/base/img/appstore_2x.png" style={{ marginRight: "10px", marginLeft: "30px" }} />
                <img src="https://statics.olx.com.pk/external/base/img/playstore_2x.png" />
              </td>
            </tr>
          </table>
          <Fouter />
        </div>
      </>
    );
  }
}
export default App;
