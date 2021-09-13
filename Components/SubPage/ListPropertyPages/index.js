import React, { useState } from 'react';
import Amenities from './Amenities';
import Description from './Description';
import TimeLine from './TimeLine';

const ListPropertyPages = ({ children }) => {
    const [steps, setSteps] = useState({
        first: false,
        second: false,
        third: false,
        fourth: false,
        fifth: false,
        sixth: false,
        seventh: false
    })
    return (
        <div className="container mx-auto py-7">
            <div className="flex">
                <div className="w-1/4">
                    <TimeLine steps={steps} />
                </div>
                <div className="w-3/4 shadow-md border border-gray-100">
                    {/* This is for the first step (Description Page) */}
                    {
                        !steps.first &&
                        <Description steps={steps} setSteps={setSteps} />
                    }

                    {/* This is for the first step (Description Page) */}
                    {
                        steps.first &&
                        <Amenities steps={steps} setSteps={setSteps} />
                    }
                </div>
            </div>
        </div>
    );
};

export default ListPropertyPages;