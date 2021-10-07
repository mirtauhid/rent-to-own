import axios from 'axios';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import baseURL from '../../../Helpers/httpRequest';
import PageLoading from '../../PageLoading';
import DescriptionEdit from './DescriptionEdit';
import LocationEdit from './LocationEdit';
import PhotosEdit from './PhotosEdit';
import PricingEdit from './PricingEdit';

const SubPropertyEdit = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [propertyImages, setPropertyImages] = useState([])
    const [propertyData, setPropertyData] = useState({
        userId: "",
        name: "",
        description: "",
        listingTypeId: "",
        squareFootage: "",
        bedroom: 0,
        bathroom: 0,
        partialBathroom: 0,
        address: "",
        street: "",
        latitude: "",
        longitude: "",
        apt: "",
        zipCode: "",
        country: "",
        cityId: 3,
        apt: "",
        price: "",
        plotSize: 1000000000000000000,
        images: [],
    })

    const { userData } = useSelector((state) => state.auth);

    const { query } = useRouter();

    useEffect(() => {
        query?.propertyid && axios({
            method: "GET",
            url: `${baseURL}/v2/properties/${query?.propertyid}`
        })
            .then((res) => {
                const {
                    userId,
                    name,
                    description,
                    squareFootage,
                    bathroom,
                    bedroom,
                    listingTypeId,
                    partialBathroom,
                    plotSize,
                    price,
                    PropertyImages,
                    PropertyAddresses,
                } = res.data?.data;
                const { apt, cityId, country, latitude, longitude, street, zipCode } = PropertyAddresses[0];
                setPropertyImages(PropertyImages)
                setPropertyData({
                    userId,
                    name,
                    description,
                    squareFootage,
                    bathroom,
                    bedroom,
                    listingTypeId,
                    partialBathroom,
                    plotSize,
                    price,
                    apt,
                    cityId,
                    country,
                    latitude,
                    longitude,
                    street,
                    zipCode,
                    address: ""
                })
                setIsLoading(false)
            })
            .catch((err) => {
                setIsLoading(false)
                console.log(err)
            })
    }, [query?.propertyid])
    const validate = (values) => {
        const errors = {};

        // For Description Validation
        if (!values.name) { errors.name = "Required" }
        if (!values.description) { errors.description = "Required"; }
        if (!values.listingTypeId) { errors.listingTypeId = "Required"; }
        if (!values.squareFootage) { errors.squareFootage = "Required"; }

        // For Price Validation
        if (!values.price) { errors.price = "Please input a valid value!"; }

        return errors;
    };

    const formik = useFormik({
        initialValues: propertyData,
        enableReinitialize: true,
        validate,
        onSubmit: (values) => {
            axios({
                method: "PUT",
                url: `${baseURL}/v2/public/property/${query.propertyid}`,
                data: values
            })
                .then((res) => {
                    if (res.data?.success) {
                        console.log(res.data);
                        // Dynamic routing
                        // router.push("/sellerProfile/yourListings")
                    }
                })
                .catch((err) => console.log(err))
        },
    });

    return (
        <div className="px-5 md:px-20 lg:px-28 py-6">
            {
                isLoading ?
                    <PageLoading />
                    : (
                        userData?.id === propertyData?.userId
                            ? <form onSubmit={formik.handleSubmit}>
                                <PhotosEdit
                                    propertyid={query?.propertyid}
                                    setPropertyImages={setPropertyImages}
                                    propertyImages={propertyImages} />
                                <DescriptionEdit formik={formik} />
                                <LocationEdit formik={formik} />
                                <PricingEdit formik={formik} />
                                <div className="lg:w-3/4 xl:w-3/5 mx-auto  my-5 shadow border border-gray-100 rounded p-4">
                                    <button
                                        onClick={formik.handleSubmit}
                                        type="submit"
                                        className="block ml-auto bg-green-400 text-white rounded py-2 px-12 ">Update Data</button>
                                </div>
                            </form>
                            : <h1 className="text-center text-xl text-red-500 font-medium my-8 mx-4 ">You are not allowed to edit the property</h1>
                    )
            }
        </div>
    );
};

export default SubPropertyEdit;