import React from "react";
import "./card.css";

const card = (props) => {
    return(
    <div className="main">
            <div>
                <img src={props.pic} alt="picture" className="cardImg"/>
            </div>
            <div>
               <center> <p>{props.tit} <br />
                {props.subtit} </p>
                </center>
                <p className="cardfooter">{props.loc}</p>
            </div>
    </div>  
    )
}

export default card;