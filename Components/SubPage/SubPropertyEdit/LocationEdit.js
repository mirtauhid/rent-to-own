import { useLoadScript } from "@react-google-maps/api";
import axios from "axios";
import React, { useEffect, useState } from 'react';
import baseURL from "../../../Helpers/httpRequest";
import Search from "../../Map/SubSearch";
import styles from '../ListPropertyPages/Location.module.css';
const libraries = ["places"];


const LocationEdit = ({ formik }) => {
    const [cities, setCities] = useState([])
    const [search, setSearch] = useState("")
    const [latLng, setLatLng] = useState({ lat: 0, lng: 0 })
    const [locationData, setLocationData] = useState([])
    const [error, setError] = useState({ status: false, msg: "" })
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: "AIzaSyA7DPgVBt9bQ8rtDV4PCFEmacgLBFpjmVM",
        libraries,
    });
    
    useEffect(() => {
        axios({
            method: "GET",
            url: `${baseURL}/v2/cities`
        })
            .then((res) => {
                setCities(res.data?.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    useEffect(() => {
        const handleUpdateAddress = () => {
            if (locationData?.length) {
                const { address_components } = locationData[0];
                const matchedCity = cities.find((data) => data.name === compArrToName(address_components, "locality")?.toLowerCase());

                if (matchedCity) {
                    // updating formik address value
                    formik.setFieldValue("address", search)
                    // updating formik street
                    formik.setFieldValue("street", [compArrToName(address_components, "street_number") || "", compArrToName(address_components, "route") || " "].join(` `) || "N/A");
                    // updating formik country
                    formik.setFieldValue("country", compArrToName(address_components, "country"))
                    // updating formik zip code
                    formik.setFieldValue("zipCode", compArrToName(address_components, "postal_code"))
                    // updating formik city id
                    formik.setFieldValue("cityId", matchedCity.id)
                    // updating formik latitude & longitude
                    formik.setFieldValue("latitude", latLng.lat?.toString())
                    formik.setFieldValue("longitude", latLng.lng?.toString())

                    setError({ status: false, msg: "" })
                } else {
                    setError({ status: true, msg: "Our service is not available this city!" })
                }
            } else if (formik.values?.address) {
                setError({ status: false, msg: "" })
            }
        }
        handleUpdateAddress()
    }, [locationData])

    const compArrToName = (arr, property) => {
        const componentName = arr.find((data) => (data.types[0] === property))?.long_name;
        return componentName
    }
    return (
        <div className="lg:w-3/4 xl:w-3/5 mx-auto  my-5 shadow border border-gray-100 rounded p-4">

            <label className={styles["listing-search-box"]} htmlFor="search_input" >
                <h3 className="block text-secondary text-sm font-bold mb-2">
                    Search Your Address
                </h3>
                {isLoaded && <Search
                    setSearch={setSearch}
                    setLatLng={setLatLng}
                    setLocationData={setLocationData}
                    inputPlaceholder="Search your address" />}
                {
                    error.status &&
                    <div className="text-md text-red-500 mt-2 ml-1">{error.msg}</div>
                }
            </label>

            <div className="block text-secondary text-sm ml-1 my-2"><b>Your address is: </b>
                {formik.values?.address ? formik.values?.address : `${formik?.values?.street !== "N/A" ? formik?.values?.street : ""} ${cities.find(city => city.id === formik?.values?.cityId)?.name}, ${formik?.values?.country}`}
            </div>

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
                    value={formik.values?.apt}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {
                    formik.touched.apt && formik.errors?.apt &&
                    <div className="text-md text-red-500 mt-2 ml-1">{formik.errors?.apt}</div>
                }
            </div>
        </div>
    );
};

export default LocationEdit;