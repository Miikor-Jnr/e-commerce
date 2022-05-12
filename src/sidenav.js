import React from "react"
import {GrClose, GrGamepad} from "react-icons/gr"
import {MdOutlineRateReview, MdRadio, MdStars, MdOutlineFastfood} from "react-icons/md"
import {RiCouponLine, RiShirtLine, RiTShirtLine, RiCaravanLine, RiPaintBrushLine} from "react-icons/ri"
import {BsSuitHeart} from "react-icons/bs"
import {CgAppleWatch} from "react-icons/cg"
import {AiOutlineApple} from "react-icons/ai"
import {HiOutlineDesktopComputer, HiOutlineOfficeBuilding} from "react-icons/hi"
import {GiBabyFace} from "react-icons/gi"
import {FaDumbbell} from "react-icons/fa"
import {BiCar} from "react-icons/bi"



export default function Sidenav(props){

    const setLeft = {
        left: props.isShow ? '0' : '-100%'
    }


    return(
    <div className="left2" style={setLeft}>
        <div className="list-container">
        <GrClose className="line" onClick={props.setShowNav} style={{cursor: 'pointer'}}/>
        <div>
            <h2 id="title">JUMIA <MdStars className="star" /></h2>
        </div>
        </div>
        <ul>
            <li><p>Live Help</p></li>
        </ul>
        <ul>
            <li><p className="list-header">MY JUMIA ACCOUNT</p></li>
            <li><RiCaravanLine className="icon"/><a href="#">Orders</a></li>
            <li><MdOutlineRateReview className="icon"/><a href="#">Pending Reviews</a></li>
            <li><RiCouponLine className="icon" /><a href="#">Jumia Coupon</a></li>
            <li><BsSuitHeart className="icon"/><a href="#">Saved Items</a></li>
        </ul>
        <ul>
            <li><p className="list-header">OUR CATEGORIES</p></li>
            <li><div className="list-div"><AiOutlineApple className="icon" /><a href="#">Supermarket</a></div></li>
            <li><RiPaintBrushLine className="icon"/><a href="#">Health & Beauty</a></li>
            <li><HiOutlineOfficeBuilding className="icon"/><a href="#">Home & Office</a></li>
            <li><CgAppleWatch className="icon" /><a href="#">Phone & Tablets</a></li>
            <li><HiOutlineDesktopComputer className="icon" /><a href="#">Computing</a></li>
            <li><MdRadio className="icon" /><a href="#">Electronics</a></li>
            <li><RiTShirtLine className="icon"/><a href="#">Women's Fashion</a></li>
            <li><RiShirtLine className="icon" /><a href="#">Men's Fashion</a></li>
            <li><GiBabyFace className="icon" /><a href="#">Baby Products</a></li>
            <li><GrGamepad className="icon" /><a href="#">Gaming</a></li>
            <li><FaDumbbell className="icon"/><a href="#">Sporting Goods</a></li>
            <li><BiCar className="icon" /><a href="#">Automobile</a></li>

        </ul>
        <ul>
            <li><p className="list-header">OUR SERVICES</p></li>
            <li><MdStars className="icon" /><a href="#">Jumia Prime</a></li>
            <li><MdStars className="icon" /><a href="#">Pay Airtime & Bills</a></li>
            <li><MdStars className="icon" /><a href="#">Pay Electricity Bills</a></li>
            <li><MdStars className="icon" /><a href="#">Pay Internet Bills</a></li>
            <li><MdStars className="icon" /><a href="#">Buy Data</a></li>
            <li><MdOutlineFastfood className="icon" /><a href="#">Jumia Foods</a></li>
        </ul>
        <ul>
            <li><a href="#">Sell on Jumia</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Help Center</a></li>
        </ul>
    </div>
    )
}