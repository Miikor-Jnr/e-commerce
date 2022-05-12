import React from "react"
// import pic2 from "./phone2.jpg";

export default function ForSell(props){
    let mysize = (props.remaining/props.totalItem) *100

    function showFullImage(){
        console.log("I was Clicked")
    }

    return (
    <div className="sale-div" onClick={showFullImage}>
        <div className="sale-holder">
            <img src={`/Images/${props.img}.jpg`}  alt="Our product" className="sell-image"></img>
        </div>
        <p className="description">{props.description}</p>
        <h4 className="price">{props.price}</h4>
        <p className="item-left">{props.remaining}</p>
        <div className="progress-bar">
            <div className="progress" style={{width: `${mysize}%`}}></div>
        </div>
    </div>
    )
}