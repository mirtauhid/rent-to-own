import React, { useState } from 'react';
import Amenities from './Amenities';
import Description from './Description';
import HouseRules from './HouseRules';
import Location from './Location';
import Photos from './Photos';
import Pricing from './Pricing';
import TimeLine from './TimeLine';

const ListPropertyPages = ({ children }) => {
    const [steps, setSteps] = useState({
        first: false,
        second: false,
        third: false,
        fourth: false,
        fifth: false,
        sixth: false
    })
    return (
        <div className="container mx-auto py-7">
            <div className="md:flex">
                <div className="md:w-1/4 px-3">
                    <TimeLine steps={steps} />
                </div>
                <div className="md:w-3/4 shadow-md border border-gray-100">
                    {/* This is for the 1st step (Description Page) */}
                    {
                        !steps.first &&
                        <Description steps={steps} setSteps={setSteps} />
                    }

                    {/* This is for the 2nd step (Amenities Page) */}
                    {
                        steps.first &&
                        !steps.second &&
                        <Amenities steps={steps} setSteps={setSteps} />
                    }

                    {/* This is for the 3rd step (House Rules Page) */}
                    {
                        steps.first &&
                        steps.second &&
                        !steps.third &&
                        <HouseRules steps={steps} setSteps={setSteps} />
                    }

                    {/* This is for the 4th step (House Rules Page) */}
                    {
                        steps.first &&
                        steps.second &&
                        steps.third &&
                        !steps.fourth &&
                        <Location steps={steps} setSteps={setSteps} />
                    }

                    {/* This is for the 5th step (Pricing Page) */}
                    {
                        steps.first &&
                        steps.second &&
                        steps.third &&
                        steps.fourth &&
                        !steps.fifth &&
                        <Pricing steps={steps} setSteps={setSteps} />
                    }

                    {/* This is for the 6th step (Photos Page) */}
                    {
                        steps.first &&
                        steps.second &&
                        steps.third &&
                        steps.fourth &&
                        steps.fifth &&
                        !steps.sixth &&
                        <Photos steps={steps} setSteps={setSteps} />
                    }
                </div>
            </div>
        </div>
    );
};

export default ListPropertyPages;