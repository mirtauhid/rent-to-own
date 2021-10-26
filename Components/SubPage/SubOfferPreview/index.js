
import moment from 'moment';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const SubOfferPreview = () => {
    const { property, offer, auth } = useSelector(state => state)

    const propertyDetails = property?.propertyDetails;
    const propertyAddress = propertyDetails?.PropertyAddresses?.[0]
    const offerData = offer?.offerData;
    const buyerData = auth?.userData;
    const sellerData = property?.propertyDetails?.User;

    const router = useRouter();
    useEffect(() => {
        !offerData && router.push('/')
    }, [])

    return (
        <div className="container mx-auto py-7">
            <div className="lg:flex">
                <div className="lg:w-3/5">
                    <div className="m-3 p-4 border border-gray-200 rounded">
                        <div className="flex justify-center items-center mt-3">
                            <img
                                className="w-1/3"
                                src="/images/house-vector.png" alt="house icon" />
                        </div>
                        <div className="text-center">
                            <h2 className="text-3xl font-medium mt-4">
                                {buyerData?.firstName}, your offer is ready to send
                            </h2>
                            <p className="mt-2">Please review. Once you’re sure everything is proper, you can forward to seller below. Good luck!</p>
                            <div className="w-2/3 m-auto text-lg">
                                <button className="border-2 border-primary bg-primary text-white rounded py-2 px-4 m-2">Submit to seller</button>
                                <button className="border-2 border-primary rounded py-2 px-4 m-2">Edit offer</button>
                            </div>
                            <p className="mt-2 text-red-500 text-sm">You can not submit offeer before "Signing documents"</p>
                        </div>
                    </div>

                    <div className="pl-2">
                        <div className=" m-auto mt-5 p-4 rounded bg-gray-100 text-center">
                            <h3 className="text-2xl font-medium my-2">Offer amount</h3>
                            <h3 className="text-3xl font-medium my-2">${propertyDetails?.price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>
                            <p className="text-sm my-2">(100% of asking price)</p>
                        </div>

                        <div className="mt-5">
                            <h3 className="text-2xl">Included Items</h3>
                            <p className="ml-4"><pre>{offerData?.includedItems}</pre></p>
                        </div>

                        <div className="mt-5">
                            <h3 className="text-2xl">Notes / Additional Conditons</h3>
                            <p className="ml-4">{offerData?.terms}</p>
                        </div>

                        <div className="mt-5">
                            <h3 className="text-2xl">Preferred Closing Date</h3>
                            <p className="ml-4">{moment(offerData?.closingDate).format("ddd, MMM DD, YYYY")}</p>
                            <p className="ml-4 mt-2">Preferred closing date will be used to guide negotiations, but the actual closing date will be set by your lawyers in the final agreement of purchase and sale.</p>
                        </div>

                        <p className="mt-5 text-red-500 text-sm">Disclaimer: The OfferMaker™ is a non-legally binding negotiation tool that makes it easy to start & facilitate the process.</p>
                    </div>
                </div>
                <div className="lg:w-2/5 px-3">
                    <div className="flex m-3 p-3 bg-gray-50 border border-gray-200 rounded mb-4">
                        <div className="" style={{ width: "120px" }}>
                            <img src={propertyDetails?.PropertyImages?.[0]?.src?.secure_url || "/images/property.jfif"} alt="" />
                        </div>
                        <div className="ml-3 ">
                            <h3 className="text-lg font-medium">{propertyDetails?.name}</h3>
                            <p>{`${propertyAddress?.street !== "N/A" ? (propertyAddress?.street + ",") : ""} ${propertyAddress?.City?.name}, ${propertyAddress?.country}`}</p>
                        </div>
                    </div>

                    <div className="flex flex-wrap relative m-3 p-3 border border-gray-200 rounded mb-4">
                        <div className="w-16 h-16 rounded-full overflow-hidden">
                            <img src={buyerData?.image?.secure_url || "/images/img_avatar.png"} className="h-full w-full object-cover" />
                        </div>
                        <div className="ml-3">
                            <div className=" absolute top-3 right-3 bg-primary text-white py-1 px-2 text-sm rounded">Buyer</div>
                            <h3 className="text-lg font-medium">{buyerData?.firstName} {buyerData?.lastName}</h3>
                        </div>
                    </div>

                    <div className="flex flex-wrap m-3 p-3 border border-gray-200 rounded mb-4">
                        <label>
                            <input type="checkbox" />  Have you completed document signing?
                        </label>
                    </div>

                    <div className="flex flex-wrap relative  m-3 p-3 border border-gray-200 rounded mb-4">
                        <div className="w-16 h-16 rounded-full overflow-hidden">
                            <img src={sellerData?.image?.secure_url || "/images/img_avatar.png"} className="h-full w-full object-cover" />
                        </div>
                        <div className="ml-3 ">
                            <div className=" absolute top-3 right-3 bg-primary text-white py-1 px-2 text-sm rounded">Seller</div>
                            <h3 className="text-lg font-medium">{sellerData?.firstName} {sellerData?.lastName}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubOfferPreview;