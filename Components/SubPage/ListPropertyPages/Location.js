import React from 'react';

const Location = ({ steps, setSteps, formik }) => {
    const handleNext = () => {
        if (!formik.errors.address){
                setSteps({ ...steps, second: true })
            }
    }
    return (
        <div className="p-6">
            <h2 className="uppercase text-center text-2xl font-bold my-5">where is your home?</h2>

            <div className="w-full mb-2 p-2">
                <label className="block text-secondary text-sm font-bold mb-2" htmlFor="address">
                    Address
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline"
                    id="address"
                    type="text"
                    placeholder="Please enter your address here..."
                    name="address"
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {
                    formik.touched.address && formik.errors.address &&
                    <div className="text-md text-red-500 mt-2 ml-1">{formik.errors.address}</div>
                }
            </div>

            <div className="w-full mb-6 p-2">
                <label className="block text-secondary text-sm font-bold mb-2" htmlFor="aptNo">
                    Apartment, suit, building, flat no. etc (optional)
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline"
                    id="aptNo"
                    type="text"
                    placeholder="Please enter your apartment, suit, building, flat no."
                    name="aptNo"
                    value={formik.values.aptNo}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {
                    formik.touched.aptNo && formik.errors.aptNo &&
                    <div className="text-md text-red-500 mt-2 ml-1">{formik.errors.aptNo}</div>
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