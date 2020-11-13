import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import logo from "../images/olx-logo.png";
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(10),
        height: theme.spacing(10),
    },
}));

const style = {
    margin: "3% 20%",
    padding: "25px",
}
const select = {
    fontSize: "18px",
    padding: "5px",
}
function Post() {
    const classes = useStyles();
    return (
        <>
            <div>
                <AppBar>
                    <Toolbar position="static" style={{ backgroundColor: "#eeeeee" }}>
                        <Link to='/'>   <IconButton edge="start" color="inherit" aria-label="menu">
                            <img src={logo} width="68px" height="48px" alt="olx-logo" />
                        </IconButton>
                        </Link>
                    </Toolbar>
                </AppBar>
            </div>
            <div style={style}>
                <center><h1>POST YOUR ADD</h1></center>
                <div style={{ border: "1px solid #ccc" }}>
                    <form>
                        <div style={{ display: "flex", padding: "20px " }}>
                            <h2>CHOOSE CATEGORY</h2>
                            <select className="selector" style={{ margin: "auto", width: "50%", height: "50px", fontSize: "18px" }}>
                                <option value="Mobile Phone" style={select}>Mobile Phone</option>
                                <option value="Cars" style={select}>Cars</option>
                                <option value="Motorcycle" style={select}>Motorcycle</option>
                                <option value="Houses" style={select}>Houses</option>
                                <option value="TV-Video-Audio" style={select}>TV-Video-Audio</option>
                                <option value="Tablets" style={select}>Tablets</option>
                                <option value="Lands&Plots" style={select}>Lands&Plots</option>
                            </select>
                        </div>
                        <hr style={{ color: "#ccc" }} />
                        <div style={{ padding: "25px" }}>
                            <h2>INCLUDE SOME DETAILS</h2>
                            <label>Conditions *</label><br/>
                            <Button variant="outlined" color="primary">New</Button>
                            <Button variant="outlined" color="primary">Used</Button>
                            <br />
                            <br />
                            <label>Add title *</label>
                            <br/>
                            <input styles={{}} maxLength="70" />
                            <br />
                            <span>A minimum length of 5 characters is required. Please edit the field.{''}</span>
                            <br />
                            <br />
                            <label>Discription *</label>
                            <br />
                            <input type="text" maxLength="4096" />
                            <br />
                            <br />
                        </div>
                        <hr style={{ color: "#ccc" }} />
                        <div style={{ padding: "25px" }}>
                            <h2>SET A PRICE</h2>
                            <label htmlFor="price">Price *</label>
                            <br/>
                            <input type="text" name="price" />
                        </div>
                        <hr style={{ color: "#ccc" }} />
                        <div style={{ padding: "25px" }}>
                            <h2>UPLOAD A IMAGE</h2>
                        </div>
                        <hr style={{ color: "#ccc" }} />
                        <div style={{ padding: "25px" }}>
                            <h2>ENTER YOUR LOCATION</h2>
                            <input type="text"/>
                        </div>
                        <hr style={{ color: "#ccc" }} />
                        <div style={{ padding: "25px" }}>
                            <h2>REVIEW YOUR DETAILS</h2>
                            <Avatar src="/broken-image.jpg" className={classes.large} />
                            <label htmlFor="">Name</label>
                            <br/>
                            <input type="text"/>
                            <br/><br/>
                            <label htmlFor="">Mobile Phone Number</label><br/>
                            <input type="text"/>
                        </div>
                        <hr style={{ color: "#ccc" }} />
                        <div style={{ padding: "25px" }}>

                        </div>
                    </form>
                </div>
            </div>
            <div>
                <table style={{ width: "100%", border: "1px solid #002f34", borderCollapse: "collapse" }}>
                    <tr style={{ backgroundColor: "#002f34", color: "white", borderTop: "10px solid #002f34", borderBottom: "10px solid #002f34", fontSize: "small" }}>
                        <td style={{ paddingLeft: "60px" }}>Other countries: India-South Africa-Indonesia</td>
                        <td ></td>
                        <td >Free Classifieds in Pakistan. © 2006-2020 OLX</td>
                    </tr>
                </table>
            </div>
        </>
    )
}


export default Post;
