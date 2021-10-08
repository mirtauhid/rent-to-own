import axios from 'axios';
import React, { useEffect, useState } from 'react';
import baseURL from '../../../Helpers/httpRequest';
import FeatureItem from './FeatureItem';

const Features = ({ formik, steps, setSteps }) => {
    const [allFeatures, setAllFeatures] = useState([
        { id: 1, interior: true, name: "Interior 1" },
        { id: 2, interior: true, name: "Interior 2" },
        { id: 3, interior: true, name: "Interior 3" },
        { id: 4, interior: true, name: "Interior 4" },
        { id: 5, interior: false, name: "Exterior 1" },
        { id: 6, interior: false, name: "Exterior 2" },
        { id: 7, interior: false, name: "Exterior 3" },
        { id: 8, interior: false, name: "Exterior 4" },
    ])
    const [error, setError] = useState({ status: false, msg: "" })

    useEffect(() => {
        axios({
            method: "GET",
            url: `${baseURL}/v2/features`
        })
            .then((res) => {
                setAllFeatures(res.data?.data);
            })
            .catch((err) => {
                console.log(err.response);
            })
    }, [])

    const handleNext = () => {
        if (formik.values?.featureIds?.length) {
            setError({ status: false, msg: "" })
            setSteps({ ...steps, second: true })
        } else {
            setError({ status: true, msg: "Your entered address is wrong or our service is not available to your city!" })
        }
    }
    return (
        <div className="p-6">
            <h2 className="uppercase text-center text-2xl font-bold my-5">Add Features</h2>

            <h3 className="uppercase text-lg font-bold">Interior Features</h3>
            {
                allFeatures?.filter((item) => item.interior)?.map((featureData) => {
                    return <FeatureItem
                        formik={formik}
                        key={featureData?.id}
                        featureData={featureData} />
                })
            }


            <h3 className="uppercase text-lg font-bold">Exterior Features</h3>
            {
                allFeatures?.filter((item) => !item.interior)?.map((featureData) => {
                    return <FeatureItem
                        formik={formik}
                        key={featureData?.id}
                        featureData={featureData} />
                })
            }


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

export default Features;