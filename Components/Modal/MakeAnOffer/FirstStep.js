import React from 'react';
import TimeLine from './TimeLine';

const FirstStep = ({ steps, setSteps, formik }) => {
    return (
        <div className="px-5">
            <h2 className="text-primary font-medium text-center lg:text-2xl xl:text-3xl">Offer Amount</h2>
            {/* For importing timeline  */}
            <TimeLine steps={steps} />

            <div className="bg-gray-50 m-5 p-5 text-center">
                <p className="text-xl font-medium">Sale Price</p>
                <h2 className="text-2xl text-primary font-bold my-4">$796,500</h2>
                <p>(100% of asking price)</p>
            </div>

            <div className="bg-gray-50 m-5 p-5">
                <p className="text-xl font-bold">Are you pre-qualified for a mortgage for this amount?</p>
                <div className="mb-3 p-2">
                    <label className=" block text-gray-500 font-medium">
                        <input
                            className="mr-2 leading-tight"
                            type="radio"
                            value="yes"
                            onClick={formik.handleChange}
                            checked={formik.values.preQualified === 'yes'}
                            name="preQualified" />
                        <span className="text-md">
                            Yes
                        </span>
                    </label>
                    <label className=" block text-gray-500 font-medium">
                        <input
                            className="mr-2 leading-tight"
                            type="radio"
                            value="no"
                            onClick={formik.handleChange}
                            checked={formik.values.preQualified === 'no'}
                            name="preQualified" />
                        <span className="text-md">
                            No
                        </span>
                    </label>
                    {
                        formik.errors.preQualified &&
                        <div className="text-sm text-red-500 mt-2 ml-1">{formik.errors.preQualified}</div>
                    }
                </div>
            </div>
            <div className="text-right px-5">
                <button
                    type="button"
                    type="submit"
                    onClick={() => {
                        if (formik.values.preQualified === 'yes') {
                            setSteps({ ...steps, first: true })
                        }
                    }}
                    className=" bg-green-400 text-white rounded py-2 px-6">Next Step</button>
            </div>
        </div>
    );
};

export default FirstStep;