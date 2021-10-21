import React from 'react';

const PricingEdit = ({ formik }) => {
    return (
        <div className="lg:w-3/4 xl:w-3/5 mx-auto  my-5 shadow border border-gray-100 rounded p-4">
            <div className="w-full mb-8 p-2">
                <label className="block text-secondary text-sm font-bold mb-2" htmlFor="price">
                    Write in the fair market value
                </label>
                <div className="flex shadow appearance-none border rounded w-full text-secondary leading-tight">
                    <span className="bg-gray-200 w-14 py-2 px-3">$</span>
                    <input
                        className="px-3 w-full focus:outline-none focus:shadow-outline"
                        id="price"
                        type="number"
                        placeholder="Please write in the fair market value here... "
                        name="price"
                        value={formik.values?.price}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </div>
                {
                    formik.touched.price && formik.errors?.price &&
                    <div className="text-md text-red-500 mt-2 ml-1">{formik.errors?.price}</div>
                }
            </div>
        </div>
    );
};

export default PricingEdit;