import axios from "axios";
import moment from 'moment';
import Link from 'next/link';
import React from 'react';
import baseURL from "../../../Helpers/httpRequest";
import { useRouter } from "next/router";

const SingleProperty = ({ propertyData }) => {
    const { PropertyImages, createdAt, price, name,id } = propertyData;
    const router = useRouter()
    const payment = async () => {
        console.log('jj', id);
        console.log(localStorage.getItem("authToken"));
        axios({
            method: "POST",
            url: `https://rent-to-own.zetech.us/api/v2/payments`,
            data: { propertyId: id },
            headers: {Authorization: localStorage.getItem("authToken")}
        }). then(response => {
            console.log(response.data?.data.url);
            router.push(response.data?.data.url)
        }).catch((error) => {
            console.log(error);
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
                <h4 className="text-xl text-primary font-bold">CA$ {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h4>
                <h5 className="text-lg font-bold">{name.length > 25 ? name.substring(0, 24) + "..." : name} </h5>
                <p className="text-sm">Posted on {moment(createdAt).format("MMM D, YYYY")}</p>
            </a>
            </Link>
        </div>
    );
};

export default SingleProperty;