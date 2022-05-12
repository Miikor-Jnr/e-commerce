import React from "react"
import pic1 from "./phone1.jpg";
import pic2 from "./phone2.jpg";
import pic3 from "./phone3.jpg";
import pic4 from "./phone4.jpg";



export default function Section1(){
    return(
        <div className="section1-holder">
            <div className="delivery-bar"><h3>Free Delivery in Lagos, Ibadan and Abuja</h3></div>
            <ul className="slider">
                <li><div className="image-holder"><img src={pic1} alt="my first bag"></img></div></li>
                <li><div className="image-holder"><img src={pic2} alt="my first bag"></img></div></li>
                <li><div className="image-holder"><img src={pic3} alt="my first bag"></img></div></li>
                <li><div className="image-holder"><img src={pic4} alt="my first bag"></img></div></li>
            </ul>
        </div>
    )
}
