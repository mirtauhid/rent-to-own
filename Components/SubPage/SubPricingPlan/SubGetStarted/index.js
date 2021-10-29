import React from 'react';
import style from "./style.module.css";

const SubGetStarted = props => {
 
    return (
      <div className={style["font-open-sans"]}>
        <div className={style["SubGetStarted-upperCurve"]}>
          <div className={style["SubGetStarted-content"]}>
            <p className={style["SubGetStarted-title"]}>
              Ready to Get Started
            </p>
            <p className={style["SubGetStarted-subtitle"]}>
            Take advantage of Canada's most lucrative option to selling your home!
            </p>
            <button className={style["SubGetStarted-btn"]}>
              Get started
            </button>
          </div>
        </div> 
        <div className={style["SubGetStarted-lowerCurve"]}></div>
      </div>
    );
}

export default SubGetStarted
