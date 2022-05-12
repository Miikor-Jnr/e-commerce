import React from "react"
import ForSell from "./forsell"
const data = require('./data')
const bags = require('./bags')

export default function Section3(){

    const showData = data.map(data => (
        <ForSell image={data.url} description={data.description}
        price={data.price} img={data.url} key={data.id}
        remaining={data.itemLeft} totalItem={data.totalItem}  />
    ))

    const showBags = bags.map(bag => (
        <ForSell image={bag.url} description={bag.description}
        price={bag.price} img={bag.url} key={bag.id}
        remaining={bag.itemLeft}
        totalItem={bag.totalItem} />
    ))



    return(
        <div className="section3">
            <div className="delivery-bar">
                <h4>Flash Sales | Free Delivery</h4>
                <p>TIME LEFT</p>
            </div>
                <div className="display-items">
                    {showData}
                </div>
            <div className="notify">
                <h3 className="dont-miss">Don't Miss Out On These!!!</h3>
                <div className="display-items">
                    {showBags}
                </div>
            </div>
        </div>
    )
}