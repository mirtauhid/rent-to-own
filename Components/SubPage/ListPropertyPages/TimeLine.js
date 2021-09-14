import React from 'react';

const TimeLine = ({ steps }) => {
    return (
        <ul>
            <li className="flex items-center h-12 cursor-pointer">
                <div className="relative w-7 h-5">
                    <span className={"block absolute top-0 left-2 z-0 w-1 h-12 bg-primary"}></span>
                    <span className={"block absolute  rounded-full text-white text-sm text-center w-5 h-5 z-10 bg-primary"}>1</span>
                </div> Description
            </li>
            <li className="flex items-center h-12 cursor-pointer">
                <div className="relative w-7 h-5">
                    <span className={"block absolute top-0 left-2 z-0 w-1 h-12 " + (steps.first ? "bg-primary" : "bg-gray-500")}></span>
                    <span className={"block absolute  rounded-full text-white text-sm text-center w-5 h-5 z-10 " + (steps.first ? "bg-primary" : "bg-gray-500")}>2</span>
                </div> Amenities
            </li>
            <li className="flex items-center h-12 cursor-pointer">
                <div className="relative w-7 h-5">
                    <span className={"block absolute top-0 left-2 z-0 w-1 h-12 " + (steps.second ? "bg-primary" : "bg-gray-500")}></span>
                    <span className={"block absolute  rounded-full text-white text-sm text-center w-5 h-5 z-10 " + (steps.second ? "bg-primary" : "bg-gray-500")}>3</span>
                </div> House rules
            </li>
            <li className="flex items-center h-12 cursor-pointer">
                <div className="relative w-7 h-5">
                    <span className={"block absolute top-0 left-2 z-0 w-1 h-12 " + (steps.third ? "bg-primary" : "bg-gray-500")}></span>
                    <span className={"block absolute  rounded-full text-white text-sm text-center w-5 h-5 z-10 " + (steps.third ? "bg-primary" : "bg-gray-500")}>4</span>
                </div> Location
            </li>
            <li className="flex items-center h-12 cursor-pointer">
                <div className="relative w-7 h-5">
                    <span className={"block absolute top-0 left-2 z-0 w-1 h-12 " + (steps.fourth ? "bg-primary" : "bg-gray-500")}></span>
                    <span className={"block absolute  rounded-full text-white text-sm text-center w-5 h-5 z-10 " + (steps.fourth ? "bg-primary" : "bg-gray-500")}>5</span>
                </div> Pricing
            </li>
            <li className="flex items-center h-12 cursor-pointer">
                <div className="relative w-7 h-5">
                    <span className={"block absolute top-0 left-2 z-0 w-1 h-12 " + (steps.fifth ? "bg-primary" : "bg-gray-500")}></span>
                    <span className={"block absolute  rounded-full text-white text-sm text-center w-5 h-5 z-10 " + (steps.fifth ? "bg-primary" : "bg-gray-500")}>6</span>
                </div> Availibility
            </li>
            <li className="flex items-center h-12 cursor-pointer ">
                <div className="relative w-7 h-5">
                    <span className={"block absolute  rounded-full text-white text-sm text-center w-5 h-5 z-10 " + (steps.sixth ? "bg-primary" : "bg-gray-500")}>7</span>
                </div> Photos
            </li>
        </ul>
    );
};

export default TimeLine;