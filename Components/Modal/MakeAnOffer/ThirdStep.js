import React from 'react';
import TimeLine from './TimeLine';

const ThirdStep = ({ steps, setSteps, formik }) => {
    return (
        <div className="px-5">
            <h2 className="text-primary font-medium text-center lg:text-2xl xl:text-3xl">Conditions</h2>
            {/* For importing timeline  */}
            <TimeLine steps={steps} />

            <div className="w-full text-center my-4">
                <img src="/images/conditions.svg" alt="Deal" className={'w-16 block mx-auto'} />
            </div>

            <h2 className="text-2xl font-medium">Check any conditions related to the sale. </h2>
            <div className="bg-gray-50 p-3 my-8">
                <div className="mb-1 p-2">
                    <label className=" block text-gray-500 font-bold">
                        <input
                            className="mr-2 leading-tight"
                            type="checkbox"
                            name="anOtherPropertySell"
                            checked={formik.values.anOtherPropertySell}
                            onClick={formik.handleChange} />
                        <span class="text-sm">
                            Buyer needs to sell another property first.
                        </span>
                    </label>
                </div>

                <div className="mb-1 p-2">
                    <label className=" block text-gray-500 font-bold">
                        <input
                            className="mr-2 leading-tight"
                            type="checkbox"
                            name="inspection" 
                            checked={formik.values.inspection}
                            onClick={formik.handleChange}/>
                        <span class="text-sm">
                            Buyer to obtain satisfactory property inspection.
                        </span>
                    </label>
                </div>

                <div className="mb-1 p-2">
                    <label className=" block text-gray-500 font-bold">
                        <input
                            className="mr-2 leading-tight"
                            type="checkbox"
                            name="appraisal" 
                            checked={formik.values.appraisal}
                            onClick={formik.handleChange}/>
                        <span class="text-sm">
                            Buyer to obtain a satisfactory appraisal.
                        </span>
                    </label>
                </div>

                <div className="mb-1 p-2">
                    <label className=" block text-gray-500 font-bold">
                        <input
                            className="mr-2 leading-tight"
                            type="checkbox"
                            name="appropriateFinancing" 
                            checked={formik.values.appropriateFinancing}
                            onClick={formik.handleChange}/>
                        <span class="text-sm">
                            Buyer needs to obtain appropriate financing.
                        </span>
                    </label>
                </div>
            </div>

            <div className="flex justify-between px-5">
                <button
                    type="button"
                    onClick={() => setSteps({ ...steps, second: false })}
                    className="border-2 border-primary rounded py-2 px-6 mx-2 text-primary"> Back</button>
                <button
                    type="submit"
                    onClick={() => setSteps({ ...steps, third: true })}
                    className=" bg-green-400 text-white rounded py-2 px-6">Next Step</button>
            </div>
        </div>
    );
};

export default ThirdStep;