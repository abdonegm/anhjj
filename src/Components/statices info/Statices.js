import React from 'react';
import gift from "./static-image/Gift - Pink (Border).png";
import crown from "./static-image/Crown (Border).png";
import cup from "./static-image/Cup (Border).png"
import Ghost from "./static-image/Ghost Head.png";
import  "./static.css";

export default function Statices() {
    return (
        <div className="Statices">
            <div className="container">
                <div className="row statics-info">
                    <div style={{backgroundColor:"#FFDEEB"}}>
                        <img src={gift} alt="gif-static" />
                        <h4>الدورات التدريبة</h4>
                        <p>+30</p>
                    </div>
                    <div style={{backgroundColor:"#FFE8CC"}}>
                        <img src={cup} alt="gif-static" />
                        <h4>الدورات التدريبة</h4>
                        <p>+30</p>
                    </div>
                    <div style={{backgroundColor:"#E5DBFF"}}>
                        <img src={Ghost} alt="gif-static" />
                        <h4>الدورات التدريبة</h4>
                        <p>+30</p>
                    </div>
                    <div style={{backgroundColor:"#FFF3BF"}}>
                        <img src={crown} alt="gif-static" />
                        <h4>الدورات التدريبة</h4>
                        <p>+30</p>
                    </div>

                </div>

            </div>


        </div>
    )
}