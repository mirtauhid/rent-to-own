import React from 'react';

const SubAuthContainer = ({ children }) => {
    return (
        <div className="w-full flex flex-wrap">
            <div className="hidden md:block md:w-1/2  h-screen overflow-hidden">
                <img src="/images/login-side-img.png" className="md:h-screen lg:h-full lg:w-full" style={{ objectFit: "cover" }} alt="" />
            </div>
            <div className="h-screen w-full md:w-1/2 flex justify-center items-center">
                <div className="w-4/5 smd:w-3/5 md:w-5/6 lg:w-4/5  xl:w-3/5 rounded-lg shadow border border-gray-100 p-4"  style={{ maxHeight: "98vh", overflow: "auto" }}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default SubAuthContainer;