

const INITIAL_STATE ={ 
    users:[ 
    {
    title:"Rs. 1,799.",
    subtitle:"xbox gaming console",
    shot:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HNKT2_FV201?wid=1420&hei=930&fmt=png-alpha&qlt=80&.v=1588104584562",
    location:"Shah faisal colony no 3 karachi"
    },
    {
    title:"Rs 32,999",
    subtitle:"Apple Tv Box 4k-32GB",
    shot:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-tv-hero-select-201510_FMT_WHH?wid=335&hei=330&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1503607251341",
    location:"korangi karachi"
    },
    {
    title:"iphone 12",
    subtitle:"iphone 12 installments",
    shot:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphoneX-spacegray_FMT_WHH?wid=400&hei=400&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1546626271267",
    location:"korangi karachi"
    },
    {
    title:"iphone 12",
    subtitle:"iphone 12 avaliable in installments",
    shot:"https://www.dhresource.com/0x0s/f2-albu-g7-M01-5B-B3-rBVaSVrYLnuAEiKpAAFQ6xzGrAM475.jpg/new-100-original-refurbished-apple-iphone.jpg",
    location:"korangi karachi"
    },
    {
    title:"iphone 12",
    subtitle:"iphone 12 avaliable in installments",
    shot:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-watch-se-202009?wid=1200&hei=630&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1599936776000",
    location:"korangi karachi"
    },
    {
    title:"iphone 12",
    subtitle:"iphone 12 avaliable in installments",
    shot:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-watch-se-202009?wid=1200&hei=630&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1599936776000",
    location:"korangi karachi"
    },
    {
    title:"iphone 12",
    subtitle:"iphone 12 avaliable in installments",
    shot:"https://apollo-singapore.akamaized.net/v1/files/h80hufbptnk43-PK/image",
    location:"korangi karachi"
    },
  ]
}
export default (state = INITIAL_STATE, action) => {
    console.log("action==>", action)
    switch(action.type){
        case "SETDATA":
            return({
                ...state,
                users: [...state.users,action.users]
            })

    }
    return state;
}