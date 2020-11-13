import React from "react";
import "./card.css";
import Modal from 'react-modal';
import { Navbar, Mininav } from './navbar';
import Footer from './footer';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }

    render() {
        Modal.defaultStyles = {}
        return (
            <div>
                <div className="main" onClick={this.handleOpenModal}>
                    <div >
                        <img src={this.props.pic} alt="SnapShot" className="cardImg" />
                    </div>
                    <div>
                        <center> <p>{this.props.tit} <br />
                            {this.props.subtit} </p>
                        </center>
                        <p className="cardfooter">{this.props.loc}</p>
                    </div></div>
                {/* <button onClick={this.handleOpenModal}>Trigger Modal</button> */}
                <Modal
                    isOpen={this.state.showModal}
                    contentLabel="Minimal Modal Example"
                    className="MyWay"
                >
                    <Navbar />
                    <Mininav />
                    <div style={{ padding: "10%" }}>
                        <div onClick={this.handleCloseModal} className="close">&#10006;</div>
                        <div className="contentimage">
                            <img src={this.props.pic} alt="SnapShot" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "cover" }} />
                        </div>
                    </div>
                    <Footer />
                </Modal>
            </div>
        );
    }
}
// const Getvalue = (value) => {
//     console.log("value===>", value.pic);
//     return (
//         <img src={value.pic} alt="" />
//     );
// }

// const ExpendCard = (data) =>{
//     // console.log("value====>",data)
//     return(
//         <div style={{width:"15%"}}>
//             <img src={data.pic} alt="item"/>
//         </div>
//     )
// }

export default Card;
// export {ExpendCard};

// export { Getvalue };