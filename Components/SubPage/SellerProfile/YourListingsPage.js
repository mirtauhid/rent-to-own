import React from 'react';
import SellerProfilePages from '.';

const YourListingsPage = ({ pageUrl }) => {
    return (
        <SellerProfilePages activeUrl="yourListings">
            <div className="px-6 py-10">
                <h2 className="text-2xl font-bold uppercase mb-6">you have 2 listings</h2>
                <p className="text-gray-400 mb-6">All of these listings are draft and can not be booked as it is not finished.</p>

                <div className="w-full flex flex-wrap">
                    <div className="md:w-1/2 p-4">
                        <div className="relative  md:h-40 lg:h-60 xl:h-80">
                            <div className="w-full absolute flex justify-center items-center z-20 top-0 md:h-40 lg:h-60 xl:h-80">
                                <button className="py-2 px-4 bg-primary text-white rounded">Finish Listing</button>
                            </div>
                            <span className="w-full bg-white opacity-30 block absolute z-10 top-0 md:h-40 lg:h-60 xl:h-80">
                            </span>
                            <img src="/images/property.jfif" className="w-full absolute top-0 md:h-40 lg:h-60 xl:h-80" alt="" />
                        </div>
                        <div className="flex flex-wrap my-3">
                            <div className="w-1/4">
                                <h4 className="text-xl text-primary font-bold">$3,805</h4>
                                <p className="text-sm">per month</p>
                            </div>
                            <div className="w-3/4 pl-3">
                                <h5 className="text-lg font-bold">Cambium Place 1bed​/​1bath.. </h5>
                                <p className="text-sm">Posted on 15th September, 2021</p>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-1/2 p-4">
                        <div className="relative  md:h-40 lg:h-60 xl:h-80">
                            <div className="w-full absolute flex justify-center items-center z-20 top-0 md:h-40 lg:h-60 xl:h-80">
                                <button className="py-2 px-4 bg-primary text-white rounded">Finish Listing</button>
                            </div>
                            <span className="w-full bg-white opacity-30 block absolute z-10 top-0 md:h-40 lg:h-60 xl:h-80">
                            </span>
                            <img src="/images/property.jfif" className="w-full absolute top-0 md:h-40 lg:h-60 xl:h-80" alt="" />
                        </div>
                        <div className="flex flex-wrap my-3">
                            <div className="w-1/4">
                                <p className="text-sm font-bold text-red-500">Price is not set yet</p>
                            </div>
                            <div className="w-3/4 pl-3">
                                <h5 className="text-lg font-bold">Cambium Place 1bed​/​1bath.. </h5>
                                <p className="text-sm">Posted on 15th September, 2021</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SellerProfilePages>
    );
};

export default YourListingsPage;