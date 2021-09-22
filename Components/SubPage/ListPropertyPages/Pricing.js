import React from 'react';

const Pricing = ({ steps, setSteps, formik }) => {
    const handleNext = () => {
        if (!formik.errors.marketValue){
                setSteps({ ...steps, fifth: true })
            }
    }

    return (
        <div className="p-6">
            <h2 className="uppercase text-center text-2xl font-bold my-5">Let us know the fair market value today</h2>

            <div className="w-full mb-2 p-2">
                <label className="block text-secondary text-sm font-bold mb-2" htmlFor="marketValue">
                    Write in the fair market value
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline"
                    id="marketValue"
                    type="number"
                    placeholder="Please write in the fair market value here... "
                    name="marketValue"
                    value={formik.values.marketValue}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {
                    formik.touched.marketValue && formik.errors.marketValue &&
                    <div className="text-md text-red-500 mt-2 ml-1">{formik.errors.marketValue}</div>
                }
            </div>

            <div className="w-full mb-2 p-2">
                <button
                    type="button"
                    onClick={() => setSteps({ ...steps, fourth: false })}
                    className="text-primary border-2 border-primary rounded py-2 px-12 m-2">Back</button>
                <button
                    type="submit"
                    onClick={handleNext}
                    className=" bg-green-400 text-white rounded py-2 px-12 m-2">Next Step</button>
            </div>
        </div>
    );
};

export default Pricing;