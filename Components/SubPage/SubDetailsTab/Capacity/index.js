import React from 'react'

const index = ({propertyDetails}) => {
    return (
        <div>
            <div className="mt-3 flex flex-row font-medium">
                <p className="text-xs ">{propertyDetails?.squareFootage} Sqft</p>
                <p className="text-xs ml-4">{propertyDetails?.bedroom} bedrooms</p>
                <p className="text-xs ml-4">{propertyDetails?.bedroom} beds</p>
                <p className="text-xs ml-4">{propertyDetails?.bathroom} baths</p>
            </div>
            <div className="mt-4 flex flex-row">
                <img src="/svgs/propertySearch/1330.svg" className="w-6 scale-75"/>
                <div>
                    <p className="text-xs font-semibold ml-4">Entire Home</p>
                    <p className="text-xs ml-4 mt-1">You’ll have the house to yourself.</p>
                </div>
            </div>
            <div className="mt-4 flex flex-row">
                <img src="/svgs/propertySearch/clean.svg" className="scale-75"/>
                <div>
                    <p className="text-xs font-semibold ml-4">Enhanced Clean</p>
                    <p className="text-xs ml-4 mt-1">This host committed to Airbnb's 5-step enhanced cleaning process.</p>
                </div>
            </div>
            <div className="mt-4 flex flex-row">
                <img src="/svgs/propertySearch/house.svg" className="scale-75"/>
                <div>
                    <p className="text-xs font-semibold ml-4">Great  Location</p>
                    <p className="text-xs ml-4 mt-1">100% of recent guests gave the location a 5-star rating.</p>
                </div>
            </div>
        </div>
    )
}

export default index
