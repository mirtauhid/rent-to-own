import React, { useEffect, useState } from 'react';
import { FiInfo } from 'react-icons/fi';
import styles from "./PopUpAleart.module.css";

const PopUpAlert = ({popUpData,setPopUpData }) => {
    const [alertData, setAlertData] = useState(popUpData)
    const defaultColor = alertData?.color ? alertData?.color : (alertData?.type == "success" ? "#00dbb1" : "red")

    useEffect(() => {
        const customTimer =  setTimeout(() => {
            setAlertData((preValues)=>({...preValues,delay:0,visible:false}))
            setPopUpData((preValues)=>({...preValues,delay:0,visible:false}))
        }, alertData?.delay);
        return ()=> clearTimeout(customTimer)
    }, [alertData?.delay]);

    return (
        alertData?.visible 
        ?<div className={styles['popUpAlert']} >
            <div className="flex justify-center items-center">
                <FiInfo className="inline-block mr-2" style={{ stroke: defaultColor }} />
            </div>
            <div>{alertData?.message} </div>
        </div>
        : null
    );
};

export default PopUpAlert;