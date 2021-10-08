import React from 'react';

const FeatureItem = ({formik,featureData}) => {

    return (
        <div className="mb-3 p-2">
            <label className=" block text-gray-500 font-bold cursor-pointer">
                <input
                    className="mr-2 leading-tight"
                    type="checkbox"
                    name={`[featureIds]`}
                    checked={formik?.values?.featureIds?.find(item=>item === featureData.id)}
                    value={featureData?.id}
                    onChange={formik.handleChange} />
                <span className="text-sm">
                    {featureData?.name}
                </span>
            </label>
        </div>
    );
};

export default FeatureItem;