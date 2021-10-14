import React from 'react';

const Pricing = ({ steps, setSteps, formik }) => {
    const handleNext = () => {
        if (!formik.errors.price) {
            setSteps({ ...steps, fourth: true })
        }
    }

    return (
        <div className="p-6">
            <h2 className="uppercase text-center text-2xl font-bold my-5">Let us know the fair market value today</h2>

            <div className="w-full mb-8 p-2">
                <label className="block text-secondary text-sm font-bold mb-2" htmlFor="price">
                    Write in the fair market value
                </label>
                <div className="flex shadow appearance-none border rounded w-full text-secondary leading-tight">
                    <span className="bg-gray-200 w-14 py-2 px-3">CA$</span>
                    <input
                        className="px-3 w-full focus:outline-none focus:shadow-outline"
                        id="price"
                        type="number"
                        placeholder="Please write in the fair market value here... "
                        name="price"
                        value={formik.values.price}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </div>

                {
                    formik.touched.price && formik.errors.price &&
                    <div className="text-md text-red-500 mt-2 ml-1">{formik.errors.price}</div>
                }
            </div>

            <div className="w-full flex justify-between mb-2 p-2">
                <button
                    type="button"
                    onClick={() => setSteps({ ...steps, third: false })}
                    className="text-primary border-2 border-primary rounded py-2 px-12">Back</button>
                <button
                    type="submit"
                    onClick={handleNext}
                    className=" bg-green-400 text-white rounded py-2 px-12">Next Step</button>
            </div>
        </div>
    );
};

export default Pricing;