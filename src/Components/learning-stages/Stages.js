import React from 'react';
import rocket from "./learning stages-images/Frame.png";
import girl from "./learning stages-images/Group 1000001035.png";
import boy from "./learning stages-images/Group 1000001038.png"

import "./stages.css"


export default function Stages() {
    return (
        <div className="container learning-stages">
            <div className="row">
                <div className="stages-info">
                    <div className="stage-img">
                        <img src={rocket} alt="boy-rocket" />
                    </div>
                    <div className="stage">
                        <div>
                            <button>مراحل التعلم</button>
                            <h3>دورات البرمجة والابداع للأطفال</h3>
                            <p>هي عباره عن مرحله تعريفيه باللغات البرمجيه والبرمجة ونبذه بسيطه عن الكمبيوتر وكيف يتلقي الأوامر ليتم تنفيذها بالشكل الصحيح</p>
                       </div>
                    </div>
                    <div className="stage">
                        <div>
                        <button>مراحل التعلم</button>
                        <h3>دورات البرمجة والابداع للأطفال</h3>
                        <p>هي عباره عن مرحله تعريفيه باللغات البرمجيه والبرمجة ونبذه بسيطه عن الكمبيوتر وكيف يتلقي الأوامر ليتم تنفيذها بالشكل الصحيح</p>
                        </div>
                    </div>
                    <div className="stage-img">
                        <img src={boy} alt="boy-rocket" />
                    </div>
                    <div className="stage-img">
                        <img src={girl} alt="boy-rocket" />
                    </div>
                    <div className="stage">
                         <div>
                        <button>مراحل التعلم</button>
                        <h3>دورات البرمجة والابداع للأطفال</h3>
                        <p>هي عباره عن مرحله تعريفيه باللغات البرمجيه والبرمجة ونبذه بسيطه عن الكمبيوتر وكيف يتلقي الأوامر ليتم تنفيذها بالشكل الصحيح</p>
                         </div>
                    </div>


                </div>
            </div>

        </div>
    )}

