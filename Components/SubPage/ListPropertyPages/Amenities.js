import { useFormik } from 'formik';
import React from 'react';

const Amenities = ({ steps, setSteps }) => {
    const validate = values => {
        const errors = {};

        // if (!values.wifi) { errors.wifi = 'Required' }

        return errors;
    };

    const formik = useFormik({
        initialValues: {
            wifi: false,
            kitchen: false,
            woodFloors: false,
            carpet: false,
            windowCoverings: false,
            innerMattress: false,
            sleeperCouch: false,
            ac: false,
            heater: false,
            washer: false,
            parking: false,
            garage: false,
            outdoorSpace: false,
            tv: false,
            laptop: false,
            smokeDetector: false,
            travelCrib: false,
            jacuzzi: false,
        },
        validate,
        onSubmit: values => {
            setSteps({ ...steps, second: true })
        },
    });
    return (
        <div className="p-6">
            <h2 className="uppercase text-center text-2xl font-bold my-5">what amenities does your home have?</h2>
            <form onSubmit={formik.handleSubmit} >

                <div className="mb-3 p-2">
                    <label className=" block text-gray-500 font-bold">
                        <input
                            className="mr-2 leading-tight"
                            type="checkbox"
                            name="wifi"
                            checked={formik.values.wifi}
                            onChange={formik.handleChange} />
                        <span class="text-sm">
                            Wifi
                        </span>
                    </label>
                    {
                        formik.errors.wifi &&
                        <div className="text-md text-red-500 mt-2 ml-1">{formik.errors.wifi}</div>
                    }
                </div>

                <div className="mb-3 p-2">
                    <label className=" block text-gray-500 font-bold">
                        <input
                            className="mr-2 leading-tight"
                            type="checkbox"
                            name="kitchen"
                            checked={formik.values.kitchen}
                            onChange={formik.handleChange} />
                        <span class="text-sm">
                            Fully Equipped Kitchen
                        </span>
                    </label>
                    {
                        formik.errors.kitchen &&
                        <div className="text-md text-red-500 mt-2 ml-1">{formik.errors.kitchen}</div>
                    }
                </div>

                <div className="mb-3 p-2">
                    <label className=" block text-gray-500 font-bold">
                        <input
                            className="mr-2 leading-tight"
                            type="checkbox"
                            name="woodFloors"
                            checked={formik.values.woodFloors}
                            onChange={formik.handleChange} />
                        <span class="text-sm">
                            Wood Floors
                        </span>
                    </label>
                    {
                        formik.errors.woodFloors &&
                        <div className="text-md text-red-500 mt-2 ml-1">{formik.errors.woodFloors}</div>
                    }
                </div>

                <div className="mb-3 p-2">
                    <label className=" block text-gray-500 font-bold">
                        <input
                            className="mr-2 leading-tight"
                            type="checkbox"
                            name="carpet"
                            checked={formik.values.carpet}
                            onChange={formik.handleChange} />
                        <span class="text-sm">
                            Wall-To-Wall Carpet
                        </span>
                    </label>
                    {
                        formik.errors.carpet &&
                        <div className="text-md text-red-500 mt-2 ml-1">{formik.errors.carpet}</div>
                    }
                </div>

                <div className="mb-3 p-2">
                    <label className=" block text-gray-500 font-bold">
                        <input
                            className="mr-2 leading-tight"
                            type="checkbox"
                            name="windowCoverings"
                            checked={formik.values.windowCoverings}
                            onChange={formik.handleChange} />
                        <span class="text-sm">
                            Window Coverings
                        </span>
                    </label>
                    {
                        formik.errors.windowCoverings &&
                        <div className="text-md text-red-500 mt-2 ml-1">{formik.errors.windowCoverings}</div>
                    }
                </div>

                <div className="mb-3 p-2">
                    <label className=" block text-gray-500 font-bold">
                        <input
                            className="mr-2 leading-tight"
                            type="checkbox"
                            name="innerMattress"
                            checked={formik.values.innerMattress}
                            onChange={formik.handleChange} />
                        <span class="text-sm">
                            Inner-Spring Mattress
                        </span>
                    </label>
                    {
                        formik.errors.innerMattress &&
                        <div className="text-md text-red-500 mt-2 ml-1">{formik.errors.innerMattress}</div>
                    }
                </div>

                <div className="mb-3 p-2">
                    <label className=" block text-gray-500 font-bold">
                        <input
                            className="mr-2 leading-tight"
                            type="checkbox"
                            name="memoryMattress"
                            checked={formik.values.memoryMattress}
                            onChange={formik.handleChange} />
                        <span class="text-sm">
                            Memory Mattress
                        </span>
                    </label>
                    {
                        formik.errors.memoryMattress &&
                        <div className="text-md text-red-500 mt-2 ml-1">{formik.errors.memoryMattress}</div>
                    }
                </div>

                <div className="mb-3 p-2">
                    <label className=" block text-gray-500 font-bold">
                        <input
                            className="mr-2 leading-tight"
                            type="checkbox"
                            name="sleeperCouch"
                            checked={formik.values.sleeperCouch}
                            onChange={formik.handleChange} />
                        <span class="text-sm">
                            Sleeper Couch
                        </span>
                    </label>
                    {
                        formik.errors.sleeperCouch &&
                        <div className="text-md text-red-500 mt-2 ml-1">{formik.errors.sleeperCouch}</div>
                    }
                </div>

                <div className="mb-3 p-2">
                    <label className=" block text-gray-500 font-bold">
                        <input
                            className="mr-2 leading-tight"
                            type="checkbox"
                            name="ac"
                            checked={formik.values.ac}
                            onChange={formik.handleChange} />
                        <span class="text-sm">
                            Air Conditioning (A/C)
                        </span>
                    </label>
                    {
                        formik.errors.ac &&
                        <div className="text-md text-red-500 mt-2 ml-1">{formik.errors.ac}</div>
                    }
                </div>

                <div className="mb-3 p-2">
                    <label className=" block text-gray-500 font-bold">
                        <input
                            className="mr-2 leading-tight"
                            type="checkbox"
                            name="heater"
                            checked={formik.values.heater}
                            onChange={formik.handleChange} />
                        <span class="text-sm">
                            Heater
                        </span>
                    </label>
                    {
                        formik.errors.heater &&
                        <div className="text-md text-red-500 mt-2 ml-1">{formik.errors.heater}</div>
                    }
                </div>

                <div className="mb-3 p-2">
                    <label className=" block text-gray-500 font-bold">
                        <input
                            className="mr-2 leading-tight"
                            type="checkbox"
                            name="washer"
                            checked={formik.values.washer}
                            onChange={formik.handleChange} />
                        <span class="text-sm">
                            Washer & Dryer
                        </span>
                    </label>
                    {
                        formik.errors.washer &&
                        <div className="text-md text-red-500 mt-2 ml-1">{formik.errors.washer}</div>
                    }
                </div>

                <div className="mb-3 p-2">
                    <label className=" block text-gray-500 font-bold">
                        <input
                            className="mr-2 leading-tight"
                            type="checkbox"
                            name="parking"
                            checked={formik.values.parking}
                            onChange={formik.handleChange} />
                        <span class="text-sm">
                            Off Street Parking
                        </span>
                    </label>
                    {
                        formik.errors.parking &&
                        <div className="text-md text-red-500 mt-2 ml-1">{formik.errors.parking}</div>
                    }
                </div>

                <div className="mb-3 p-2">
                    <label className=" block text-gray-500 font-bold">
                        <input
                            className="mr-2 leading-tight"
                            type="checkbox"
                            name="garage"
                            checked={formik.values.garage}
                            onChange={formik.handleChange} />
                        <span class="text-sm">
                            Attached Garage
                        </span>
                    </label>
                    {
                        formik.errors.garage &&
                        <div className="text-md text-red-500 mt-2 ml-1">{formik.errors.garage}</div>
                    }
                </div>

                <div className="mb-3 p-2">
                    <label className=" block text-gray-500 font-bold">
                        <input
                            className="mr-2 leading-tight"
                            type="checkbox"
                            name="outdoorSpace"
                            checked={formik.values.outdoorSpace}
                            onChange={formik.handleChange} />
                        <span class="text-sm">
                            Outdoor Space
                        </span>
                    </label>
                    {
                        formik.errors.outdoorSpace &&
                        <div className="text-md text-red-500 mt-2 ml-1">{formik.errors.outdoorSpace}</div>
                    }
                </div>

                <div className="mb-3 p-2">
                    <label className=" block text-gray-500 font-bold">
                        <input
                            className="mr-2 leading-tight"
                            type="checkbox"
                            name="tv"
                            checked={formik.values.tv}
                            onChange={formik.handleChange} />
                        <span class="text-sm">
                            TV / Cable
                        </span>
                    </label>
                    {
                        formik.errors.tv &&
                        <div className="text-md text-red-500 mt-2 ml-1">{formik.errors.tv}</div>
                    }
                </div>

                <div className="mb-3 p-2">
                    <label className=" block text-gray-500 font-bold">
                        <input
                            className="mr-2 leading-tight"
                            type="checkbox"
                            name="laptop"
                            checked={formik.values.laptop}
                            onChange={formik.handleChange} />
                        <span class="text-sm">
                            Laptop Work Area
                        </span>
                    </label>
                    {
                        formik.errors.laptop &&
                        <div className="text-md text-red-500 mt-2 ml-1">{formik.errors.laptop}</div>
                    }
                </div>

                <div className="mb-3 p-2">
                    <label className=" block text-gray-500 font-bold">
                        <input
                            className="mr-2 leading-tight"
                            type="checkbox"
                            name="smokeDetector"
                            checked={formik.values.smokeDetector}
                            onChange={formik.handleChange} />
                        <span class="text-sm">
                            Smoke Detector
                        </span>
                    </label>
                    {
                        formik.errors.smokeDetector &&
                        <div className="text-md text-red-500 mt-2 ml-1">{formik.errors.smokeDetector}</div>
                    }
                </div>

                <div className="mb-3 p-2">
                    <label className=" block text-gray-500 font-bold">
                        <input
                            className="mr-2 leading-tight"
                            type="checkbox"
                            name="travelCrib"
                            checked={formik.values.travelCrib}
                            onChange={formik.handleChange} />
                        <span class="text-sm">
                            Travel Crib
                        </span>
                    </label>
                    {
                        formik.errors.travelCrib &&
                        <div className="text-md text-red-500 mt-2 ml-1">{formik.errors.travelCrib}</div>
                    }
                </div>

                <div className="mb-3 p-2">
                    <label className=" block text-gray-500 font-bold">
                        <input
                            className="mr-2 leading-tight"
                            type="checkbox"
                            name="jacuzzi"
                            checked={formik.values.jacuzzi}
                            onChange={formik.handleChange} />
                        <span class="text-sm">
                            Jacuzzi
                        </span>
                    </label>
                    {
                        formik.errors.jacuzzi &&
                        <div className="text-md text-red-500 mt-2 ml-1">{formik.errors.jacuzzi}</div>
                    }
                </div>

                <div className="w-full mb-2 p-2">
                    <button type="submit" className=" bg-green-400 text-white rounded py-2 px-12">Next Step</button>
                </div>
            </form>
        </div>
    );
};

export default Amenities;