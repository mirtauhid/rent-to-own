import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SellerProfilePages from '.';
import baseURL from '../../../Helpers/httpRequest';
import SingleProperty from './SingleProperty';

const YourListingsPage = ({ pageUrl }) => {
    const [listings, setListings] = useState([]) 

    useEffect(() => {
        localStorage?.getItem("authToken") && axios({
            method: "GET",
            url:`${baseURL}/v2/public/properties`,
            headers: {authorization: localStorage.getItem("authToken")}
        })
        .then((res)=>{
            setListings(res.data?.data?.properties);
        })
        .catch((err)=>console.log(err))
    }, [])
    return (
        <SellerProfilePages activeUrl="yourListings">
            <div className="px-6 py-10">
                <h2 className="text-2xl font-bold uppercase mb-6">you have {listings?.length} listings</h2>
                {/* <p className="text-gray-400 mb-6">All of these listings are draft and can not be booked as it is not finished.</p> */}

                <div className="w-full flex flex-wrap">
                    {
                        listings?.map((propertyData)=><SingleProperty key={propertyData.id} propertyData={propertyData}/>)
                    }
                </div>
            </div>
        </SellerProfilePages>
    );
};

export default YourListingsPage;