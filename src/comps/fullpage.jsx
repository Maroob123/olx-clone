import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
// import {ExpendCard} from './card';
// import {Getvalue} from './card';

class discription extends React.Component{
    render(){
        // console.log("Getvalue ===",Getvalue)
        return(
            <div>
                <Navbar />
                {/* <Getvalue /> */}
                {/* <ExpendCard /> */}
                <Footer />
            </div>
        )
    }
}
export default discription;