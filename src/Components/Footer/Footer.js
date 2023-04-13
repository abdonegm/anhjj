import React from "react";
import logo from "./ifooter/Group.png";
import "./footer.css";
import image1 from "./ifooter/Group 1000001041.png";
import image2 from "./ifooter/Frame.png";
import image3 from "./ifooter/Group 1000001159.png";
import image4 from "./ifooter/Mask group.png";
import image5 from "./ifooter/Path Way.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-top">
          <div className="footer-txt">
            <div className="footer-logo">
              <img src={logo} alt="foot-logo" />
              <p>
                هي عباره عن مرحله تعريفيه باللغات البرمجيه والبرمجة ونبذه بسيطه
                عن الكمبيوتر <br />
                وكيف يتلقي الأوامر ليتم تنفيذها بالشكل الصحيح.
              </p>
            </div>
          </div>
          <div className="footer-links">
            <ul>
              <li>الرئيسية</li>
              <li> عن انهج</li>
              <li> الباقات </li>
              <li> دوراتنا التدريبية </li>
              <li> Leadboard</li>
              <li>تواصل معنا</li>
            </ul>
          </div>
        </div>

        <div className="footer-copyright">
          <p>
            جميع الحقوق محفوظة لـ <span>أنهج</span>@2023
          </p>
        </div>
        <div className="foot-im1">
          <img src={image1} alt="back-foot" />
        </div>

        <div className="foot-im2">
          <img src={image2} alt="back-foot" />
        </div>
        <div className="foot-im3">
          <img src={image3} alt="back-foot" />
        </div>
        <div className="foot-im4">
          <img src={image4} alt="back-foot" />
        </div>
        <div className="foot-im5">
          <img src={image5} alt="back-foot" />
        </div>
      </footer>
    </>
  );
};
export default Footer;
