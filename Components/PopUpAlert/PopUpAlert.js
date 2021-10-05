import React, { useEffect, useState } from 'react';
import { FiInfo } from 'react-icons/fi';
import styles from "./PopUpAleart.module.css";

const PopUpAlert = ({popUpData }) => {
    const [visible, setVisible] = useState(true);
    const defaultColor = popUpData.color ? popUpData.color : (popUpData.type == "success" ? "#00dbb1" : "red")

    useEffect(() => {
        const customTimer =  setTimeout(() => {
            setVisible(false);
        }, popUpData.delay);
        return ()=> clearTimeout(customTimer)
    }, [popUpData.delay]);

    return (
        visible 
        ?<div className={styles['popUpAlert']} >
            <div className="flex justify-center items-center">
                <FiInfo className="inline-block mr-2" style={{ stroke: defaultColor }} />
            </div>
            <div>{popUpData.message} </div>
        </div>
        : null
    );
};

export default PopUpAlert;