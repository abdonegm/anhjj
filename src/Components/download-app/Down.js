import React from "react";
import phone1 from "./idownload/Mask group (1).png";
import phone2 from "./idownload/Mask group (2).png";
import andorid from "./idownload/Vector (3).png";
import iphone from "./idownload/Vector (4).png";
import cup from "./idownload/cup.png";
import watts from "./idownload/wattsapp.png";
import layer from "./idownload/Layer 20.png";
import "./down.css";

const Down = () => {
  return (
    <>
      <div className="down container">
        <div className="row">
          <div className="down-content">
            <h2>تحميل التطبيق</h2>
            <div className="down-images">
              <img src={phone1} alt="android" className="andriod1" />
              <img src={phone2} alt="android" className="andriod2" />
            </div>
            <div className="down-btns">
              <button>
                <div className="end-btn">
                  <div>
                    <img src={andorid} alt="andorid-icon" />
                  </div>
                  <div>جوجل بلاي</div>
                  <img src={layer} alt="layer" className="layer" />
                </div>
              </button>

              <button>
                <div className="end-btn">
                  <div>
                    <img src={iphone} alt="andorid-icon" />
                  </div>
                  <div>ابل ستور</div>
                  <img src={layer} alt="layer" className="layer" />
                </div>
              </button>
            </div>
          </div>
          <div className="arang">
            <div>
              <img src={cup} alt="cup" />
              <img src={watts} alt="wattsapp" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Down;
