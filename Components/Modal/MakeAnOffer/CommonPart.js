import React from 'react';
import { FaTimes } from 'react-icons/fa';

const CommonPart = ({ setIsClose, formik, children }) => {
    return (
        <div className="md:flex">
            <div className="hidden lg:block lg:w-1/2">
                {/* <img src="/images/NoPath.png" alt="logo" className={'h-full'} /> */}
                <div className="p-8 m-5 text-center bg-gray-100">
                    <img src="/images/deal.svg" alt="Deal" className={'w-16 xl:w-20 inline-block text-primary mb-2'} />
                    <h2 className="font-medium lg:text-xl xl:text-2xl">Ready to place an offer?</h2>
                    <p className="mt-3">The OfferMaker™ is a non-legally binding negotiation tool that makes it easy to start & facilitate the process</p>

                    <div className="my-5 bg-gray-200 p-2 rounded-lg">
                        <h3 className="font-medium text-xl xl:text-2xl">Lot 1018 Quad 116/B14</h3>
                        <p className="text-lg my-2">Dawson City YT</p>
                        <h1 className="text-xl xl:text-2xl font-bold">$796,500</h1>
                    </div>

                    <p className="">
                        Be prepared to discuss key items that should be agreed upon, including:
                    </p>
                    <div className="flex justify-center items-center text-primary text-xl my-4">
                        <span className="w-14 inline-block mx-1 xl:mx-3 text-sm">
                            <img src="/images/appliance.svg" alt="Deal" className={'w-full block mb-1'} />
                            <span className="inline-block h-10">Sale Price</span>
                        </span> +
                        <span className="w-14 inline-block mx-1 xl:mx-3 text-sm">
                            <img src="/images/calender.svg" alt="Deal" className={'w-full block mb-1'} />
                            <span className="inline-block h-10">Included Items</span>
                        </span> +
                        <span className="w-14 inline-block mx-1 xl:mx-3 text-sm">
                            <img src="/images/conditions.svg" alt="Deal" className={'w-full block mb-1'} />
                            <span className="inline-block h-10">Conditions</span>
                        </span> +
                        <span className="w-14 inline-block mx-1 xl:mx-3 text-sm">
                            <img src="/images/sale price.svg" alt="Deal" className={'w-full block mb-1'} />
                            <span className="inline-block h-10">Closing date</span>
                        </span>
                    </div>

                    <p>Once both parties agree on terms, the seller will be able to forward the info to their lawyer to finalize the sale.</p>
                </div>
            </div>

            <div className="w-full lg:w-1/2 pb-6">
                {/* For cross button  */}
                <div className="text-right p-4">
                    <button
                        className="p-2 rounded hover:bg-gray-200 text-2xl"
                        onClick={() => setIsClose(true)}>
                        <FaTimes />
                    </button>
                </div>
                {/* For showing children */}
                <form onSubmit={formik.handleSubmit}>
                    {children}
                </form>
            </div>
        </div>
    );
};

export default CommonPart;