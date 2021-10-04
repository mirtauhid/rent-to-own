import React, { useEffect, useState } from 'react';
import Search from '../../Map/SubSearch';
import styles from './Location.module.css';

const Location = ({ steps, setSteps, formik }) => {
    const [search, setSearch] = useState("")
    const [latLng, setLatLng] = useState({ lat: 0, lng: 0 })
    const [locationData, setLocationData] = useState([])
    const [error, setError] = useState({ status: false, msg: "" })

    useEffect(() => {
        const handleUpdateAddress = () => {
            if (locationData.length) {
                formik.setFieldValue("cityId", "1")
                formik.setFieldValue("address", search)
                setError({ status: false, msg: "" })
            }
            if (formik.values?.address) {
                setError({ status: false, msg: "" })
            }
        }
        handleUpdateAddress()
    }, [locationData])

    const handleNext = () => {
        if (locationData.length || formik.values?.address) {
            setError({ status: false, msg: "" })
            setSteps({ ...steps, second: true })
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
                <Search
                    setSearch={setSearch}
                    setLatLng={setLatLng}
                    setLocationData={setLocationData}
                    inputPlaceholder="Search your address" />
                {
                    error.status &&
                    <div className="text-md text-red-500 mt-2 ml-1">{error.msg}</div>
                }
            </label>
            {
                formik.values?.address &&
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
                    onClick={() => setSteps({ ...steps, first: false })}
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