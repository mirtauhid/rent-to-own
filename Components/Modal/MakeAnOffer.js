import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import CustomModal from './CustomModal';

const MakeAnOffer = ({ isOpen }) => {
    const [steps, setSteps] = useState({ first: false, second: false, third: false });
    const [isClose, setIsClose] = useState(!isOpen);
    return (
        <CustomModal
            isOpen={!isClose}
            customClasses={
                steps.first && steps.second
                    ? "rounded-lg px-6 py-3 m-auto bg-white w-3/4 md:w-2/3 lg:w-2/5 xl:1/3 border-b-8 border-green-500 my-16"
                    : "rounded m-auto bg-white w-3/4 md:w-2/3 lg:w-5/6 xl:5/6 my-6"
            }>
            <ComomPart setIsClose={setIsClose}>

                {/* For 1st step */}
                {
                    !steps.first &&
                    <FirstStep steps={steps} setSteps={setSteps} />
                }

                {/* For 2nd step */}
                {
                    steps.first &&
                    <SecondStep steps={steps} setSteps={setSteps} />
                }
            </ComomPart>
        </CustomModal>
    );
};

export default MakeAnOffer;

const ComomPart = ({ setIsClose, children }) => {
    return (
        <div className="md:flex">
            <div className="hidden lg:block lg:w-1/2">
                {/* <img src="/images/NoPath.png" alt="logo" className={'h-full'} /> */}
                <div className="p-8 m-5 text-center bg-gray-100">
                    <img src="/images/deal.svg" alt="Deal" className={'w-16 xl:w-20 inline-block text-primary mb-2'} />
                    <h2 className="font-medium lg:text-xl xl:text-2xl">Ready to place an offer?</h2>
                    <p className="mt-3">The OfferMaker™ is a non-legally binding negotiation tool that makes it easy to start & facilitate the process</p>

                    <div className="my-5 bg-gray-200 p-2 rounded-lg">
                        <h3 className="font-medium text-xl xl:text-2xl">Lot 1018 Quad 116/B14</h3>
                        <p className="text-lg my-2">Dawson City YT</p>
                        <h1 className="text-xl xl:text-2xl font-bold">$796,500</h1>
                    </div>

                    <p className="">
                        Be prepared to discuss key items that should be agreed upon, including:
                    </p>
                    <div className="flex justify-center items-center text-primary text-xl my-4">
                        <span className="w-14 inline-block mx-1 xl:mx-3 text-sm">
                            <img src="/images/appliance.svg" alt="Deal" className={'w-full block mb-1'} />
                            <span className="inline-block h-10">Sale Price</span>
                        </span> +
                        <span className="w-14 inline-block mx-1 xl:mx-3 text-sm">
                            <img src="/images/calender.svg" alt="Deal" className={'w-full block mb-1'} />
                            <span className="inline-block h-10">Included Items</span>
                        </span> +
                        <span className="w-14 inline-block mx-1 xl:mx-3 text-sm">
                            <img src="/images/conditions.svg" alt="Deal" className={'w-full block mb-1'} />
                            <span className="inline-block h-10">Conditions</span>
                        </span> +
                        <span className="w-14 inline-block mx-1 xl:mx-3 text-sm">
                            <img src="/images/sale price.svg" alt="Deal" className={'w-full block mb-1'} />
                            <span className="inline-block h-10">Closing date</span>
                        </span>
                    </div>

                    <p>Once both parties agree on terms, the seller will be able to forward the info to their lawyer to finalize the sale.</p>
                </div>
            </div>

            <div className="w-full lg:w-1/2">
                {/* For cross button  */}
                <div className="text-right p-4">
                    <button
                        className="p-2 rounded hover:bg-gray-200 text-2xl"
                        onClick={() => setIsClose(true)}>
                        <FaTimes />
                    </button>
                </div>
                {/* For showing children */}
                {children}
            </div>
        </div>
    );
};


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
            <li className="flex items-center inline-block w-12 cursor-pointer">
                <div className="relative w-7 h-5">
                    <span className={"block absolute top-2 left-0 z-0 w-12 h-1 " + (steps.third ? "bg-primary" : "bg-gray-500")}></span>
                    <span className={"block absolute  rounded-full text-white text-sm text-center w-5 h-5 z-10 " + (steps.third ? "bg-primary" : "bg-gray-500")}>4</span>
                </div>
            </li>
            <li className="flex items-center inline-block cursor-pointer">
                <div className="relative w-5 h-5">
                    <span className={"block absolute  rounded-full text-white text-sm text-center w-5 h-5 z-10 " + (steps.fourth ? "bg-primary" : "bg-gray-500")}>5</span>
                </div>
            </li>
        </ul>
    );
};

const FirstStep = ({ steps, setSteps }) => {
    return (
        <div className="px-5">
            <h2 className="text-primary font-medium text-center lg:text-2xl xl:text-3xl">Offer Amount</h2>
            {/* For importing timeline  */}
            <TimeLine steps={steps} />

            <div className="bg-gray-50 m-5 p-5 text-center">
                <p className="text-xl font-medium">Sale Price</p>
                <h2 className="text-2xl text-primary font-bold my-4">$796,500</h2>
                <p>(100% of asking price)</p>
            </div>

            <div className="bg-gray-50 m-5 p-5">
                <p className="text-xl font-bold">Are you pre-qualified for a mortgage for this amount?</p>
                <div className="mb-3 p-2">
                    <label className=" block text-gray-500 font-medium">
                        <input
                            className="mr-2 leading-tight"
                            type="radio"
                            value="yes"
                            name="pre-qualified" />
                        <span class="text-md">
                            Yes
                        </span>
                    </label>
                    <label className=" block text-gray-500 font-medium">
                        <input
                            className="mr-2 leading-tight"
                            type="radio"
                            value="no"
                            name="pre-qualified" />
                        <span class="text-md">
                            No
                        </span>
                    </label>
                </div>
            </div>
            <div className="flex justify-between px-5">
                <button type="button" className="border-2 border-primary rounded py-2 px-16 mx-2 text-primary"> Back</button>
                <button
                    type="submit"
                    onClick={() => setSteps({ ...steps, first: true })}
                    className=" bg-green-400 text-white rounded py-2 px-12">Next Step</button>
            </div>
        </div>
    );
};


const SecondStep = ({ steps, setSteps }) => {
    return (
        <div className="px-5">
            <h2 className="text-primary font-medium text-center lg:text-2xl xl:text-3xl">Offer Amount</h2>
            {/* For importing timeline  */}
            <TimeLine steps={steps} />
            This is second step
        </div>
    );
};
