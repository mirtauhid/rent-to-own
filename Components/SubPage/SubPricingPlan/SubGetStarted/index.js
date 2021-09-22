import React from 'react'
import style from "./style.module.css"

const SubGetStarted = props => {
 
    return (
      <div className={style["font-open-sans"]}>
        <div className={style["SubGetStarted-upperCurve"]}>
          <div className={style["SubGetStarted-content"]}>
            <p className={style["SubGetStarted-title"]}>
              Ready to Get Started
            </p>
            <p className={style["SubGetStarted-subtitle"]}>
              Donec tempor finibus ante ac luctus. Fusce facilisis nisi vel odio
              tincidunt maximus. Pellentesque tempus gravida viverra.
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
