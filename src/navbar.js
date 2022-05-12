import React from "react"
import { FaBeer, FaRegUser, FaShoppingCart, FaStar, FaSearch } from 'react-icons/fa'
import {MdStars} from "react-icons/md"
import {AiOutlineShoppingCart, AiOutlineSearch} from "react-icons/ai"
import {GiHamburgerMenu} from "react-icons/gi"

export default function Navbar(props){



    return(
        <nav className="navigation">
            <div className="left">
                <GiHamburgerMenu className="lines" onClick={props.setShowNav} style={{cursor: 'pointer'}}/>
                <div>
                    <h2 id="title">JUMIA <MdStars className="star" /></h2>
                </div>
            </div>
            <div className="right">
            <FaRegUser /> <AiOutlineShoppingCart className="cart"/>
            </div>
        </nav>
    )
}