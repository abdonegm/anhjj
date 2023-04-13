import React from "react";
import "./Content.css"
import ghosts from "../../../src/Assets/Images/HomePage/Ghosts.png";
import boy from "../../../src/Assets/Images/HomePage/boy.png";
import clickButton from "../../../src/Assets/Images/HomePage/clickButton.png";
import friends from "../../../src/Assets/Images/HomePage/Friends.png";
import loveEmoji from "../../../src/Assets/Images/HomePage/Love - Cartoon.png";
import smileEmoji from "../../../src/Assets/Images/HomePage/Heavy Smile - Cartoon.png";
import speechBubble from "../../../src/Assets/Images/HomePage/Speech Bubble - Right.png";
import child from "../../../src/Assets/Images/HomePage/child.png";
import arrow from "../../../src/Assets/Images/HomePage/Arrow - Left.png";



const Content = () => {
    return (
        <div className="content container">
            <section className="section1">
                <div className="content-ghosts">
                    <img src={ghosts} alt=""/>
                </div>
                <img src={boy} alt="" className="content-boy"/>
                <div>
                    <img src={clickButton} alt="" className="content-clickbutton"/>
                </div>
            </section>
            <section className="section2">
                <div className="section2-top">
                    <img src={friends} alt="" className="content-friends" />
                    <h1>ماذا يقول الآباء عنا</h1>
                </div>
                <div className="section2-middle">
                    <div className="content-opinion">
                        <div className="content-stickers">
                            <img src={loveEmoji} alt="" className="content-loveEmoji" />
                            <img src={smileEmoji} alt="" className="content-smileEmoji" />
                            <img src={speechBubble} alt="" className="content-speechBubble" />
                        </div>
                        <div className="content-info">
                            <img src={child} alt="" className="content-child" />
                            <h3>احمد سمير</h3>
                            <p>الأكاديمية الاكبر والاعظم في الوطن العربي مفيش كلام يقدر يوصفكم، دايما في الامام انشاء الله.. شكرا</p>
                        </div>
                        <div className="content-arrows">
                            <img src={arrow} alt="" className="content-arrow" />
                            <img src={arrow} alt="" className="content-arrow-right" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Content