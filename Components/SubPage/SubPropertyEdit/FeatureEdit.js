import axios from 'axios';
import React, { useEffect, useState } from 'react';
import baseURL from '../../../Helpers/httpRequest';
import PageLoading from '../../PageLoading';
import FeatureAlert from '../ListPropertyPages/FeatureAlert';
import EditFeatureItem from './EditFeatureItem';

const FeatureEdit = ({ propertyid }) => {
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [allFeatures, setAllFeatures] = useState([]);
    const [selectedFeatures, setselectedFeatures] = useState([])

    useEffect(() => {
        axios({
            method: "GET",
            url: `${baseURL}/v2/features`
        })
            .then((res) => {
                getSelectedFeatures();
                setAllFeatures(res.data?.data);
            })
            .catch((err) => {
                getSelectedFeatures();
                console.log(err.response);
            })
    }, [])

    const getSelectedFeatures = () => {
        setLoading(true)
        axios({
            method: "GET",
            url: `${baseURL}/v2/properties/${propertyid}/features`,
            headers: { Authorization: localStorage.getItem("authToken") }
        })
            .then((res) => {
                setselectedFeatures(res.data?.data?.propertyFeatures?.map(({id,featureId})=>({id,featureId})))
                setLoading(false)
            })
            .catch((err) => {
                console.log(err.response)
                setLoading(false)
            })
    }
    return (
        <div className="lg:w-3/4 xl:w-3/5 mx-auto  my-5 shadow border border-gray-100 rounded p-4">
            <FeatureAlert setShowModal={setShowModal} showModal={showModal} />
            {
                loading
                    ? <div className="my-8">
                        <PageLoading />
                    </div>
                    : <div className="w-full">
                        <h3 className="uppercase text-lg font-bold">Interior Features</h3>
                        {
                            allFeatures?.filter((item) => item.interior)?.map((featureData) => {
                                return <EditFeatureItem
                                    key={featureData?.id}
                                    propertyid={propertyid}
                                    selectedFeatures={selectedFeatures}
                                    getSelectedFeatures={getSelectedFeatures}
                                    featureData={featureData} />
                            })
                        }

                        <h3 className="uppercase text-lg font-bold">Exterior Features</h3>
                        {
                            allFeatures?.filter((item) => !item.interior)?.map((featureData) => {
                                return <EditFeatureItem
                                    key={featureData?.id}
                                    propertyid={propertyid}
                                    selectedFeatures={selectedFeatures}
                                    getSelectedFeatures={getSelectedFeatures}
                                    featureData={featureData} />
                            })
                        }
                    </div>
            }
        </div>
    );
};

export default FeatureEdit;