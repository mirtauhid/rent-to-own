import React from 'react';

const Location = ({ steps, setSteps, formik }) => {
    const handleNext = () => {
        if (!formik.errors.address){
                setSteps({ ...steps, fourth: true })
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

            <div className="w-full mb-2 p-2">
                <label className="block text-secondary text-sm font-bold mb-2" htmlFor="details">
                    Apartment, suit, building, flat no. etc (optional)
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline"
                    id="details"
                    type="text"
                    placeholder="Please enter your apartment, suit, building, flat no."
                    name="details"
                    value={formik.values.details}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {
                    formik.touched.details && formik.errors.details &&
                    <div className="text-md text-red-500 mt-2 ml-1">{formik.errors.details}</div>
                }
            </div>


            <div className="w-full mb-2 p-2">
                <button
                    type="button"
                    onClick={() => setSteps({ ...steps, third: false })}
                    className="text-primary border-2 border-primary rounded py-2 px-12 m-2">Back</button>
                <button
                    type="submit"
                    onClick={handleNext}
                    className=" bg-green-400 text-white rounded py-2 px-12">Next Step</button>
            </div>
        </div>
    );
};

export default Location;