import axios from 'axios';
import React, { useEffect, useState } from 'react';
import baseURL from '../../../Helpers/httpRequest';
import PageLoading from '../../PageLoading';
import FeatureAlert from './FeatureAlert';
import FeatureItem from './FeatureItem';

const Features = ({ formik, steps, setSteps }) => {
    const [loading, setLoading] = useState(true)
    const [showModal, setShowModal] = useState(false)
    const [allFeatures, setAllFeatures] = useState([])

    useEffect(() => {
        axios({
            method: "GET",
            url: `${baseURL}/v2/features`
        })
            .then((res) => {
                setLoading(false)
                setAllFeatures(res.data?.data);
            })
            .catch((err) => {
                setLoading(false)
                console.log(err.response);
            })
    }, [])

    const handleNext = () => {
        if (formik.values?.featureIds?.length) {
            setSteps({ ...steps, second: true })
        } else {
            setShowModal(true)
        }
    }
    return (
        <div className="p-6">
            <FeatureAlert setShowModal={setShowModal} showModal={showModal} />

            <h2 className="uppercase text-center text-2xl font-bold my-5">Add Features</h2>

            {
                loading
                    ? <div className="my-8">
                        <PageLoading />
                    </div>
                    : <div className="w-full">
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
                    </div>
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