import React from 'react';

const Amenities = ({ steps, setSteps, formik }) => {
    return (
        <div className="p-6">
            <h2 className="uppercase text-center text-2xl font-bold my-5">what amenities does your home have?</h2>

            <div className="mb-3 p-2">
                <label className=" block text-gray-500 font-bold">
                    <input
                        className="mr-2 leading-tight"
                        type="checkbox"
                        name="amenities[wifi]"
                        checked={formik.values?.amenities?.wifi}
                        onChange={formik.handleChange} />
                    <span class="text-sm">
                        Wifi
                    </span>
                </label>
            </div>

            <div className="mb-3 p-2">
                <label className=" block text-gray-500 font-bold">
                    <input
                        className="mr-2 leading-tight"
                        type="checkbox"
                        name="amenities[kitchen]"
                        checked={formik.values?.amenities?.kitchen}
                        onChange={formik.handleChange} />
                    <span class="text-sm">
                        Fully Equipped Kitchen
                    </span>
                </label>
            </div>

            <div className="mb-3 p-2">
                <label className=" block text-gray-500 font-bold">
                    <input
                        className="mr-2 leading-tight"
                        type="checkbox"
                        name="amenities[woodFloors]"
                        checked={formik.values?.amenities?.woodFloors}
                        onChange={formik.handleChange} />
                    <span class="text-sm">
                        Wood Floors
                    </span>
                </label>
            </div>

            <div className="mb-3 p-2">
                <label className=" block text-gray-500 font-bold">
                    <input
                        className="mr-2 leading-tight"
                        type="checkbox"
                        name="amenities[carpet]"
                        checked={formik.values?.amenities?.carpet}
                        onChange={formik.handleChange} />
                    <span class="text-sm">
                        Wall-To-Wall Carpet
                    </span>
                </label>
            </div>

            <div className="mb-3 p-2">
                <label className=" block text-gray-500 font-bold">
                    <input
                        className="mr-2 leading-tight"
                        type="checkbox"
                        name="amenities[windowCoverings]"
                        checked={formik.values?.amenities?.windowCoverings}
                        onChange={formik.handleChange} />
                    <span class="text-sm">
                        Window Coverings
                    </span>
                </label>
            </div>

            <div className="mb-3 p-2">
                <label className=" block text-gray-500 font-bold">
                    <input
                        className="mr-2 leading-tight"
                        type="checkbox"
                        name="amenities[innerMattress]"
                        checked={formik.values?.amenities?.innerMattress}
                        onChange={formik.handleChange} />
                    <span class="text-sm">
                        Inner-Spring Mattress
                    </span>
                </label>
            </div>

            <div className="mb-3 p-2">
                <label className=" block text-gray-500 font-bold">
                    <input
                        className="mr-2 leading-tight"
                        type="checkbox"
                        name="amenities[memoryMattress]"
                        checked={formik.values?.amenities?.memoryMattress}
                        onChange={formik.handleChange} />
                    <span class="text-sm">
                        Memory Mattress
                    </span>
                </label>
            </div>

            <div className="mb-3 p-2">
                <label className=" block text-gray-500 font-bold">
                    <input
                        className="mr-2 leading-tight"
                        type="checkbox"
                        name="amenities[sleeperCouch]"
                        checked={formik.values?.amenities?.sleeperCouch}
                        onChange={formik.handleChange} />
                    <span class="text-sm">
                        Sleeper Couch
                    </span>
                </label>
            </div>

            <div className="mb-3 p-2">
                <label className=" block text-gray-500 font-bold">
                    <input
                        className="mr-2 leading-tight"
                        type="checkbox"
                        name="amenities[ac]"
                        checked={formik.values?.amenities?.ac}
                        onChange={formik.handleChange} />
                    <span class="text-sm">
                        Air Conditioning (A/C)
                    </span>
                </label>
            </div>

            <div className="mb-3 p-2">
                <label className=" block text-gray-500 font-bold">
                    <input
                        className="mr-2 leading-tight"
                        type="checkbox"
                        name="amenities[heater]"
                        checked={formik.values?.amenities?.heater}
                        onChange={formik.handleChange} />
                    <span class="text-sm">
                        Heater
                    </span>
                </label>
            </div>

            <div className="mb-3 p-2">
                <label className=" block text-gray-500 font-bold">
                    <input
                        className="mr-2 leading-tight"
                        type="checkbox"
                        name="amenities[washer]"
                        checked={formik.values?.amenities?.washer}
                        onChange={formik.handleChange} />
                    <span class="text-sm">
                        Washer & Dryer
                    </span>
                </label>
            </div>

            <div className="mb-3 p-2">
                <label className=" block text-gray-500 font-bold">
                    <input
                        className="mr-2 leading-tight"
                        type="checkbox"
                        name="amenities[parking]"
                        checked={formik.values?.amenities?.parking}
                        onChange={formik.handleChange} />
                    <span class="text-sm">
                        Off Street Parking
                    </span>
                </label>
            </div>

            <div className="mb-3 p-2">
                <label className=" block text-gray-500 font-bold">
                    <input
                        className="mr-2 leading-tight"
                        type="checkbox"
                        name="amenities[garage]"
                        checked={formik.values?.amenities?.garage}
                        onChange={formik.handleChange} />
                    <span class="text-sm">
                        Attached Garage
                    </span>
                </label>
            </div>

            <div className="mb-3 p-2">
                <label className=" block text-gray-500 font-bold">
                    <input
                        className="mr-2 leading-tight"
                        type="checkbox"
                        name="amenities[outdoorSpace]"
                        checked={formik.values?.amenities?.outdoorSpace}
                        onChange={formik.handleChange} />
                    <span class="text-sm">
                        Outdoor Space
                    </span>
                </label>
            </div>

            <div className="mb-3 p-2">
                <label className=" block text-gray-500 font-bold">
                    <input
                        className="mr-2 leading-tight"
                        type="checkbox"
                        name="amenities[tv]"
                        checked={formik.values?.amenities?.tv}
                        onChange={formik.handleChange} />
                    <span class="text-sm">
                        TV / Cable
                    </span>
                </label>
            </div>

            <div className="mb-3 p-2">
                <label className=" block text-gray-500 font-bold">
                    <input
                        className="mr-2 leading-tight"
                        type="checkbox"
                        name="amenities[laptop]"
                        checked={formik.values?.amenities?.laptop}
                        onChange={formik.handleChange} />
                    <span class="text-sm">
                        Laptop Work Area
                    </span>
                </label>
            </div>

            <div className="mb-3 p-2">
                <label className=" block text-gray-500 font-bold">
                    <input
                        className="mr-2 leading-tight"
                        type="checkbox"
                        name="amenities[smokeDetector]"
                        checked={formik.values?.amenities?.smokeDetector}
                        onChange={formik.handleChange} />
                    <span class="text-sm">
                        Smoke Detector
                    </span>
                </label>
            </div>

            <div className="mb-3 p-2">
                <label className=" block text-gray-500 font-bold">
                    <input
                        className="mr-2 leading-tight"
                        type="checkbox"
                        name="amenities[travelCrib]"
                        checked={formik.values?.amenities?.travelCrib}
                        onChange={formik.handleChange} />
                    <span class="text-sm">
                        Travel Crib
                    </span>
                </label>
            </div>

            <div className="mb-3 p-2">
                <label className=" block text-gray-500 font-bold">
                    <input
                        className="mr-2 leading-tight"
                        type="checkbox"
                        name="amenities[jacuzzi]"
                        checked={formik.values?.amenities?.jacuzzi}
                        onChange={formik.handleChange} />
                    <span class="text-sm">
                        Jacuzzi
                    </span>
                </label>
            </div>

            <div className="w-full mb-2 p-2">
                <button
                    type="button"
                    onClick={() => setSteps({ ...steps, first: false })}
                    className="text-primary border-2 border-primary rounded py-2 px-12 m-2">Back</button>
                <button
                    type="submit"
                    onClick={() => setSteps({ ...steps, second: true })}
                    className=" bg-green-400 text-white rounded py-2 px-12">Next Step</button>
            </div>
        </div>
    );
};

export default Amenities;