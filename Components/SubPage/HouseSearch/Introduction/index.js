import React from 'react';
import { IoCheckmarkCircleSharp } from "react-icons/io5";

const Introduction = ({propertyDetails, pricePerMonth}) => {
    return (
        <div>
            <div className="flex flex-row">
                <div>
                    <h1 className="text-primary text-2xl font-medium">${pricePerMonth}</h1>
                    <p className="text-xs text-gray-500">per month</p>
                </div>
                <div className="ml-4">
                    <div className="border mt-2 w-4 h-4 flex rounded-full border-green-500 items-center">
                    <IoCheckmarkCircleSharp fill={"#3385ff"}/>
                    </div>
                    <h1 className="text-3xl mt-2">{propertyDetails?.name}</h1>
                    <div className="mt-3 flex flex-row">
                        <p className="text-xs text-gray-500">Apartment</p>
                        <p className="text-xs text-gray-500 ml-4">Hosted by Chiara</p>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="text-xl text-gray-400 font-bold pt-6 ">About this home</h1>
                <p className="text-sm font-open-sans text-gray-900 pt-5">
                    {propertyDetails?.description}
                </p>
                <a className="cursor-pointer text-xs text-primary pt-3">See more</a>
            </div>
        </div>
    )
}

export default Introduction;
