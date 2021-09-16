import React from 'react';
import TimeLine from './TimeLine';

const FourthStep = ({ steps, setSteps, formik }) => {
    return (
        <div className="px-5 pb-5">
            <h2 className="text-primary font-medium text-center lg:text-2xl xl:text-3xl">Notes / Additional Conditons</h2>
            {/* For importing timeline  */}
            <TimeLine steps={steps} />

            <div className="w-full text-center my-4">
                <img src="/images/conditions.svg" alt="Deal" className={'w-16 block mx-auto'} />
            </div>

            <div className="w-full mb-2 p-2">
                <label className="block text-md font-bold ml-1">Offer expiration (optional)</label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="date"
                    name="expirationDate"
                    value={formik.values.expirationDate}
                    onChange={formik.handleChange}
                />
            </div>

            <div className="w-full mb-2 p-2">
                <label className="block text-md font-bold ml-1">Preferred Closing Date (optional)</label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="date"
                    name="closingDate"
                    value={formik.values.closingDate}
                    onChange={formik.handleChange}
                />
            </div>

            <div className="w-full mb-2 p-2">
                <label className="block text-md font-bold ml-1">Any notes or custom terms to add?</label>
                <textarea
                    className="mt-1 shadow appearance-none border rounded w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Enter notes here..."
                    rows="5"
                    name="terms"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.terms}
                ></textarea>
                {
                    formik.touched.terms && formik.errors.terms &&
                    <div className="text-sm text-red-500 mt-2 ml-1">{formik.errors.terms}</div>
                }
            </div>

            <div className="flex justify-between px-5">
                <button
                    type="button"
                    onClick={() => setSteps({ ...steps, third: false })}
                    className="border-2 border-primary rounded py-2 px-6 mx-2 text-primary"> Back</button>
                <button
                    type="submit"
                    onClick={() => {
                        if (formik.values.terms) {
                            setSteps({ ...steps, fourth: true })
                            formik.handleSubmit()
                        }
                    }}
                    className=" bg-green-400 text-white rounded py-2 px-6">Next Step</button>
            </div>
        </div>
    );
};

export default FourthStep;