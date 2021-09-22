import React from 'react';

const HouseRules = ({ steps, setSteps, formik }) => {
    const handleNext = () => {
    if (!formik.errors.houseRules){
            setSteps({ ...steps, third: true })
        }
}
    return (
        <div className="p-6">
            <h2 className="uppercase text-center text-2xl font-bold my-5">time to set some ground rules for the renters</h2>

            <div className="w-full mb-2 p-2">
                <label className="block text-secondary text-sm font-bold mb-2" htmlFor="houseRules">
                    House rules
                </label>
                <textarea
                    className="resize-none shadow appearance-none border rounded w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline"
                    id="houseRules"
                    type="text"
                    placeholder="Please describe your house rules"
                    rows="10"
                    name="houseRules"
                    value={formik.values.houseRules}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                ></textarea>
                {
                    formik.touched.houseRules && formik.errors.houseRules &&
                    <div className="text-md text-red-500 mt-2 ml-1">{formik.errors.houseRules}</div>
                }
            </div>


            <div className="w-full flex justify-between mb-2 p-2">
                <button
                    type="button"
                    onClick={() => setSteps({ ...steps, second: false })}
                    className="text-primary border-2 border-primary rounded py-2 px-12">Back</button>
                <button
                    type="submit"
                    onClick={handleNext}
                    className=" bg-green-400 text-white rounded py-2 px-12">Next Step</button>
            </div>
        </div>
    );
};

export default HouseRules;