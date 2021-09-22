import React from 'react';
import { BiDownArrow, BiUpArrow } from "react-icons/bi";

const index = () => {
    return (
        <div className="border border-primary shadow-md border-t-8 rounded-lg p-5">
            <div className="flex justify-between">
                <h1 className="text-2xl font-medium">Price</h1>
                <div>
                    <h1 className="text-2xl font-medium">$3,805</h1>
                    <p className="text-xs text-gray-500">per month</p>
                </div>
            </div>
            <div className="bg-primary mt-5 hover:bg-green-500 h-10 rounded flex items-center justify-center cursor-pointer">
                <p className="text-md font-bold text-white">Message Seller</p>
            </div>
            <div className="h-10 mt-5 rounded hover:bg-gray-100 border border-primary flex items-center justify-center cursor-pointer">
                <p className="text-md font-bold">Make an offer</p>
            </div>
            <div className="mt-5 grid justify-items-center">
                <p className="text-md text-gray-700">QUESTIONS? CALL US TODAY</p>
                <p className="text-xl font-semibold mt-3 text-gray-700">(+1261 5645 4565)</p>
            </div>
            <div className="ml-4 mt-2">
                <input 
                    type="checkbox"
                    id="getarea" name="getarea" 
                    value="Bike"
                ></input>
                <label className="ml-2 text-xs">Add Damage Protection for this rental (+ $69)</label><br></br>
            </div>
            <p className="text-md mt-5 font-medium text-center text-gray-700">Booking breakdown</p>
            <div className="mt-5 flex justify-between">
                <p className="text-xs text-gray-800 font-medium">Property fair market value today</p>
                <p className="text-xs text-gray-800 font-medium">$500,000</p>
            </div>
            <p className="text-xs text-gray-300">Mimimun of $200,000;  maximum$50,000</p>
            <div className="mt-5 flex justify-between">
                <div className="flex flex-row relative">
                    <p className="text-xs text-gray-800 font-medium">Rent-to-own application down payment</p>
                    <div className="w-8 absolute -right-10 -top-0">
                        <BiUpArrow className="" fontSize="0.7em" />
                        <BiDownArrow fill={"black"} fontSize="0.7em"/>
                    </div>
                </div>
                <p className="text-xs text-gray-800 font-medium">3%</p>
            </div>
            <p className="text-xs text-gray-300 ">Mimimun of $200,000;  maximum$50,000</p>
            <div className="mt-5 flex justify-between">
                <div className="flex flex-row relative">
                    <p className="text-xs text-gray-800 font-medium">Rent-to-own-term</p>
                    <div className=" w-8 absolute -right-10 -top-0">
                        <BiUpArrow className="" fontSize="0.7em"/>
                        <BiDownArrow fill={"black"} fontSize="0.7em"/>
                    </div>
                </div>
                <p className="text-xs text-gray-800 font-medium">36 year</p>
            </div>
            <hr className="mt-5"></hr>
            <div className="mt-5 flex justify-between">
                <p className="text-xs text-gray-800 font-medium">Rent-to-own monthly payments</p>
                <p className="text-sm font-medium text-gray-800">$4,358</p>
            </div>
        </div>
    )
}

export default index
