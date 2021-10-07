import axios from 'axios';
import React, { useEffect, useState } from 'react';
import baseURL from '../../../Helpers/httpRequest';
import CustomCounter from '../ListPropertyPages/CustomCounter';

const DescriptionEdit = ({ formik }) => {
    const [listingTypes, setListingTypes] = useState([])

    useEffect(() => {
        // axios request for getting listing types
        axios({
            method: "GET",
            url: `${baseURL}/v2/listing-types`
        })
            .then((res) => {
                setListingTypes(res.data.data);
            })
            .catch((err) => console.log(err.response))
    }, [])
    return (
        <div className="lg:w-3/4 xl:w-3/5 mx-auto  my-5 shadow border border-gray-100 rounded p-4">
            <div className="w-full mb-2 p-2">
                <label className="block text-secondary text-sm font-bold mb-2" htmlFor="name">
                    The name of your home listing
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="What is the name of your home listing?"
                    name="name"
                    value={formik.values?.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {
                    formik.touched?.name && formik.errors?.name &&
                    <div className="text-md text-red-500 mt-2 ml-1">{formik.errors?.name}</div>
                }
            </div>

            <div className="w-full mb-2 p-2">
                <label className="block text-secondary text-sm font-bold mb-2" htmlFor="description">
                    Describe your home
                </label>
                <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline resize-none"
                    id="description"
                    rows="4"
                    placeholder="Describe your home"
                    name="description"
                    value={formik.values?.description}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {
                    formik.touched?.description && formik.errors?.description &&
                    <div className="text-md text-red-500 mt-2 ml-1">{formik.errors?.description}</div>
                }
            </div>

            <div className="w-full mb-2 p-2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="listingTypeId">
                    Home Type
                </label>
                <select
                    className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="listingTypeId"
                    name="listingTypeId"
                    value={formik.values?.listingTypeId}
                    onChange={(e) => formik.setFieldValue("listingTypeId", e.target.value)}
                >
                    <option value="">Choose the  type of your home</option>
                    {
                        listingTypes?.map((type) => <option key={type.id?.toString()} value={type.id}>{type.name}</option>)
                    }
                </select>
                {
                    formik.errors?.listingTypeId &&
                    <div className="text-md text-red-500 mt-2 ml-1">{formik.errors?.listingTypeId}</div>
                }
            </div>

            <div className="w-full mb-4 p-2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="squareFootage">
                    Approximate square footage
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline"
                    id="squareFootage"
                    name="squareFootage"
                    type="number"
                    placeholder="Approximate square footage"
                    value={formik.values?.squareFootage}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {
                    formik.touched?.squareFootage && formik.errors?.squareFootage &&
                    <div className="text-md text-red-500 mt-2 ml-1">{formik.errors?.squareFootage}</div>
                }
            </div>

            <div className="flex flex-wrap justify-between lg:w-3/4 xl:w-2/3 mb-4 p-2">
                <CustomCounter
                    labelText="Beds"
                    icon="IoIosBed"
                    formik={formik}
                    fieldName="bedroom" />
                <CustomCounter
                    labelText="Baths"
                    icon="GiBathtub"
                    formik={formik}
                    fieldName="bathroom" />
                <CustomCounter
                    labelText="Partial Baths"
                    value="0" icon="GiBathtub"
                    formik={formik}
                    fieldName="partialBathroom" />
            </div>
        </div>
    );
};

export default DescriptionEdit;