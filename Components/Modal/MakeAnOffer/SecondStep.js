import React from 'react';
import TimeLine from './TimeLine';

const SecondStep = ({ steps, setSteps, formik }) => {
    return (
        <div className="px-5">
            <h2 className="text-primary font-medium text-center lg:text-2xl xl:text-3xl">Included Items</h2>
            {/* For importing timeline  */}
            <TimeLine steps={steps} />

            <div className="w-full text-center my-4">
                <img src="/images/appliance.svg" alt="Deal" className={'w-16 block mx-auto'} />
            </div>

            <div className="w-full mb-2 p-2">
                <label className="text-2xl font-medium mx-3" htmlFor="listItems">
                    List any items, appliances, or fittings that you would like to remain at the property.
                </label>
                <textarea
                    className="resize-none mt-5 shadow appearance-none border rounded w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline"
                    id="listItems"
                    type="text"
                    placeholder="List items here..."
                    rows="10"
                    name="listItems"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.listItems}
                ></textarea>
                {
                    formik.touched.listItems && formik.errors.listItems &&
                    <div className="text-sm text-red-500 mt-2 ml-1">{formik.errors.listItems}</div>
                }
            </div>

            <div className="flex justify-between px-5">
                <button
                    type="button"
                    onClick={() => setSteps({ ...steps, first: false })}
                    className="border-2 border-primary rounded py-2 px-6 mx-2 text-primary"> Back</button>
                <button
                    type="submit"
                    onClick={() => {
                        if (formik.values.listItems) {
                            setSteps({ ...steps, second: true })
                        }
                    }}
                    className=" bg-green-400 text-white rounded py-2 px-6">Next Step</button>
            </div>
        </div>
    );
};

export default SecondStep;