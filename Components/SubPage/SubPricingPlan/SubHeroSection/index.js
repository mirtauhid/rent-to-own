import React from 'react';

const SubHeroSection = () => {
    return (
        <div className="px-5 md:px-20 lg:px-28 mt-12">
            <div className="relative rounded-xl h-60 md:h-80 lg:h-96 overflow-hidden">
                <img
                    src="/images/pricing-page-image.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                />
                <div
                    className="absolute flex justify-center items-center top-0 left-0 w-full h-full px-5 md:px-12"
                    style={{ background: "rgba(0,0,0,0.4)" }}
                >
                    <h1 className="text-center text-xl sm:text-2xl smd:text-3xl md:text-4xl lg:text-5xl font-bold text-white mx-12 lg:mx-24 lx:mx-48 z-0">List your home in minutes
                        with our Self-Service plan.</h1>
                </div>
            </div>
        </div>
    );
};

export default SubHeroSection;