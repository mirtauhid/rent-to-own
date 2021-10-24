import axios from 'axios';
import React from 'react';
import baseURL from '../../../Helpers/httpRequest';

const EditFeatureItem = ({ featureData, propertyid, selectedFeatures, getSelectedFeatures }) => {
    const handleUpdateFeature = (e) => {
        const method = e.target.checked ? "POST" : "DELETE";
        const url = e.target.checked
            ? `${baseURL}/v2/properties/${propertyid}/features`
            : `${baseURL}/v2/properties/${propertyid}/features/${selectedFeatures?.find(item => item?.featureId === featureData.id)?.id}`
            console.log("method",method,"url",url);

        axios({
            method,
            url,
            data: { featureId: featureData?.id },
            headers: { Authorization: localStorage.getItem("authToken") }
        })
            .then((res) => {
                getSelectedFeatures()
            })
            .catch((err) => {
                console.log(err.response);
                getSelectedFeatures()
            })
    }
    return (
        <div className="mb-3 p-2">
            <label className=" block text-gray-500 font-bold cursor-pointer">
                <input
                    className="mr-2 leading-tight"
                    type="checkbox"
                    name={`[featureIds]`}
                    checked={selectedFeatures?.find(item => item?.featureId === featureData.id)}
                    value={featureData?.id}
                    onChange={handleUpdateFeature} />
                <span className="text-sm">
                    {featureData?.name}
                </span>
            </label>
        </div>
    );
};

export default EditFeatureItem;