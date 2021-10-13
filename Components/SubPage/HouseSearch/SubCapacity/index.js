import React from 'react'

const index = ({propertyDetails}) => {
    return (
        <div className="mt-5">
            <h1 className="text-xl text-gray-400 font-bold">Capacity</h1>
            <div className="mt-3 flex flex-row font-medium">
                <p className="text-xs ">{propertyDetails?.squareFootage}{" "} Sqft</p>
                <p className="text-xs ml-4">{propertyDetails?.bedroom}{" "} Bedroom(s)</p>
                <p className="text-xs ml-4">{propertyDetails?.bathroom}{" "} Bathroom(s)</p>
                <p className="text-xs ml-4">{propertyDetails?.partialBathroom} Partial Bathroom(s)</p>
            </div>
        </div>
    )
}

export default index
