import moment from 'moment';
import Link from 'next/link';
import React from 'react';

const SingleProperty = ({ propertyData }) => {
    const { PropertyImages, createdAt, price, name,id } = propertyData;
    return (
        <div className="md:w-1/2 p-4">
            <div className="relative  md:h-40 lg:h-60 xl:h-80">
                <Link href={`/property/edit?propertyid=${id}`}>
                    <a className="absolute right-0 top-0 bg-primary text-white text-sm rounded py-2 px-4">Edit</a>
                </Link>
                <img src={PropertyImages?.[0]?.src?.secure_url} className="w-full h-60 md:h-40 lg:h-60 xl:h-80 border" alt="" />
            </div>
            <div className=" my-3">
                <h4 className="text-xl text-primary font-bold">${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h4>
                <h5 className="text-lg font-bold">{name.length > 25 ? name.substring(0, 24) + "..." : name} </h5>
                <p className="text-sm">Posted on {moment(createdAt).format("MMM D, YYYY")}</p>
            </div>
        </div>
    );
};

export default SingleProperty;