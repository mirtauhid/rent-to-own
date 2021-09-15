import React from 'react';
import { GoLocation } from "react-icons/go";

const index = ({icon}) => {
    return (
        <div className="p-2">
            <div className="flex flex-row ">
                <p className="text-primary text-xs">2</p>
                <img src={icon} alt="" className="pl-2 scale-90" fill="white"/>
            </div>
            <p className=" text-xs pt-1 text-gray-500">Bedrooms</p>
        </div>
    )
}

export default index
