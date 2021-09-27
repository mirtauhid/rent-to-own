import Link from 'next/link';
import React from 'react';
import { FaCheck } from 'react-icons/fa';

const SubPricing = () => {
    return (
        <div className="container m-auto">
            <div className="lg:w-3/4 mx-auto my-8">
                <div className="mx-6 mb-10">
                    <h2 className="text-primary text-center text-3xl xl:text-4xl font-medium my-6">Select the plan that works for you</h2>
                    <p>Whether you’re looking for more money in the bank, more transparency over the process or simply more options than traditional real estate has to offer - we’re committed to helping you sell the way that suits you best.</p>
                </div>
                <div className="w-full flex flex-wrap">
                    <div className="w-full lg:w-1/2 m-auto">
                        <div className="shadow border border-gray-100 px-5 py-10 m-4 rounded-lg">
                            <h3 className="text-xl text-center font-bold">Self-Service</h3>
                            <p className="mt-4">Benefit from great tools designed to help you engage with buyers online.</p>
                            <h2 className="text-4xl font-bold text-center my-6">$99</h2>
                            <p className="mb-4">This is the perfect option for a true do-it-yourself seller who wants an award-winning real estate platform that makes it easier to reach more buyers.</p>

                            <h4 className="text-lg font-bold">What's Included</h4>
                            <ul>
                                <li className="my-3"><FaCheck className="inline-block mr-2" fill="#00dbb1" /> Our famous round sign</li>
                                <li className="my-3"><FaCheck className="inline-block mr-2" fill="#00dbb1" /> Listing on Rent-to-own realty</li>
                                <li className="my-3"><FaCheck className="inline-block mr-2" fill="#00dbb1" /> Answering Service</li>
                                <li className="my-3"><FaCheck className="inline-block mr-2" fill="#00dbb1" /> Pro check-in</li>
                                <li className="my-3"><FaCheck className="inline-block mr-2" fill="#00dbb1" /> Easy upgrade to RealEstatePro™ plan</li>
                            </ul>

                            <div className="text-center">
                                <Link href="/listProperty">
                                    <a className="inline-block py-3 px-8 my-8 border-2 border-primary bg-primary hover:bg-white text-white hover:text-primary font-bold rounded-lg">GET STARTED</a>
                                </Link>
                                <p className="w-full font-medium">Pay when you're ready to list.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubPricing;