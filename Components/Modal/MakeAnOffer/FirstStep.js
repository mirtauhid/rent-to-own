import { useRouter } from 'next/router';
import React from 'react';
import TimeLine from './TimeLine';

const FirstStep = ({ steps, setSteps, formik, pricePerMonth }) => {
    const router = useRouter()
    return (
        <div className="px-5">
            <h2 className="text-primary font-medium text-center lg:text-2xl xl:text-3xl">Offer Amount</h2>
            {/* For importing timeline  */}
            <TimeLine steps={steps} />

            <div className="bg-gray-50 m-5 p-5 text-center">
                <p className="text-xl font-medium">Sale Price</p>
                <h2 className="text-2xl text-primary font-bold my-4">${pricePerMonth}</h2>
                <p>(Per month)</p>
            </div>

            <div className="bg-gray-50 m-5 p-5">
                <p className="text-xl font-bold">Is your three documents needs to be updated?</p>
                <div className="mb-3 p-2">
                    <label className=" block text-gray-500 font-medium">
                        <input
                            className="mr-2 leading-tight"
                            type="radio"
                            value="yes"
                            onClick={formik.handleChange}
                            checked={formik.values.isNeedDocUpdate === 'yes'}
                            name="isNeedDocUpdate" />
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
                            checked={formik.values.isNeedDocUpdate === 'no'}
                            name="isNeedDocUpdate" />
                        <span className="text-md">
                            No
                        </span>
                    </label>
                    {
                        formik.errors.isNeedDocUpdate &&
                        <div className="text-sm text-red-500 mt-2 ml-1">{formik.errors.isNeedDocUpdate}</div>
                    }
                </div>
            </div>
            <div className="text-right px-5">
                <button
                    type="button"
                    type="submit"
                    onClick={() => {
                        if (formik.values.isNeedDocUpdate === 'no') {
                            setSteps({ ...steps, first: true })
                        } else if (formik.values.isNeedDocUpdate === 'yes') {
                            router.push('/settings?name=prequalification')
                        }
                    }}
                    className=" bg-green-400 text-white rounded py-2 px-6">Next Step</button>
            </div>
        </div>
    );
};

export default FirstStep;