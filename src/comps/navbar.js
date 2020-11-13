import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import logo from "../images/olx-logo.png";
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import {minHeight} from '@material-ui/system';

import "../App.css";
// import Autocomplete from "./countrysearch"
// import NewComponent from "./accordion";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

function ButtonAppBar() {
  const classes = useStyles();

  return (
    <>
    <div>
      <AppBar>
        <Toolbar position="static"  style={{ backgroundColor: "#eeeeee" }}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <img src={logo} width="68px" height="48px" alt="olx-logo" />
          </IconButton>
          <input type="text" name="search" placeholder="Karachi Pakistan" id="location" />
          <input type="text" name="search" placeholder="Find Cars, Mobile Phones and more.." id="searchbox" />
          <button id="search-btn"></button>
          <a href="http://localhost:3000/"  id="link">Login</a>
          <button className="border">+ SELL</button>
        </Toolbar>
      </AppBar>
    </div>
    <div position="relative" minHeight="10%" style={{ backgroundColor: "white", display: "flex", padding: "10px 30px", marginTop: "75px", boxShadow: "0px 1px 7px 0px silver"}}>
          <input type="button" value="ALL CATEGORIES" id="megaMenu"/>
          <a id="link">Mobile Phones</a>
          <a id="link">Cars</a>
          <a id="link">Motorcycle</a>
          <a id="link">Houses</a>
          <a id="link">TV-Video-Audio</a>
          <a id="link">Tablets</a>
          <a id="link">Land & Plots</a>
        </div>
    </>
  );
}

// function smlinks(){
//   return(
//   );
// }

export default ButtonAppBar;

 