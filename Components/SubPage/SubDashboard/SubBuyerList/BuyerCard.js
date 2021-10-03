import React from 'react';

const BuyerCard = ({ profileData }) => {
    const { firstName, lastName, email, phone, address, image, preQualified } = profileData;
    return (
        <div className="w-full lg:w-1/2">
            <div className="grid bg-white shadow rounded m-2 p-4 " style={{ gridTemplateColumns: "64px 1fr" }}>
                <div className="w-16">
                    <img src={image} className="block w-full rounded-full border border-gray-300" alt="" />
                </div>
                <div className="ml-4">
                    <div className="flex justify-between">
                        <h3 className="text-lg font-medium">{`${firstName} ${lastName}`}</h3>
                        {
                            preQualified && <span className="inline-block px-3 py-1 rounded-full bg-primary text-white" style={{ fontSize: "12px" }}>Pre-Qualified</span>
                        }
                    </div>
                    <p className="text-md">E-mail : {email}</p>
                    <p className="text-md">Phone : {phone}</p>
                    <p className="text-md">Street Address : {address}</p>
                </div>
            </div>
        </div>
    );
};

export default BuyerCard;