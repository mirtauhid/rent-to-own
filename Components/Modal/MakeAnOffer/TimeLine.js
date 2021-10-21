import React from 'react';

const TimeLine = ({ steps }) => {
    return (
        <ul className="flex justify-center my-5">
            <li className="flex items-center inline-block w-12 cursor-pointer">
                <div className="relative w-7 h-5">
                    <span className={"block absolute top-2 left-0 z-0 w-12 h-1 bg-primary"}></span>
                    <span className={"block absolute  rounded-full text-white text-sm text-center w-5 h-5 z-10 bg-primary"}>1</span>
                </div>
            </li>
            <li className="flex items-center inline-block w-12 cursor-pointer">
                <div className="relative w-7 h-5">
                    <span className={"block absolute top-2 left-0 z-0 w-12 h-1 " + (steps.first ? "bg-primary" : "bg-gray-500")}></span>
                    <span className={"block absolute  rounded-full text-white text-sm text-center w-5 h-5 z-10 " + (steps.first ? "bg-primary" : "bg-gray-500")}>2</span>
                </div>
            </li>
            <li className="flex items-center inline-block w-12 cursor-pointer">
                <div className="relative w-7 h-5">
                    <span className={"block absolute top-2 left-0 z-0 w-12 h-1 " + (steps.second ? "bg-primary" : "bg-gray-500")}></span>
                    <span className={"block absolute  rounded-full text-white text-sm text-center w-5 h-5 z-10 " + (steps.second ? "bg-primary" : "bg-gray-500")}>3</span>
                </div>
            </li>
            {/* <li className="flex items-center inline-block w-12 cursor-pointer">
                <div className="relative w-7 h-5">
                    <span className={"block absolute top-2 left-0 z-0 w-12 h-1 " + (steps.third ? "bg-primary" : "bg-gray-500")}></span>
                    <span className={"block absolute  rounded-full text-white text-sm text-center w-5 h-5 z-10 " + (steps.third ? "bg-primary" : "bg-gray-500")}>4</span>
                </div>
            </li> */}
            <li className="flex items-center inline-block cursor-pointer">
                <div className="relative w-5 h-5">
                    <span className={"block absolute  rounded-full text-white text-sm text-center w-5 h-5 z-10 " + (steps.third ? "bg-primary" : "bg-gray-500")}>4</span>
                </div>
            </li>
        </ul>
    );
};

export default TimeLine;