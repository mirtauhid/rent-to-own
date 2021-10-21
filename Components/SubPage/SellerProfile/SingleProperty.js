import axios from 'axios';
import moment from 'moment';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { RiCheckboxCircleFill } from 'react-icons/ri';
import baseURL from '../../../Helpers/httpRequest';

const SingleProperty = ({ propertyData }) => {
    const { PropertyImages, createdAt, price, name, id } = propertyData;
    const router = useRouter();

    const makePayment = () => {
        axios({
            method: "POST",
            url: `${baseURL}/v2/payments`,
            data: { propertyId: parseInt(id) },
            headers: { authorization: localStorage.getItem("authToken") }
        })
            .then((res) => {
                router.push(res?.data?.data?.url);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div className="md:w-1/2 p-4">
            <div className="relative  md:h-40 lg:h-60 xl:h-80">
                <Link href={`/property/edit?propertyid=${id}`}>
                    <a className="absolute right-0 top-0 bg-primary text-white text-sm rounded py-2 px-4">Edit</a>
                </Link>
                <button 
                    className="absolute left-0 top-0 bg-primary text-white text-sm rounded py-2 px-4"
                    onClick={payment}
                >Pay
                </button>
                <img src={PropertyImages?.[0]?.src?.secure_url} className="w-full h-full object-cover border" alt="" />
            </div>
            <Link href={`/housesearch/${id}`}>
                <a className="block my-3">
                    <h4 className="text-xl text-primary font-bold">${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h4>
                    <h5 className="text-lg font-bold">{name.length > 25 ? name.substring(0, 24) + "..." : name} </h5>
                </a>
            </Link>
            <p className="text-sm">Posted on {moment(createdAt).format("MMM D, YYYY")}</p>
            {
                propertyData?.subscriptionStatus === "PAID"
                    ? <p className="text-primary font-bold"><RiCheckboxCircleFill className="inline-block text-xl my-2" style={{ fill: '#00dbb1' }} /> Payment Completed</p>
                    : <button
                        onClick={makePayment}
                        className="text-center bg-primary text-white rounded py-2 px-4 my-2">Proceed to checkout</button>
            }
        </div>
    );
};

export default SingleProperty;