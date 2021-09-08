import React from 'react';

const Notification = () => {
    return (
        <div>
            <div className="w-1/2 mx-auto my-24 text-center">
                <h2 className="text-red-500 font-bold text-4xl">WE ARE SORRY THAT YOU DON'T MEET THE MINIMUM REQUIREMENTS AT THIS TIME.</h2>
                <p className="text-xl mt-5">However, we realize things may change for you down the road.  When you do meet our minimum requirements, please complete another application at that time.</p>
            </div>
        </div>
    );
};

export default Notification;