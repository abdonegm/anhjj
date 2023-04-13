import React from "react";
import "./Navbar.css"
import logo from "../../../src/Assets/Images/HomePage/Logo.png";
import mountains from "../../../src/Assets/Images/HomePage/Mountains.png";
import pen from "../../../src/Assets/Images/HomePage/Pen.png";
import Notebook from "../../../src/Assets/Images/HomePage/Notebook.png";
import Credits from "../../../src/Assets/Images/HomePage/Credits.png";
import Cup from "../../../src/Assets/Images/HomePage/Cup-Border.png";
import Bear from "../../../src/Assets/Images/HomePage/Bear-Border.png";
import Mail from "../../../src/Assets/Images/HomePage/Mail.png";
import Frame from "../../../src/Assets/Images/HomePage/Frame.png";

const Navbar = () => {
    return (
        <div className='navbar container'>
            <div className='logo'>
                <img src={logo} alt="" className='img-logo'/>
            </div>
            <div className='about'>
                <ul>
                    <li>
                        <img src={mountains} alt=""/>
                        <p className="title">الرئيسية</p>
                    </li>
                    <li>
                        <img src={pen} alt=""/>
                        <p>عن انهج</p>
                    </li>
                    <li>
                        <img src={Notebook} alt=""/>
                        <p>الدورات التدريبية</p>
                    </li>
                    <li>
                        <img src={Credits} alt=""/>
                        <p>الباقات</p>
                    </li>
                    <li>
                        <img src={Cup} alt=""/>
                        <p>Leadboard</p>
                    </li>
                    <li>
                        <img src={Bear} alt=""/>
                        <p>متجرنا</p>
                    </li>
                    <li>
                        <img src={Mail} alt=""/>
                        <p>تواصل معنا</p>
                    </li>
                </ul>
            </div>
            <img src={Frame} alt=''/>
        </div>
    )
}
export default Navbar