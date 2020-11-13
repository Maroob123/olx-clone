import React from "react";
import Card from "./card";
// import { Link } from 'react-router-dom';
// import {store} from '../store/action';
//generates random id;
let guid = () => {
    let s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

console.log(guid());
//"c2181edf-041b-0a61-3651-79d671fa3db7"

var cas = [
    {
        id: guid(),
        title: "Rs. 1,799.",
        subtitle: "xbox gaming console",
        shot: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HNKT2_FV201?wid=1420&hei=930&fmt=png-alpha&qlt=80&.v=1588104584562",
        location: "Shah faisal colony no 3 karachi"
    },
    {
        id: guid(),
        title: "Rs 32,999",
        subtitle: "Apple Tv Box 4k-32GB",
        shot: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-tv-hero-select-201510_FMT_WHH?wid=335&hei=330&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1503607251341",
        location: "korangi karachi"
    },
    {
        id: guid(),
        title: "iphone 12",
        subtitle: "iphone 12 installments",
        shot: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphoneX-spacegray_FMT_WHH?wid=400&hei=400&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1546626271267",
        location: "korangi karachi"
    },
    {
        id: guid(),
        title: "iphone 12",
        subtitle: "iphone 12 avaliable in installments",
        shot: "https://www.dhresource.com/0x0s/f2-albu-g7-M01-5B-B3-rBVaSVrYLnuAEiKpAAFQ6xzGrAM475.jpg/new-100-original-refurbished-apple-iphone.jpg",
        location: "korangi karachi"
    },
    {
        id: guid(),
        title: "iphone 12",
        subtitle: "iphone 12 avaliable in installments",
        shot: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-watch-se-202009?wid=1200&hei=630&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1599936776000",
        location: "korangi karachi"
    },
    {
        id: guid(),
        title: "iphone 12",
        subtitle: "iphone 12 avaliable in installments",
        shot: "https://www.itl.cat/pngfile/big/187-1878127_a-very-high-resolution-large-format-vast-photo.jpg",
        location: "korangi karachi"
    },
    {
        id: guid(),
        title: "iphone 12",
        subtitle: "iphone 12 avaliable in installments",
        shot: "https://apollo-singapore.akamaized.net/v1/files/h80hufbptnk43-PK/image",
        location: "korangi karachi"
    },
]

function cs() {
    return (
        <div style={{ display: "grid", gridTemplateColumns: "auto auto auto auto" }}>
            {cas.map((cas) => (
                <Card tit={cas.title} subtit={cas.subtitle} pic={cas.shot} loc={cas.location} key={cas.id}/>
            ))}
        </div>
    );
}

export default cs;