import React from 'react';
import { GoLocation } from "react-icons/go";

const index = ({icon, title, number}) => {
    return (
        <div className="py-2 px-1">
            <div className="flex flex-row ">
                <p className="text-primary text-xs">{number}</p>
                <img src={icon} alt="" className="pl-2 scale-90" fill="white"/>
            </div>
            <p className=" text-xs pt-1 text-gray-500">{title}</p>
        </div>
    )
}

export default index
