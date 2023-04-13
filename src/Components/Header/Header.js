import React from "react";
import "./Header.css"
import star from "../../../src/Assets/Images/HomePage/Star.png";
import fish from "../../../src/Assets/Images/HomePage/Fish.png";
import ballons from "../../../src/Assets/Images/HomePage/Ballons.png";


const Header = () => {
    return (
        <header >
            <div className="header container">
                <div className="header-images">
                    <img src={star} alt="" className="header-star"/>
                    <img src={fish} alt="" className="header-fish"/>
                </div>
                <div>
                    <h1>تعلّم تخيّل <span>ابتكر</span></h1>
                </div>
                <div className="header-ballons">
                    <img src={ballons} alt=""/>
                </div>
            </div>
        </header>
    )
}
export default Header