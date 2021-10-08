import { useLoadScript } from "@react-google-maps/api";
import axios from "axios";
import React, { useEffect, useState } from 'react';
import baseURL from "../../../Helpers/httpRequest";
import Search from '../../Map/SubSearch';
import PageLoading from "../../PageLoading";
import styles from './Location.module.css';
const libraries = ["places"];

const Location = ({ steps, setSteps, formik }) => {
    const [loading, setLoading] = useState(false)
    const [locationData, setLocationData] = useState([])
    const [error, setError] = useState({ status: false, msg: "" })
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: "AIzaSyA7DPgVBt9bQ8rtDV4PCFEmacgLBFpjmVM",
        libraries,
    });


    useEffect(() => {
        const handleUpdateAddress = () => {
                setLoading(true)
            if (locationData?.length) {
                const { address_components, geometry, formatted_address } = locationData[0];
                const { location } = geometry;

                axios({
                    method: "POST",
                    url: `${baseURL}/v2/public/find-cities`,
                    data: { name: compArrToName(address_components, "locality") }
                })
                    .then((res) => {
                        setLoading(false)
                        setError({ status: false, msg: "" })

                        if (res?.data?.success) {
                            // Street finding
                            const street = [compArrToName(address_components, "street_number") || "", compArrToName(address_components, "route") || ""].join(` `);
                            // City id
                            const cityId = res?.data?.data?.[0]?.id;

                            // updating formik address value
                            formik.setFieldValue("address", formatted_address)
                            formik.setFieldValue("street", (street !== " " && street) || "N/A");
                            formik.setFieldValue("cityId", cityId)
                            formik.setFieldValue("country", compArrToName(address_components, "country"))
                            formik.setFieldValue("zipCode", compArrToName(address_components, "postal_code"))
                            // updating formik latitude & longitude
                            formik.setFieldValue("latitude", location?.lat()?.toString())
                            formik.setFieldValue("longitude", location?.lng()?.toString())
                        }
                    })
                    .catch((err) => {
                        setLoading(false)
                        setError({ status: true, msg: "Our service is not available this city!" })
                        formik.setFieldValue("address", "")
                        formik.setFieldValue("street", "")
                        formik.setFieldValue("cityId", "")
                        formik.setFieldValue("country", "")
                        formik.setFieldValue("zipCode", "")
                        formik.setFieldValue("latitude", "")
                        formik.setFieldValue("longitude", "")
                    })

            } else if (formik.values?.address) {
                setLoading(false)
                setError({ status: false, msg: "" })
            }else if(!formik.values?.address && !locationData?.length){
                setLoading(false)
            }
        }
        handleUpdateAddress()
    }, [locationData])

    const compArrToName = (arr, property) => {
        const componentName = arr.find((data) => (data.types[0] === property))?.long_name;
        return componentName
    }


    const handleNext = () => {
        if (formik.values?.address) {
            setError({ status: false, msg: "" })
            setSteps({ ...steps, third: true })
        } else {
            setError({ status: true, msg: "Your entered address is wrong or our service is not available to your city!" })
        }
    }
    
    return (
        <div className="p-6">
            <h2 className="uppercase text-center text-2xl font-bold my-5">where is your home?</h2>

            <label className={styles["listing-search-box"]} htmlFor="search_input" >
                <h3 className="block text-secondary text-sm font-bold mb-2">
                    Search Your Address
                </h3>
                {isLoaded && <Search
                    setSearch={(value) => console.log(value)}
                    setLatLng={(value) => console.log(value)}
                    setLocationData={setLocationData}
                    inputPlaceholder="Search your address" />}
                {
                    error.status && !loading &&
                    <div className="text-md text-red-500 mt-2 ml-1">{error.msg}</div>
                }
            </label>
            { loading ? <PageLoading type="small" /> : null }
            {
                formik.values?.address && !loading &&
                <div className="block text-secondary text-sm ml-1 my-2"><b>Your address is: </b>{formik.values?.address}</div>
            }

            <div className="w-full mb-6 p-2">
                <label className="block text-secondary text-sm font-bold mb-2" htmlFor="apt">
                    Apartment, suit, building, flat no. etc (optional)
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline"
                    id="apt"
                    type="text"
                    placeholder="Please enter your apartment, suit, building, flat no."
                    name="apt"
                    value={formik.values.apt}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {
                    formik.touched.apt && formik.errors.apt &&
                    <div className="text-md text-red-500 mt-2 ml-1">{formik.errors.apt}</div>
                }
            </div>


            <div className="w-full flex justify-between mb-2 p-2">
                <button
                    type="button"
                    onClick={() => setSteps({ ...steps, second: false })}
                    className="text-primary border-2 border-primary rounded py-2 px-12">Back</button>
                <button
                    type="submit"
                    onClick={handleNext}
                    className=" bg-green-400 text-white rounded py-2 px-12">Next Step</button>
            </div>
        </div>
    );
};

export default Location;