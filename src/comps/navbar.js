import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import logo from "../images/olx-logo.png";
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';

import "../App.css";
// import Autocomplete from "./countrysearch"
// import NewComponent from "./accordion";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <AppBar>
        <Toolbar position="static"  style={{ backgroundColor: "#eeeeee" }}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <img src={logo} width="68px" height="48px" alt="olx-logo" />
          </IconButton>
          <input type="text" name="search" placeholder="Search.." id="location" />
          <input type="text" name="search" placeholder="Find Cars, Mobile Phones and more.." id="searchbox" />
          <button id="search-btn"></button>
          <a href="http://localhost:3000/"  id="link">Login</a>
          <button className="border">+ SELL</button>
        </Toolbar>
        <Toolbar position="relative" style={{ backgroundColor: "white", minHeight: "20px !important"}}>
          {/* <button id="megaMenu">All categories</button> */}
          <input type="button" value="ALL CATEGORIES" id="megaMenu"/>
          <a href="#" id="link">Mobile Phones</a>
          <a href="#" id="link">Cars</a>
          <a href="#" id="link">Motorcycle</a>
          <a href="#" id="link">Houses</a>
          <a href="#" id="link">TV-Video-Audio</a>
          <a href="#" id="link">Tablets</a>
          <a href="#" id="link">Land & Plots</a>
        </Toolbar>
      </AppBar>
    </div>
  );
}