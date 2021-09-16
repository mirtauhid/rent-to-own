import React from 'react';
import { GoLocation } from "react-icons/go";
import SubCardList from './SubCardList';
import { AiOutlineHeart } from "react-icons/ai";

const index = ({title, location, description, price, bedroom, bathroom, sqft, imageUrl}) => {
    return (
        <div className="w-full shadow-lg rounded-xl pb-4 relative">
            
            <div className="relative">
                <img src={imageUrl} alt="" className="h-56 p-4 w-full object-center object-cover rounded-3xl" />
                <div className="bg-primary h-8 w-8 rounded-lg absolute right-8 bottom-0 flex justify-center items-center">
                    <AiOutlineHeart color="white" fill={"white"}/>
                </div>
                {/* <img src="/public/svgs/listProperty/heart.svg" alt=""/> */}
            </div>
            <div className="bg-primary h-6 w-8 rounded-md absolute top-6 left-6 flex justify-center items-center">
                <p className="text-white text-xs scale-75">PRO</p>
            </div>
            <div className="px-4">
                <div className="flex flex-row"> 
                    {/* <img src="/public/svgs/listProperty/geo-alt.svg" alt="" className="h-4"/> */}
                    <GoLocation className="text-primary" fill={"#00dbb1"}/>
                    <h1 className="text-sm pl-1 flex-1  ">{location}</h1>
                </div>
                <div className="flex flex-row"> 
                    <h1 className="text-lg pl-1 text-primary font-semibold">${price} /</h1>
                    <h1 className="text-sm pl-1 pt-1 text-primary">per property</h1>
                </div>
                <h1 className="text-sm pl-1 flex-1 pt-1 font-bold">{title}</h1>
                <p className="text-xs pl-1 flex-1 pt-1 ">{description}</p>
                <div className="flex justify-between mt-3 items-center">
                    <div className="h-12 min-w-9/12 bg-gray-200 flex flex-1 mr-4 smd:mr-1 md:mr-6 justify-between">
                        <SubCardList 
                            icon="/svgs/listProperty/9705.svg" 
                            number={bedroom} 
                            title="Bedrooms"
                        />
                        <SubCardList 
                            icon="/svgs/listProperty/9701.svg" 
                            number={bathroom} 
                            title="Bathrooms"
                        />
                        <SubCardList 
                            icon="/svgs/listProperty/9702.svg" 
                            number={sqft} 
                            title="Sq Ft"
                        />
                    </div>
                    <div className="smd:w-8 md:w-12 md:h-12 flex flex-2 w-12 h-12 rounded-full smd:h-8 bg-white shadow-lg">
                        <img src="https://picsum.photos/200/300" alt="" className="w-full h-full p-1 object-center object-cover rounded-full" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index
