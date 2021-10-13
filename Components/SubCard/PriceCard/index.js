import React, {useEffect} from 'react';
import Slider from '../../Slider/index';
import Link from "next/link";
import { useSelector } from "react-redux";

const index = ({propertyDetails, setPricePerMonth}) => {
    const loggedInUser = useSelector((state) => state.auth?.userData);
    const [downPay, setDownPay] = React.useState(3);
    const [minMaxMonth, setMinMaxMonth] = React.useState(12);
    const price = propertyDetails?.price;
    const pricePerMonth = parseInt((price - ((price)*downPay/100))/minMaxMonth).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    useEffect(() => {
        setPricePerMonth(pricePerMonth);
    }, [pricePerMonth])
    return (
        <div className="border border-primary shadow-md border-t-8 rounded-lg p-5">
            <div className="flex justify-between">
                <h1 className="text-2xl font-medium">Price</h1>
                <div>
                    <h1 className="text-2xl font-medium">${pricePerMonth}</h1>
                    <p className="text-xs text-gray-500">per month</p>
                </div>
            </div>
            <Link
                href={{
                  pathname: "/messaging",
                  query: { buyerid: loggedInUser?.id, sellerid: propertyDetails?.User.id },
                }}
            >
                <a className={"text-xs lg:text-sm py-2  block"}>
                    <div className="bg-primary mt-5 hover:bg-green-500 h-10 rounded flex items-center justify-center cursor-pointer">
                        <p className="text-md font-bold text-white">Message Seller</p>
                    </div>
                </a>
            </Link>
            <Link
                href={{
                  pathname: "/testmsg",
                  query: { b: loggedInUser?.id},
                }}
            >   
                <div className="h-10 mt-5 rounded hover:bg-gray-100 border border-primary flex items-center justify-center cursor-pointer">
                    <p className="text-md font-bold">Apply to Rent-To-Own</p>
                </div>
            </Link>
            
            <div className="mt-5 grid justify-items-center">
                <p className="text-md text-gray-700">QUESTIONS? CALL US TODAY</p>
                <p className="text-xl font-semibold mt-3 text-gray-700">(+1261 5645 4565)</p>
            </div>
            <p className="text-md mt-5 font-medium text-center text-gray-700">Booking breakdown</p>
            <div className="mt-5 flex justify-between">
                <p className="text-xs text-gray-800 font-medium">Property fair market value today</p>
                <p className="text-xs text-gray-800 font-medium">${price}</p>
            </div>
            <p className="text-xs text-gray-300">Mimimun of $200,000;  maximum$50,000</p>
            <div className="mt-5 flex justify-between">
                <div className="flex flex-row relative">
                    <p className="text-xs text-gray-800 font-medium">Rent-to-own application down payment</p>
                </div>
            </div>
            <p className="text-xs text-gray-300 ">Mimimun of $200,000;  maximum$50,000</p>

            <div className="pt-4"></div>
            <Slider sliderValue={downPay} setSliderValue={setDownPay} min={3} max={10}/>

            {/* 2nd */}
            <div className="mt-5 flex justify-between">
                <div className="flex flex-row relative">
                    <p className="text-xs text-gray-800 font-medium">Rent-to-own-term</p>
                </div>
            </div>
            <p className="text-xs text-gray-300 ">Minimum of 12 months;  maximum of 36 months</p>

            <div className="pt-4"></div>
            <Slider sliderValue={minMaxMonth} setSliderValue={setMinMaxMonth} min={12} max={36} month/>

            <hr className="mt-5"></hr>
            <div className="mt-5 flex justify-between">
                <p className="text-xs text-gray-800 font-medium">Rent-to-own monthly payments</p>
                <p className="text-sm font-medium text-gray-800">${pricePerMonth}</p>
            </div>
        </div>
    )
}

export default index
