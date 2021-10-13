import React from 'react';
import { GiBathtub } from 'react-icons/gi';
import { IoIosBed } from 'react-icons/io';
import { RiPencilRuler2Fill } from 'react-icons/ri';

const index = ({ propertyDetails }) => {
    return (
        <div>
            <div className="mt-3 font-medium">
                <p className="flex items-center mb-2">
                    <RiPencilRuler2Fill className="inline-block mr-2 text-xl" /> {propertyDetails?.squareFootage} Sqft
                </p>
                <p className="flex items-center mb-2">
                    <IoIosBed className="inline-block mr-2 text-xl" /> {propertyDetails?.bedroom} Bed Rooms
                </p>
                <p className="flex items-center mb-2">
                    <GiBathtub className="inline-block mr-2 text-xl" />{propertyDetails?.bathroom} Bath Rooms
                </p>
                <p className="flex items-center mb-2">
                    <GiBathtub className="inline-block mr-2 text-xl" />{propertyDetails?.partialBathroom} Partial Bathrooms
                </p>
            </div>
        </div>
    )
}

export default index
