import React from 'react';
import './card.css'

class login extends React.Component {
    render() {
        return (
            <>
            <li id="myBtn">login</li>

            <div id="myModal" onClick={()=>{this.styles.display='block'}} className="modal">

                <div className="modal-content">
                    <span className="close">&times;</span>
                    <p>Some text in the Modal..</p>
                </div>

            </div>
            </>
        )
    }
}

export default login;